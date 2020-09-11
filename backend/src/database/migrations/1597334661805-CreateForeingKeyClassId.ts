import {
    MigrationInterface,
    QueryRunner,
    TableForeignKey,
    TableColumn,
} from 'typeorm';

export default class CreateForeingKeyClassId1597334661805
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('class_schedule', 'class_id');
        await queryRunner.addColumn(
            'class_schedule',
            new TableColumn({
                name: 'class_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'class_schedule',
            new TableForeignKey({
                name: 'ClassSchedule',
                columnNames: ['class_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'classes',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('class_schedule', 'ClassSchedule');

        await queryRunner.dropColumn('class_schedule', 'class_id');

        await queryRunner.addColumn(
            'class_schedule',
            new TableColumn({
                name: 'class_id',
                type: 'varchar',
            }),
        );
    }
}
