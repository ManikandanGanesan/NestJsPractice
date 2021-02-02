import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item, ItemStatus } from './interfaces/item.interface';
import { ItemStatusValidationPipe } from './pipes/item-status-validations.pipe';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService){}
    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): Item {
        console.log("FindOne Id:",param.id);
        let item = this.itemsService.findOne(parseInt(param.id));
        console.log("item:",item);
        return item;
    }

    @Post()
    @UsePipes(ValidationPipe)
    createItem(@Body() CreateItem: CreateItemDto): Item {
        console.log(CreateItem);
        return this.itemsService.add(CreateItem);
    }

    @Put(':id')
    updateItem(@Body() updateItem: CreateItemDto, @Param() param, @Body('status', ItemStatusValidationPipe) status: ItemStatus): Item {
        return this.itemsService.updateItem(updateItem);
    }                                                      

    @Delete(':id')
    deleteItem(@Param('id') id): string {
        return `Delete Id: ${id}`;
    }
}
