import { Injectable, NotFoundException } from '@nestjs/common';
import { Item, ItemStatus } from './interfaces/item.interface';
import { CreateItemDto } from './dto/create-item.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: 12345,
            name: "Mani",
            date: "19-10-1989",
            qty: 10,
            status: ItemStatus.ACTIVE
        },
        {
            id: 6789,
            name: "Nagu",
            date: "16-08-1990",
            qty: 20,
            status: ItemStatus.ACTIVE
        }
    ];

    add(CreateItem: CreateItemDto): Item {
        const { name, date, qty, status} =  CreateItem;
        let item = {
            id: uuidv4(),
            name,
            date,
            qty,
            status: ItemStatus.ACTIVE
        };
        console.log(`Name: ${CreateItem.name} Date: ${CreateItem.date} Qty: ${CreateItem.qty}`);
        this.items.push(item);
        return item;
    }

    updateItem(updateItem: CreateItemDto): Item 
    {
        for(var i = 0; i < this.items.length; i++)
        {
            let item = this.items[i];
            if(item.id == updateItem.id)
            {
                console.log("Entered inside the condition...");
                item.name = updateItem.name;
                item.date = updateItem.date;
                item.qty = updateItem.qty;
                item.status = updateItem.status;
                this.items[i] = item;
                break;
            }
        }
        console.log("current Item: ", this.items[i]);
        return this.items[i];
    }

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: number): Item {
        let found = this.items.find((item) => {
            if(item.id === id)
            {
                return item;
            }
        });

        if(!found)
        {
            throw new NotFoundException(`Task with Id: ${id} was not found`);
        }

        return found;
    }
}
