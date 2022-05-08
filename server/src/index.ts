import express from "express";
import { graphqlHTTP } from 'express-graphql'
import cors from "cors";
import { createConnection } from "typeorm";
import { schema } from "./Schema";
import { Users } from "./Entities/User";

const main = async () => {

    await createConnection({
        type: "mysql",
        database: "graphql_crud",
        username: "root",
        password: "E2rhm95678",
        logging: true,
        synchronize: false,
        entities: [Users],
    })

    const app = express();
    app.use(cors())
    app.use(express.json());
    app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
    }))
    app.listen(5001, () => { console.log('Server listening on port 5001') });
}

main().catch((err: any) => { console.error(err) })