"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const Schema_1 = require("./Schema");
const User_1 = require("./Entities/User");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, typeorm_1.createConnection)({
        type: "mysql",
        database: "graphql_crud",
        username: "root",
        password: "E2rhm95678",
        logging: true,
        synchronize: false,
        entities: [User_1.Users],
    });
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
        schema: Schema_1.schema,
        graphiql: true
    }));
    app.listen(5001, () => { console.log('Server listening on port 5001'); });
});
main().catch((err) => { console.error(err); });
