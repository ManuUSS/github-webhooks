import type { GitHubIssuePayload, GitHubStarPayload } from '../../interfaces';


export class GithubService {

  constructor(){};


  onStar( payload:GitHubStarPayload ):string {

    const { sender, action, repository } = payload;

    return `User ${sender.login} ${ action } star on repository ${repository.full_name}`;

  }

  onIssue( payload:GitHubIssuePayload ):string {

    const { sender, action, repository, issue } = payload;

    if( action === 'opened' ) {
      return `User ${sender.login} ${ action } issue ${issue.title} on repository ${repository.full_name}`;
    }

    if( action === 'closed' ) {
      return `An issue was closed by ${ issue.user.login }`;
    }

    if ( action === 'reopened' ) {
      return `An issue was reopened by ${ issue.user.login }`;
    }

    return `Unhandled action for the issue event ${ action }`;

  }
  
}


