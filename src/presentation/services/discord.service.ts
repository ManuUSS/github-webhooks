import { envs } from '../../config';


export class DiscordService {

  private readonly webhookUrl:string = envs.DISCORD_WEBHOOK_URL;

  constructor(){};


  async notify( message:string ){

    const body = {
      content: message,
      // embeds: [
      //   {
      //     image: { url: 'https://media.giphy.com/media/3o7TKz9b4vVv6A5X3i/giphy.gif' }
      //   }
      // ]
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


