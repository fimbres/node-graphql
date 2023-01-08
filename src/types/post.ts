import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

import { UserType } from "./user";
import { users } from "../data";

export const PostType = new GraphQLObjectType({
    name: "Post",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        comment: {
            type: GraphQLString
        },
        user: {
            type: UserType,
            resolve: (parent, args) => {
                const user = users.find(user => user.id === parent.userID);

                return user;
            }
        }
    })
});
