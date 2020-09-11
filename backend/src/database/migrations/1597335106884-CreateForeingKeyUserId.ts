import {
    MigrationInterface,
    QueryRunner,
    TableForeignKey,
    TableColumn,
} from 'typeorm';

export default class CreateForeingKeyUserId1597335106884
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('class_schedule', 'user_id');
        await queryRunner.addColumn(
            'class_schedule',
            new TableColumn({
                name: 'user_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'class_schedule',
            new TableForeignKey({
                name: 'UserScheduleClass',
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('class_schedule', 'UserScheduleClass');

        await queryRunner.dropColumn('class_schedule', 'user_id');

        await queryRunner.addColumn(
            'class_schedule',
            new TableColumn({
                name: 'user_id',
                type: 'varchar',
            }),
        );
    }
}
