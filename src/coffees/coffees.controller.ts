import { Controller, Get, Post, Body, HttpCode, HttpStatus, Patch, Delete, Query, Param } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity'

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeesService: CoffeesService){}
    
    @Get()
    findAll(@Query() paginationQuery): Coffee[] {
        // const {offset, limit} = paginationQuery;
        return this.coffeesService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string): Coffee {
        return this.coffeesService.findOne(id)
    }

    
   
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body){
        return this.coffeesService.create(body)
    }

    @Patch(":id")
    update(@Param('id') id: string, @Body() body){
        return `Successfully body updated with id: ${id} and body data name ${body.name}`
    }

    

    @Delete(':id')
    remove(@Param('id') id: string){
        return `The cofee with id ${id} is removed`
    }

    
    

}
