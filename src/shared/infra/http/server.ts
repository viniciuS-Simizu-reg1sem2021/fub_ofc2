import 'reflect-metadata'
import express from 'express'
import { errors } from 'celebrate'
import { mainRouter } from './routes'
import { createConnection } from 'typeorm'

const app = express()

app.listen(3000, async () => {
  await createConnection()
  console.log(`SERVER STARTED ON http://localhost:3000`)
})

app.use('/v1/fub', mainRouter)
app.use(errors())

/**
 * TODO: VERIFICAR SE AS TABELAS AUXILIARES PRECISAM DE ALGO &
 *  CONSERTAR O PROBLEMA DO ORMCONFIG
 *  VERIFICAR SE O BASEREPOSITORY FUNCIONA
 *  VERIFICAR COMO FAZER O SCHEMA DO USER
 *  SCHEMA FAZENDO A LIGAÇÃO ENTRE MAIS DE UM MODULO
 *  VERIFICAR SE OS MODULOS DEFAULT ESTÃO CERTOS
 *  CONSERTAR A LIGAÇÃO ENTRE MODULOS, ADICIONANDO O MANY TO ONE, ONE TO MANY E AFINS
 *  REFATORAR TODAS AS ENTIDADES, PROVAVELMENTE O ÚNICO ERRADO
 **/
