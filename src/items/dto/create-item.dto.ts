import { IsNotEmpty, IsDate, IsInt } from 'class-validator';
import { ItemStatus } from '../interfaces/item.interface';

export class CreateItemDto{
    
    readonly id?: number;
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly date: string;

    @IsNotEmpty()
    @IsInt()
    readonly qty: number;
    @IsNotEmpty()
    readonly status: ItemStatus;
}