<?php

namespace App\Traits\Providers;

use App\Models\User;
use App\Traits\Missions\MissionTrait;
use Illuminate\Support\Facades\Cache;
use GuzzleHttp\Client;

trait TrbPlayTrait
{
    use MissionTrait;

    public function getCredentialsIgt()
    {
        return [
            'hall' => '3206409',
            // 'hall' => '3206408',
            'key'  => 'T8xtjGQdTzo3qmzaTxRhw56dL' 
        ];
       
    }


    public function gameLaunchIgt($game)
    {
     
        $headers = [
            "Content-Type" => 'application/json',
        ];
    
          $postArray = [
            'cmd'       => 'openGame',
            'hall'      => $this->getCredentialsIgt()['hall'],
            'domain'    => 'https://'.request()->getHost(),
            'exitUrl'   => 'https://'.request()->getHost(),
            'language'  => 'pt-BR',
            'key'       => $this->getCredentialsIgt()['key'],
            'login'     => auth('api')->user()->id,
            'gameId'    => $game,
            'cdnUr'     => 'https://igaming.nyc3.digitaloceanspaces.com/images',
            'demo'      => 0
          ];
    
          $client = new Client();

          $requestNew = new \GuzzleHttp\Psr7\Request('POST', 'https://tbs2api.aslot.net/API/openGame/', $headers, json_encode($postArray));
          $res = $client->sendAsync($requestNew)->wait();
    
          if ($res->getStatusCode() === 200) {
    
            $data = json_decode($res->getBody());
    
            Cache::put('opem-game', $data, 30);
            
            return ["launch_url" => $data->content->game->url];
            // return $data->content->game->url;
    
          }

    }

    public function listGames()
    {

 
        $headers = [
            "Content-Type" => 'application/json',
        ];
    
          $postArray = [
            'cmd'       => 'gamesList',
            'hall'      => $this->getCredentialsIgt()['hall'],
            'key'       => $this->getCredentialsIgt()['key'],         
            'cdnUr'     => 'https://igaming.nyc3.digitaloceanspaces.com/images',

          ];
    
          $client = new Client();

          $requestNew = new \GuzzleHttp\Psr7\Request('POST', 'https://tbs2api.aslot.net/API/', $headers, json_encode($postArray));
          $res = $client->sendAsync($requestNew)->wait();
    
          if ($res->getStatusCode() === 200) {
    
            $data = json_decode($res->getBody());
    
            Cache::put('opem-game', $data, 3000000);

            return $data;
            
    
            // return $data->content->game->url;
    
          }
    }

    public function webhookIgt($request)
    {
      $user = User::find($request->login);

      if($request->cmd === "getBalance") {
          if($user && $this->getCredentialsIgt()['hall'] === $request->hall) {
            return [
              "status"    => "success",
              "error"     => "",
              "login"     => $user->name,
              "balance"   => $user->wallet->balance,
              "currency"  => "BRL"
            ];
          } else {
            return [
              "status"  => "fail",
              "error"   => 400
            ];
          }
      }

      if($request->cmd === "writeBet") {

        //Jogou e perdeu
        if($request->win === '0' && $request->bet > 0) {

          $balance = $user->wallet->balance -= $request->bet;
          $user->wallet->save();

          return [
            "status"    => "success",
            "error"     => "",
            "login"     => $user->username,
            "balance"   => $balance,
            "currency"  => "BRL"
          ];

        }

        //Jogou e ganhou
        if($request->bet === '0' && $request->win > 0) {

          $balance = $user->wallet->balance += $request->win;
          $user->wallet->save();

          return [
            "status"    => "success",
            "error"     => "",
            "login"     => $user->username,
            "balance"   => $balance,
            "currency"  => "BRL"
          ];

          
        }

      }

    }

    
}
