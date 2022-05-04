import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableDefaultRating1650894144347
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'default_rating',
        columns: [
          {
            name: 'id_default_rating',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
            generationStrategy: 'increment',
          },
          {
            name: 'rating',
            type: 'float',
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.query(
      'INSERT INTO default_rating (rating) VALUES (0.5), (1.0), (1.5), (2.0), (2.5), (3.0), (3.5), (4.0), (4.5), (5.0)'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('default_rating');
  }
}
