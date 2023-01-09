import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } from "graphql";

import { UserType, HobbyType, PostType } from "../types";
import { users, hobbies, posts } from "../data";
import { userModel, hobbyModel, postModel } from "../models";

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
        users: {
            type: new GraphQLList(UserType),
            resolve: () => {
                return users;
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve: () => {
                return posts;
            }
        },
        hobbies: {
            type: new GraphQLList(HobbyType),
            resolve: () => {
                return hobbies;
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
        },
        post: {
            type: PostType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve: (_, args) => {
                const post = posts.find(post => post.id === args.id);
                
                return post;
            }
        }
    })
});

const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
        createUser: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLID,
                },
                name: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                age: {
                    type: new GraphQLNonNull(GraphQLInt),
                },
                profession: {
                    type: GraphQLString,
                },
            },
            resolve: (parent, args) => {
                const user = new userModel({
                    name: args.name,
                    age: args.age,
                    profession: args.profession,
                });

                return user.save();
            }
        },
        createPost: {
            type: PostType,
            args: {
                id: {
                    type: GraphQLID,
                },
                comment: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                userId: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: (parent, args) => {
                const post = new postModel({
                    comment: args.description,
                    userId: args.userId,
                });

                return post.save();
            }
        },
        createHobby: {
            type: HobbyType,
            args: {
                id: {
                    type: GraphQLID,
                },
                title: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                description: {
                    type: GraphQLString,
                }
            },
            resolve: (parent, args) => {
                const hobby = new hobbyModel({
                    title: args.title,
                    description: args.description,
                });

                return hobby.save();
            }
        },
        updateUser: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLID,
                },
                name: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                age: {
                    type: new GraphQLNonNull(GraphQLInt),
                },
                profession: {
                    type: GraphQLString,
                },
            },
            resolve: (parent, args) => {
                const updatedUser = userModel.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            name: args.name,
                            age: args.age,
                            profession: args.profession,
                        }
                    },
                    {
                        new: true,
                    }
                );

                return updatedUser;
            }
        },
        updatePost: {
            type: PostType,
            args:  {
                id: {
                    type: GraphQLID,
                },
                comment: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (parent, args) => {
                const updatedPost = postModel.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            comment: args.comment,
                        }
                    },
                    {
                        new: true,
                    }
                );

                return updatedPost;
            }
        },
        updateHobby: {
            type: HobbyType,
            args: {
                id: {
                    type: GraphQLID,
                },
                title: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                description: {
                    type: GraphQLString,
                }
            },
            resolve: (parent, args) => {
                const updatedHobby = hobbyModel.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            title: args.title,
                            description: args.description,   
                        }
                    },
                    {
                        new: true,
                    }
                );

                return updatedHobby;
            }
        },
        removeUser: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve: (parent, args) => {
                const removedUser = userModel.findByIdAndDelete(args.id).exec();

                if(!removedUser) {
                    throw new Error("User not found!");
                }

                return removedUser;
            }
        }
    }
});

export const rootSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});
