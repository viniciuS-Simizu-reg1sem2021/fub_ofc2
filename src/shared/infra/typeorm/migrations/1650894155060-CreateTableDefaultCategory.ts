import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableDefaultCategory1650894155060
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'default_categories',
        columns: [
          {
            name: 'id_default_category',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
            generationStrategy: 'increment',
          },
          {
            name: 'category',
            type: 'varchar(48)',
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.query(
      'INSERT INTO default_categories(category) VALUES ("Teaching"), ("Computing"), ("Graphical design"), ("Fashion"), ("Technical assistance"), ("Repairs"), ("Remodelling"), ("Well-being"), ("Domestic"), ("Consultancy"), ("Party")'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('default_categories');
  }
}
