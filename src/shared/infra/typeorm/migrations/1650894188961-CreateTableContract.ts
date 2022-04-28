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
            name: 'id_employer',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'id_employee',
            type: 'integer',
            isNullable: true,
            default: null,
          },
          {
            name: 'id_default_status_contract',
            type: 'integer',
            isNullable: false,
            default: '1',
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
          {
            name: 'district',
            type: 'varchar(240)',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar(240)',
            isNullable: false,
          },
          {
            name: 'proposed_value',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'value_lost_per_day',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'generated_coupon',
            type: 'boolean',
            isNullable: false,
            default: 'false',
          },
          {
            name: 'finished_date',
            type: 'timestamp',
            isNullable: true,
            default: null,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            onUpdate: 'now()',
            isNullable: false,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'contracts_employer_FK',
            referencedTableName: 'users',
            columnNames: ['id_employer'],
            referencedColumnNames: ['id_user'],
          },
          {
            name: 'contracts_employee_FK',
            referencedTableName: 'users',
            columnNames: ['id_employee'],
            referencedColumnNames: ['id_user'],
          },
          {
            name: 'contracts_status_contract_FK',
            referencedTableName: 'default_status_contract',
            columnNames: ['id_default_status_contract'],
            referencedColumnNames: ['id_default_status_contract'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contracts');
  }
}
