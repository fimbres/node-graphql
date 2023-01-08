import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from "graphql";

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        },
        profession: {
            type: GraphQLString
        }
    })
});
