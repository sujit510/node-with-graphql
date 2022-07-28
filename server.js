import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { queryResolvers } from './resolver.js'
// import { queryResolvers } from './response'
// import { queryResolvers } from './response'

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
    hello9: Int
  }
`)

const app = express()
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: queryResolvers,
  graphiql: true
}))
app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql')
