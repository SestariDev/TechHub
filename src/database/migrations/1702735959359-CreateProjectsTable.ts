
import { create } from "domain"
import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProjectsTable1702735959359 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
           new Table({
            name: "projects",
            columns:[{
                name: "id",
                type: "int",
                isPrimary: true,
                generationStrategy: "increment"
            },
            {
                name: "name",
                type: "varchar",
                length: "100",
                isNullable: false
            },
            {
                name: "url",
                type: "varchar",
                length: "100",
                isNullable: false
            },
            {
                name: "date",
                type: "date",
                isNullable: false
            },
            {
                name: "status",
                type: "varchar",
                length: "30",
                isNullable: false
            }
            ]
           }  
           )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('projects')
    }

}
