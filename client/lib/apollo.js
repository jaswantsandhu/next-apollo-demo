import { ApolloClient, InMemoryCache } from "@apollo/client"
const graphqlApiUrl = process.env.GRAPHQL_API_URL;

console.log(`Connecting to GraphQL API @ ${graphqlApiUrl}`)
export const client = new ApolloClient({ uri : graphqlApiUrl, cache: new InMemoryCache() })