import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableAuxContractUser1650898613359
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'aux_contracts_users',
        columns: [
          {
            name: 'id_contract',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'id_user',
            type: 'integer',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: 'aux_contracts_users_FK',
            referencedTableName: 'contracts',
            columnNames: ['id_contract'],
            referencedColumnNames: ['id_contract'],
          },
          {
            name: 'aux_contracts_users_FK',
            referencedTableName: 'users',
            columnNames: ['id_user'],
            referencedColumnNames: ['id_user'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('aux_contracts_users');
  }
}
