import { User } from './../../users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id!: number;
  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn({ name: 'userId' })
  user!: User;

  @Column()
  streetName!: string;
  @Column()
  streetNumber!: number;
  @Column()
  floorNumber!: number;
}
