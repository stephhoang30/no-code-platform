"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const entities_1 = require("./entities");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "aurora-mysql",
    database: "website_builder",
    secretArn: "arn:aws:secretsmanager:region:account-id:secret:secret-name",
    resourceArn: "arn:aws:rds:region:account-id:cluster:cluster-name",
    region: "us-east-1",
    serviceConfigOptions: {
        endpoint: "http://localhost:3306", // Local testing endpoint
    },
    synchronize: true, // Set to false in production
    logging: false,
    entities: [
        entities_1.UserEntity,
        entities_1.PageEntity,
        entities_1.ActionLogEntity,
    ],
});
