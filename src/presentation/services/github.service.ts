import { type GitHubStarPayload } from '../../interfaces';


export class GithubService {

  constructor(){};


  onStar( payload:GitHubStarPayload ):string {

    let message:string = '';
    const { sender, action, repository } = payload;

    return `User ${sender.login} ${ action } star on repository ${repository.full_name}`;

  }
  
}


