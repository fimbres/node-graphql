import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

export const HobbyType = new GraphQLObjectType({
    name: "Hobby",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        title: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        }
    })
});
