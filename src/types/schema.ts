import { GraphQLBoolean, GraphQLFloat, GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLScalarType, GraphQLSchema, GraphQLString } from "graphql";

//Scalar Type
//String = GraphQLString
//Int = GraphQLInt
//Float = GraphQLFloat
//Boolean = GraphQLBoolean
//ID = GraphQLID

const Person = new GraphQLObjectType({
    name: 'Person',
    description: 'Represents a Person Type',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        age: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        isMarried: {
            type: GraphQLBoolean,
        },
        gpa: {
            type: GraphQLFloat,
        }
    })
});

const PersonQuery = new GraphQLObjectType({
    name: 'PersonQuery',
    fields: {
        person: {
            type: Person,
            resolve: (parent, args) => {
                const person = {
                    name: 'Isaac',
                    age: 22,
                    isMarried: true,
                    gpa: 3.7,
                };

                return person;
            }
        }
    }
});

export const testSchema = new GraphQLSchema({
    query: PersonQuery
});
