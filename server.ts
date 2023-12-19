import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { AppDataSource} from './src/database/data-source'
import routers from './src/routes/Routes';

//cria um app gerenciado pelo express
const app = express()

app.use(cors());

app.use(routers);

app.use(express.json())
//inicializa a conexão

AppDataSource.initialize()
.then(async () =>{
  console.log("DB Ok")
  app.listen(3333,() => {
      console.log("Server started on 3333")
  })
}
)


