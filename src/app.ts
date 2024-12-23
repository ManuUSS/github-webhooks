import express from 'express';
import { envs } from './config';
import { GithubController } from './presentation/github/controller';
import { GithubSha256Middleware } from './presentation/middlewares/github-sha256.middleware';

(()=>{

  main();

})()

function main () {

  const app = express();
  
  app.use( express.json() );
  app.use( GithubSha256Middleware.verifySignature );
  
  const controller = new GithubController();
  app.post('/api/github', controller.webhookHandler );

  app.listen( envs.PORT, () => {
    console.log(`Server listening on port ${envs.PORT}`);
  });


};
