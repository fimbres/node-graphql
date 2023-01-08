import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

import { UserType } from "../types/user";
import { users } from "../data";
import { HobbyType } from "../types/hobby";

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
            resolve: (_, args) => {
                const user = users.find(user => user.id === args.id);

                return user;
            }
        },
        hobby: {
            type: HobbyType
        }
    })
});

export const rootSchema = new GraphQLSchema({
    query: RootQuery
});
