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
            name: 'is_paid',
            type: 'boolean',
            isNullable: false,
            default: false,
          },
        ],
      })
    );

    // TODO: ADICIONAR AS MUDANÇAS NO E DO DTO E ENTITY
    //  ADICIONAR FKS *contract, rating *
    //  E TIMESTAMPS
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('coupons');
  }
}
