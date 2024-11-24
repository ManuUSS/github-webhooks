import { envs } from '../../config';


export class DiscordService {

  private readonly webhookUrl:string = envs.DISCORD_WEBHOOK_URL;

  constructor(){};


  async notify( message:string ){

    const body = {
      content: message
    };

    const response = await fetch( this.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( body )
    });

    if( !response.ok ){
      throw new Error(`Failed to send message to Discord. Status: ${response.status}`);
    }

  };

};


