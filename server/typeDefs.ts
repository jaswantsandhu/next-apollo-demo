
const typeDefs = `

  type User {
    name : String,
    email : String,
    address : String,
    phone : String,
    id: String
  }

  type Query {
    users(page: Int) : [User]
  }
`;

export default typeDefs;