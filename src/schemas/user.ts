import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt } from "graphql";
import { users } from "../data";

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: () => ({
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve: (parent, args) => {
                const user = users.find(user => user.id === args.id);

                return user;
            }
        }
    })
});

export const userSchema = new GraphQLSchema({
    query: RootQuery
});
