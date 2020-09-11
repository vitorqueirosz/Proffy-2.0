import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import Class from './Class';
import User from './User';

interface Schedule {
    week_day: number;
    from: number;
    to: number;
}

@Entity('class_schedule')
class ClassSchedule {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    week_day: number;

    @Column()
    from: string;

    @Column()
    to: string;

    @Column()
    class_id: string;

    @Column()
    user_id: string;

    @OneToOne(() => Class)
    @JoinColumn({ name: 'class_id' })
    class: string;

    @OneToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: string;
}

export default ClassSchedule;
