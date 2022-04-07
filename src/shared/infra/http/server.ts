import 'reflect-metadata'
import express from 'express'
import { errors } from 'celebrate'
import { mainRouter } from './routes'
import { createConnection } from 'typeorm'

const app = express()

app.use(express.json())

app.listen(3000, async () => {
  await createConnection()
  console.log(`SERVER STARTED ON http://localhost:3000`)
})

app.use('/v1/fub', mainRouter)
app.use(errors())

/** TODO
 *   VERIFICAR COMO FAZER O SCHEMA DO CONTRACT (PEGAR O USER)
 *   IMPLEMENTAR O JWT E SERVIÇOS DE AUTENTICAÇÃO
 *   SCHEMAS, VERIFICAR FOREIGN KEYS NELES
 *   VERIFICAR SOBRE A IMAGEM DO USUÁRIO
 **/
