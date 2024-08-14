import { Foods } from 'src/app/shared/models/food';

export class CartItem 
{
    constructor(food:Foods)
    {
        this.food=food;
    }
    food:Foods = new Foods;
    quantity:number=1;

    getPrice(): Number
    {
        return this.food.price * this.quantity;
    }

}