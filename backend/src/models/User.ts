import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    JoinColumn,
} from 'typeorm';

import Classes from './Class';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    avatar: string;

    @Column()
    whatsapp: number;

    @Column()
    bio: string;

    @OneToMany(() => Classes, classes => classes.user_id)
    @JoinColumn({ name: 'id' })
    class: Classes[];
}

export default User;
