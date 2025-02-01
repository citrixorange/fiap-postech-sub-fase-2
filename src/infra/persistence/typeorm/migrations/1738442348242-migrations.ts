import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1738442348242 implements MigrationInterface {
    name = 'Migrations1738442348242'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Cadastro\` (\`id\` varchar(36) NOT NULL, \`modelo\` varchar(30) NOT NULL, \`cor\` varchar(30) NOT NULL, \`marca\` varchar(30) NOT NULL, \`ano\` varchar(255) NOT NULL, \`preco\` int NOT NULL, \`vendido\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Venda\` (\`id\` varchar(36) NOT NULL, \`cadastro_id\` varchar(36) NULL, \`cpf\` varchar(255) NOT NULL, \`data\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`consumidor_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Venda\` ADD CONSTRAINT \`FK_21968836aa3ae9867eaa8b83844\` FOREIGN KEY (\`consumidor_id\`) REFERENCES \`Cadastro\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Venda\` DROP FOREIGN KEY \`FK_21968836aa3ae9867eaa8b83844\``);
        await queryRunner.query(`DROP TABLE \`Venda\``);
        await queryRunner.query(`DROP TABLE \`Cadastro\``);
    }

}
