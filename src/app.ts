import express from 'express';
import { envs } from './config';

(()=>{

  main();

})()

function main () {

  const app = express();

  app.use( express.json() );

  app.listen( envs.PORT, () => {
    console.log(`Server listening on port ${envs.PORT}`);
  });


};
