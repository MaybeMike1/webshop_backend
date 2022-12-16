import { IsNotEmpty, IsOptional } from "class-validator";
import { User } from "../../users/entities/user.entity";
import { Address } from "../entities/address.entity";

export class CreateAddressDto extends Address {
    @IsNotEmpty()
    streetName!: string;
    @IsNotEmpty()
    streetNumber!: number;
    @IsOptional()    
    floorNumber!: number;
    @IsNotEmpty()
    user!: User
    
}
