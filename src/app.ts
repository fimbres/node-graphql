import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import { rootSchema } from './schema';
import { testSchema } from './types/schema';

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: testSchema,
    graphiql: true,
}));

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});
