import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Injectable()
export class CoffeesService {
    
    private coffee: Coffee[] = [
        {
            id: 1,
            name: "Best Coffee",
            brand: "best",
            flavors: ['cho', 'slf']
        }
    ]

    findAll(): Coffee[]{
        return this.coffee
    }

    findOne(id): Coffee {
        return this.coffee.find(item => item.id === id)
    }

    create(createCoffeeDto){
        return this.coffee.push(createCoffeeDto)
    }

    update(id: string, updateCoffeeDto: Coffee){
        const existingcoffee = this.findOne(id)
        if(existingcoffee){
            return `Existing Coffee Updated` 
        }
    }

    remove(id: string){
        const removeItemIndex = this.coffee.findIndex(item => item.id === +id)
        if(removeItemIndex !== 1){
            this.coffee.splice(removeItemIndex,1)
        }
    }

}
