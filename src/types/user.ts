import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from "graphql";
import { HobbyType } from "./hobby";
import { hobbies } from "../data";

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
        },
        hobby: {
            type: HobbyType,
            resolve: (parent, args) => {
                const hobby = hobbies.find(hobby => hobby.id === parent.hobbieId);

                return hobby;
            }
        }
    })
});
