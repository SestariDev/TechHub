import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateProjectsTable1702735959359 } from "./migrations/1702735959359-CreateProjectsTable"
import Project from "../entitys/Project"
import Category from "../entitys/Categorys"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "db_techhub",
    logging: false,
    entities: [Project,Category],
    migrations: [CreateProjectsTable1702735959359],
    subscribers: [],
})

