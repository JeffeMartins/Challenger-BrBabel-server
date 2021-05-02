import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Company {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cnpj: string;

    @Column()
    demand: number;

    @Column()
    annualBilling: number;

    @Column({
        length: 512
    })
    about: string;

}
