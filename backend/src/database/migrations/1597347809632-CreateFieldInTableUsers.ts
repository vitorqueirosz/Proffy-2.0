// import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

// export default class CreateFieldInTableUsers1597347809632
//     implements MigrationInterface {
//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.addColumn(
//             'users',
//             new TableColumn({
//                 name: 'email',
//                 type: 'varchar',
//                 isUnique: true,
//             }),
//         );
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.dropColumn('users', 'email');
//     }
// }
