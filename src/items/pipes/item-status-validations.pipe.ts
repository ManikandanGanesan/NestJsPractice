import  { BadRequestException, PipeTransform } from '@nestjs/common';

import { ItemStatus } from '../interfaces/item.interface';

export class ItemStatusValidationPipe implements PipeTransform
{
    readonly allowedStatus = [
        ItemStatus.ACTIVE,
        ItemStatus.INACTIVE
    ];

    transform(status: any){
        
        if(!this.isStatusValid(status))
        {
            throw new BadRequestException("Request with Invalid status...")
        }

        return status;
    }

    private isStatusValid(status: any)
    {
        let indx = this.allowedStatus.indexOf(status);
        console.log("Allowed status: ", this.allowedStatus);
        console.log("Status Arg: ", status);
        console.log("Status Index: ", indx);
        return indx !== -1;
    }
}