import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableAuxUsersDefaultRating1650898564287
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'aux_users_default_rating',
        columns: [
          {
            name: 'id_user',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'id_default_rating',
            type: 'integer',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: 'aux_users_default_rating_id_user_FK',
            referencedTableName: 'users',
            columnNames: ['is_user'],
            referencedColumnNames: ['id_user'],
          },
          {
            name: 'aux_users_default_rating_id_default_rating_FK',
            referencedTableName: 'default_rating',
            columnNames: ['id_default_rating'],
            referencedColumnNames: ['id_default_rating'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('aux_users_default_rating');
  }
}
