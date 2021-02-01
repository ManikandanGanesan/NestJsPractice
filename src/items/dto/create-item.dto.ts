import { IsNotEmpty, IsDate, IsInt } from 'class-validator';
export class CreateItemDto{
    
    readonly id?: number;
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsDate()
    readonly date: string;

    @IsNotEmpty()
    @IsInt()
    readonly qty: number;
    @IsNotEmpty()
    readonly status: string;
}