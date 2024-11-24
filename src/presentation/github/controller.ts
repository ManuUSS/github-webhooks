import type { Request, Response } from 'express';
import { GithubService } from '../services/github.service';


export class GithubController {

  constructor(
    private readonly githubService = new GithubService()
  ){};


  webhookHandler = ( req:Request, res:Response ) => {

    const gitHubEvent = req.headers['x-github-event'] ?? 'unknown';
    const gitHubSignature = req.headers['x-hub-signature-256'] ?? 'unknown';

    const payload = req.body;
    let message:string = '';

    switch ( gitHubEvent ) {
      case 'star':
        message = this.githubService.onStar( payload );
      break;

      case 'issues':
        message = this.githubService.onIssue( payload );
      break;

      default:
        console.log('Unknown event');
    }

    console.log( message );

    res.status(201).send('Accepted');
  }

};


