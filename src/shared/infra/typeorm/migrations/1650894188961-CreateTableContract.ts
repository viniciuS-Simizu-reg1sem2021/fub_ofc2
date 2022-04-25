import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableContract1650894188961 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'contracts',
        columns: [
          {
            name: 'id_contract',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar(48)',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true,
          },
        ],
      })
    );

    // TODO: ADICIONAR AS MUDANÇAS NO DTO E ENTITY
    //  ADICIONAR FKS *employee, employer, status_contract *
    //  E TIMESTAMPS
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contracts');
  }
}
