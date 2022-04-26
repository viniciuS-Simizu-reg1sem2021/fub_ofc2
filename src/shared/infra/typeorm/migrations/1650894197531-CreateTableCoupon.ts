import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableCoupon1650894197531 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'coupons',
        columns: [
          {
            name: 'id_coupon',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
            generationStrategy: 'increment',
          },
          {
            name: 'id_contract',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'id_default_rating',
            type: 'integer',
            isNullable: true,
            default: null,
          },
          {
            name: 'value',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'deadline',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'is_out_deadline',
            type: 'boolean',
            isNullable: false,
            default: 'false',
          },
          {
            name: 'is_finished',
            type: 'boolean',
            isNullable: false,
            default: 'false',
          },
          {
            name: 'is_paid',
            type: 'boolean',
            isNullable: false,
            default: 'false',
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
            name: 'coupons_contract_FK',
            referencedTableName: 'contracts',
            columnNames: ['id_contract'],
            referencedColumnNames: ['id_contract'],
          },
          {
            name: 'coupons_default_rating_FK',
            referencedTableName: 'default_rating',
            columnNames: ['id_default_rating'],
            referencedColumnNames: ['id_default_rating'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('coupons');
  }
}
