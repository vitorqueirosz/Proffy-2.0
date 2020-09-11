import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('connections')
class Connections {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;
}

export default Connections;
