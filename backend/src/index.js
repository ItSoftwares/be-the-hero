const express = require('express')
const cors = require('cors')

const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)

/**
 * MÉTODOS HTTP
 * 
 * GET      -> PARA BUSCAR ALGUMA COISA (PEGAR)
 * POST     -> CRIAR UMA INFORMAÇÃO NO BACKEND
 * PUT      -> ALTERAR INFORMAÇÃO NO BACKEND
 * DELETE   -> DELETAR ALGUMA INFORMAÇÃO NO BACKEND
 * 
 */

/**
 * 
 * TIPOS DE PARAMETRO
 * 
 * Query params: Parâmetros nomeados enviados na rota após "?" (paginação, filtros)		request.query
 * Route params: Parâmetros utilizados para identificar recursos (/:id)         		request.params
 * Request body: Corpo da requisição usado para criar ou alterar recursos				request.body
 * 
 */

 /**
  * 
  * 
  * 
  */