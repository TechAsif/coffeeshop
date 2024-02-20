import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Patch, Delete, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    
    @Get()
    findAll(@Query() paginationQuery): string {
        const {offset, limit} = paginationQuery;
        return `the offset is ${offset} and limit is ${limit}`
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `The Param is ${id}`
    }

    
   
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body('name') body){
        return body
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
