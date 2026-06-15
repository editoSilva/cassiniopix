<?php

namespace App\Console\Commands;

use App\Traits\Providers\TrbPlayTrait;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;


class PlayGround extends Command
{
    use TrbPlayTrait;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:play-ground';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $publicKey = 'S8h0sEt-96inMpO-yY74njV-46rrnG';
        $secretKey = 'h6AtgMrN7s-ux2B0113T0-0kdxi3D7wK-gFOaEJbpVS-v49m6qPa8t-9c5r7';
        
        // ===== CONFIGURAÇÕES =====
        $baseUrl   = 'https://system.horizonbanking.com.br';
        $urlPath   = '/api/orders/create_simple';

        $amount = 50;
        // ===== PAYLOAD =====
        $payload = [
            'customId'  => 'WD-' . uniqid(),
            'amount'    => $amount,
            'returnUrl' => '',
            'type' => 'pix',
            'customer'  => [
                'name'     => 'Edito Silva',
                'email'    => 'edito.desenvolvedor@gmail.com',
                'document' => '03366272546',
            ],'paymentMethodForm' => [
                'docType'    => 'CPF',
                'document'   => '03366272546',
                'email'      => 'edito.desenvolvedor@gmail.com',
                'fullName'   => 'Edito Silva',
                'clientCode' => 'CUST-00015',
                'phone'      => '+5511918689508',
            ]
        ];


        // ===== 1) BODY JSON (sem escapar barras) =====
        $bodyString = json_encode($payload, JSON_UNESCAPED_SLASHES);

        // ===== 2) BASE STRING (EXATO DA HORIZON) =====
        $baseString = $bodyString . '&|&' . $urlPath;

        // ===== 3) HMAC-SHA256 (HEX) =====
        $hashHex = hash_hmac('sha256', $baseString, $secretKey);

        // ===== 4) HEX → BASE64 =====
        $signature = base64_encode($hashHex);

        // ===== 5) REMOVE "=" =====
        $signature = rtrim($signature, '=');



        $response = Http::withHeaders([
            'Content-Type'    => 'application/json',
            'x-api-key'       => $publicKey,
            'x-api-signature' => $signature,
        ])->post($baseUrl . $urlPath, $payload);



        $data = $response->json();

        dd($data);

        $qrCodePix = $data['data']['order']['invoice']['bankData']['payment']['qrCode'] ?? null;


        dd($qrCodePix);
    }
}
