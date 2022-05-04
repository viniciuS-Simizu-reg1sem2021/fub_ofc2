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
            name: 'name',
            type: 'varchar(240)',
            isNullable: false,
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
            name: 'description',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'occupation',
            type: 'varchar(64)',
            isNullable: false,
          },
          {
            name: 'birth_date',
            type: 'date',
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
