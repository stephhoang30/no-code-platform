import "reflect-metadata";
import { DataSource } from "typeorm";
import {
  UserEntity,
  PageEntity,
  ActionLogEntity,
} from "./entities";

export const AppDataSource = new DataSource({
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
    UserEntity,
    PageEntity,
    ActionLogEntity,
  ],
});