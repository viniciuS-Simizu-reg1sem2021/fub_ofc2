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
 *   PEGAR O EMPLOYER DIRETO NO CONTROLLER POR MEIO DO TOKEN
 *   O MESMO SE REPLICARÁ PARA OS SERVIÇOS EM QUE ADICIONAREMOS UM EMPLOYEE
 *   IMPLEMENTAR O JWT E SERVIÇOS DE AUTENTICAÇÃO
 *   CRIAR UM HELPER PARA BARRAR A ENTRADA DE USUÁRIOS QUE JÁ EXISTEM NO CREATE USER SERVICE
 *    - SE NÃO FUNCIONAR DO HELPER MELHORAR O CONFIG DE UPLOADS
 *    - POIS O PROBLEMA É SEMPRE UPLODEAR O ARQUIVO
 *    - MESMO SE ELE RETORNA UM ERRO
 **/
