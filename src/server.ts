import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { AppDataSource} from './database/data-source'
import routers from './routes/Routes'
import bodyParser from 'body-parser';

//cria um app gerenciado pelo express
const app = express()

app.use(cors());

app.use(bodyParser.json()); // Adicione esta linha

app.use(routers);


AppDataSource.initialize()
.then(async () =>{
  console.log("DB Ok")
  app.listen(3333,() => {
      console.log("Server started on 3333")
  })
}
)


