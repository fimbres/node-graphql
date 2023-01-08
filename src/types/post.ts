import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const PostType = new GraphQLObjectType({
    name: "Post",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        comment: {
            type: GraphQLString
        },
    })
});
