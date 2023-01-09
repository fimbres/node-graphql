import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { rootSchema } from './schema';

dotenv.config({
    path: './.env'
});

const app = express();
const port = process.env.PORT || 5000;
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.delqixp.mongodb.net/?retryWrites=true&w=majority`;

app.use('/graphql', graphqlHTTP({
    schema: rootSchema,
    graphiql: true,
}));

mongoose.set('strictQuery', false);
mongoose.connect(uri)
.then(() => {
    app.listen(port, () => {
        console.log("Server listening on port " + port);
    });
})
.catch(e => console.log(e));
