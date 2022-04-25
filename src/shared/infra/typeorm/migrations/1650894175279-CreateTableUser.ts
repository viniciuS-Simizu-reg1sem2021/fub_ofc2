import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUser1650894175279 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id_user',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
            generationStrategy: 'increment',
          },
          {
            name: 'username',
            type: 'varchar(60)',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'email',
            type: 'varchar(120)',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar(120)',
            isNullable: false,
          },
          {
            name: 'phone',
            type: 'varchar(20)',
            isNullable: false,
          },
          {
            name: 'image_path',
            type: 'varchar(120)',
            isNullable: true,
          },
          {
            name: 'street',
            type: 'varchar(240)',
            isNullable: false,
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
            name: 'state',
            type: 'char(2)',
            isNullable: false,
          },
        ],
      })
    );
    // TODO: ADICIONAR OS TIMESTAMPS
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
