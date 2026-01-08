<?php

namespace App\Traits\Gateways;


use Log;
use App\Models\Wallet;
use App\Models\Deposit;
use App\Models\Transaction;
use App\Helpers\Core as Helper;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

trait EfiTrait
{
        public function authEfi()
        {
                $client_id = "Client_Id_46ac1e7792345c4b3d52d85fc547718326cd528d";
                $client_secret = "Client_Secret_96bfcadc4800083375de02f0c3366a94dd94597a";

                // Monta a string no formato Basic Auth (client_id:client_secret → base64)
                $auth = base64_encode($client_id . ":" . $client_secret);

                $url = "https://pix.api.efipay.com.br/oauth/token";

                $ch = curl_init();

                curl_setopt_array($ch, [
                    CURLOPT_URL => $url,
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_POST => true,
                    
                    CURLOPT_POSTFIELDS => json_encode([
                        "grant_type" => "client_credentials"
                    ]),
                    CURLOPT_HTTPHEADER => [
                        "Content-Type: application/json",
                        "Authorization: Basic " . $auth
                    ],
                    // certificado
                    CURLOPT_SSLCERTTYPE => "P12", 
                    CURLOPT_SSLCERT => "/var/www/lojavirtual.p12",
                    CURLOPT_SSL_VERIFYPEER => true // deixa true em produção
                ]);

              

                $response = curl_exec($ch);

                if (curl_errno($ch)) {
                    echo "Erro cURL: " . curl_error($ch);
                }

                curl_close($ch);
    

            return json_decode($response)->access_token;
        }

        public function payPix($request)
        {

            
            
         $txid = $this->gerarChavePixCustom(32); // Identificador único do pagamento (máx. 35 caracteres)

         $token = $this->authEfi();


             $postData =  json_encode([
            'calendario' => [
                'expiracao' => 86400
            ],
            'valor' => [
                'original' => $request['amount']
            ],
            'chave' => "43961c38-58ed-4dec-844c-bd5f171e480d"
        ]);

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://pix.api.efipay.com.br/v2/cob/'.$txid,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_SSLCERTTYPE => 'P12',
            CURLOPT_SSLCERT => "/var/www/lojavirtual.p12", //'/var/www/VOLUTI_70.pfx',//'/var/www/html/api.neloreinvest.com/VOLUTI_70.pfx',
            // CURLOPT_SSLCERTPASSWD => $data['password_in'],
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'PUT',
                    CURLOPT_POSTFIELDS => $postData ,
                        CURLOPT_HTTPHEADER => array(
                        'Accept: application/json',
                            "Authorization: Bearer $token",
                        'Content-Type: application/json'
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);

         $responseData = json_decode($response, true);

         $idUnico = $responseData['txid']; // ID único da transação retornado pela API
         $externalId = 'efi_' . $idUnico; // Gerar um external_id único para associar a transação e o depósito

            DB::transaction(function () use ($responseData, $request, $idUnico, $externalId) {
                // Log::info('[vizzerpay] Iniciando transação e depósito', [
                //     'transactionId' => $responseData['reference_code'],
                //     'amount' => $request->input("amount"),
                //     'external_id' => $externalId
                // ]);

                // Salvar a transação com o external_id
                self::generateTransaction($responseData['txid'], $request['amount'], $externalId);

                // Salvar o depósito com o external_id
                self::generateDeposit($responseData['txid'], $request['amount'], $externalId);
            });


            return response()->json([
                'status' => true,
                'transactionId' => $responseData['txid'], 
                'qrcode' => $responseData['pixCopiaECola'] ?? null,
                'externalId' => $externalId 
            ]);


           
        }


        public function gerarChavePixCustom($length = 32) {
            $characters = '0123456789abcdefghijklmnopqrstuvwxyz';
            $charactersLength = strlen($characters);
            $randomString = '';
            
            for ($i = 0; $i < $length; $i++) {
                $randomString .= $characters[random_int(0, $charactersLength - 1)];
            }
            
            return $randomString;
        }


        private static function generateTransaction($idTransaction, $amount, $externalId)
        {
            $setting = \Helper::getSetting();

            Transaction::create([
                'payment_id' => $idTransaction,
                'user_id' => auth('api')->user()->id,
                'payment_method' => 'pix',
                'price' => $amount,
                'currency' => $setting->currency_code,
                'status' => 0,
                'external_id' => $externalId, // Adicionando o external_id
            ]);
        }

        private static function generateDeposit($idTransaction, $amount, $externalId)
        {
            $userId = auth('api')->user()->id;
            $wallet = Wallet::where('user_id', $userId)->first();

            Deposit::create([
                'payment_id'=> $idTransaction,
                'user_id'   => $userId,
                'amount'    => $amount,
                'type'      => 'pix',
                'currency'  => $wallet->currency,
                'symbol'    => $wallet->symbol,
                'status'    => 0,
                'external_id' => $externalId, // Adicionando o external_id
            ]);
        }

        
}
