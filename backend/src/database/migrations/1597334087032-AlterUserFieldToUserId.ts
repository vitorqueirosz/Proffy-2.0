import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AlterUserFieldToUserId1597334087032
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('classes', 'user');
        await queryRunner.addColumn(
            'classes',
            new TableColumn({
                name: 'user_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'classes',
            new TableForeignKey({
                name: 'UserClass',
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('classes', 'UserClass');

        await queryRunner.dropColumn('classes', 'user_id');

        await queryRunner.addColumn(
            'classes',
            new TableColumn({
                name: 'user',
                type: 'varchar',
            }),
        );
    }
}
