import { Controller, Get, Post, Body, HttpCode, HttpStatus, Patch, Delete, Query, Param, ParseIntPipe } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity'
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeesService: CoffeesService){}
    
    @Get()
    findAll(@Query() paginationQuery): Coffee[] {
        // const {offset, limit} = paginationQuery;
        return this.coffeesService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number): Coffee {
        console.log(typeof id)
        return this.coffeesService.findOne(id)
    }

    
   
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        console.log(createCoffeeDto instanceof CreateCoffeeDto)
        return this.coffeesService.create(createCoffeeDto)
    }

    @Patch(":id")
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto){
        return `Successfully body updated with id: ${id} and body data name`
    }

    

    @Delete(':id')
    remove(@Param('id') id: string){
        return `The cofee with id ${id} is removed`
    }

    
    

}
