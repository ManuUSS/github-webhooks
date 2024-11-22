import type { Request, Response } from 'express';


export class GithubController {

  constructor(){};


  webhookHandler = ( req:Request, res:Response ) => {

    const gitHubEvent = req.headers['x-github-event'] ?? 'unknown';
    const gitHubSignature = req.headers['x-hub-signature-256'] ?? 'unknown';
    const payload = req.body;


    res.status(201).send('Accepted');
  }

};


