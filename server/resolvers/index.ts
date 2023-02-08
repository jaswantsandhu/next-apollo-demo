import { getUsers } from "./users"

const resolvers = {
    Query: {
        users: getUsers
    }
};

export default resolvers;