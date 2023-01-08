import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLString } from "graphql";

import { UserType, HobbyType } from "../types";
import { users, hobbies } from "../data";

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
            type: HobbyType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve: (_, args) => {
                const hobbie = hobbies.find(hobbie => hobbie.id === args.id);

                return hobbie;
            }
        }
    })
});

export const rootSchema = new GraphQLSchema({
    query: RootQuery
});
