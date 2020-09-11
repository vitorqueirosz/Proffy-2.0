import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateClassSchedule1597271335493
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'class_schedule',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'week_day',
                        type: 'varchar',
                    },
                    {
                        name: 'from',
                        type: 'varchar',
                    },
                    {
                        name: 'to',
                        type: 'varchar',
                    },
                    {
                        name: 'class_id',
                        type: 'varchar',
                    },
                    {
                        name: 'user_id',
                        type: 'varchar',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('class_schedule');
    }
}
