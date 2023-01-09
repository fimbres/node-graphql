import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } from "graphql";
import { HobbyType } from "./hobby";
import { hobbies, posts } from "../data";
import { PostType } from "./post";

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
        },
        // posts: {
        //     type: new GraphQLList(PostType),
        //     resolve: (parent, args) => {
        //         const userPosts = posts.filter(post => post.userID === parent.id);

        //         return userPosts;
        //     }
        // }
    })
});
