import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateClasses1597186374686 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'classes',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'subject',
                        type: 'varchar',
                    },
                    {
                        name: 'cost',
                        type: 'varchar',
                    },
                    {
                        name: 'user',
                        type: 'varchar',
                    },
                ],
            }),
        );

        // await queryRunner.createForeignKey(
        //     'classes',
        //     new TableForeignKey({
        //         name: 'UserClass',
        //         columnNames: ['user_id'],
        //         referencedColumnNames: ['id'],
        //         referencedTableName: 'users',
        //         onDelete: 'SET NULL',
        //         onUpdate: 'CASCADE',
        //     }),
        // );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('classes');
    }
}
