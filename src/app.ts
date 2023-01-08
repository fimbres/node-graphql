import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import { userSchema } from './schemas';

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: userSchema,
    graphiql: true,
}));

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});
