import { Address } from '../../addresses/entities/address.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    passwordHash!: string;

    @Column()
    email!: string;

    @Column()
    isAdmin!: boolean;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    phoneNumber!: string;

    @OneToMany(() => Address, address => address.user)
    addresses!: Address[];


}
