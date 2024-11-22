import type { Request, Response } from 'express';


export class GithubController {

  constructor(){};


  webhookHandler = ( req:Request, res:Response ) => {
    res.status(200).send('Webhook received');
  }

};


