
import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
    providedIn: 'root'
})
export class FoodService {
    // tagCount!:number;
    constructor() { }

   
    getAllFoodByTag(tag:string):Foods[] 
    {
        if(tag == 'All')
            return this.getAll()
        else
            return this.getAll().filter(food => food.tags?.includes(tag));
    }
    // getAllTag():Tag[]
    // {

       
    //     return[
    //         // {name: 'All',count:this.getAllTag().length},
    //         // {name: 'FastFood',count:4},
    //         // {name: 'Pizza',count:2},
    //         // {name: 'Lunch',count:3},
    //         // {name: 'Dinner',count:2},
    //         // {name: 'Pie',count:1},
    //         // {name: 'Chinese',count:9},
    //         // {name: 'Indian',count:1},
    //         // {name: 'Rice',count:1},
    //         // {name: 'Mexicon',count:10}
    //     ]
    // }


    getAllTag(): Tag[] {
        const foodItems = this.getAll();
        const tagCountMap: { [key: string]: number } = {};

        // Count occurrences of each tag
        foodItems.forEach(food => {
            food.tags?.forEach(tag => {
                tagCountMap[tag] = (tagCountMap[tag] || 0) + 1;
            });
        });

        // Create the array of tags with counts
        const tags: Tag[] = Object.keys(tagCountMap).map(tagName => ({
            name: tagName,
            count: tagCountMap[tagName]
        }));

        // Include 'All' tag with count as total number of food items
        tags.unshift({
            name: 'All',
            count: foodItems.length
        });

        return tags;
    }
    
    getAll(): Foods[] {
        return [
            // '/assets/images/ButterChicken.png',
            // '/assets/images/biryani.jpg',
            // '/assets/images/Burrito.jpg',
            // '/assets/images/CCar.jpg',
            // '/assets/images/ChickenLollipop.jpg',
            // '/assets/images/chickenPie.jpg',
            // '/assets/images/ChickenPizza.jpg',
            // '/assets/images/chilesEnNogada.jpg',
            // '/assets/images/Chilli-Con-Carne.jpg',
            // '/assets/images/ChillyPaneer.jpg',
            // '/assets/images/Chinese-Chicken-Salad.jpg',
            // '/assets/images/churros.jpg',
            // '/assets/images/EggfriedRice.jpg',
            // '/assets/images/elote.jpg',
            // '/assets/images/garlicbread.jpeg',
            {
                id: 1,
                name: 'Butter Chicken',
                cookTime: '45 to 60',
                price: 12,
                favorite: false,
                origins: ['india'],
                star: 4.5,
                imageUrl: '/assets/images/ButterChicken.png',
                tags: ['Indian', 'Chicken', 'Dinner'],
            },
            {
                id: 2,
                name: 'Biryani',
                cookTime: '60 to 90',
                price: 20,
                favorite: true,
                origins: ['india'],
                star: 5.0,
                imageUrl: '/assets/images/biryani.jpg',
                tags: ['Indian', 'Rice', 'Dinner'],
            },
            {
                id: 3,
                name: 'Burrito',
                cookTime: '15 to 30',
                price: 10,
                favorite: false,
                origins: ['mexico'],
                star: 4.3,
                imageUrl: '/assets/images/Burrito.jpg',
                tags: ['Mexican', 'FastFood', 'Lunch']
            },
            {
                id: 4,
                name: 'CCar',
                cookTime: '30 to 40',
                price: 20,
                favorite: true,
                origins: ['koriea'],
                star: 4.7,
                imageUrl: '/assets/images/CCar.jpg',
                tags: ['Chinese', 'Noodles', 'Dinner'],
            },
            {
                id: 5,
                name: 'ChickenLollipop',
                cookTime: '30 to 45',
                price: 15,
                favorite: false,
                origins: ['india'],
                star: 4.2,
                imageUrl: '/assets/images/ChickenLollipop.jpg',
                tags: ['Indian', 'Appetizer', 'Chicken'],
            },
            {
                id: 6,
                name: 'chickenPie',
                cookTime: '45 to 60',
                price: 15,
                favorite: true,
                origins: ['united kingdom'],
                star: 4.1,
                imageUrl: '/assets/images/chickenPie.jpg',
                tags: ['Pie', 'Chicken', 'Dinner'],
            },
            {
                id: 7,
                name: 'ChickenPizza',
                cookTime: '30 to 60',
                price: 20,
                favorite: true,
                origins: ['united kingdom'],
                star: 4.4,
                imageUrl: '/assets/images/ChickenPizza.jpg',
                tags: ['Indian', 'Chicken', 'Dinner'],
            },
            {
                id: 8,
                name: 'ChilesEnNogada',
                cookTime: '2 to 3 ',
                price: 25,
                favorite: false,
                origins: ['mexico'],
                star: 5.0,
                imageUrl: '/assets/images/chilesEnNogada.jpg',
                tags: ['Indian', 'Chicken', 'Dinner'],
            },
            {
                id: 9,
                name: 'Chilli-Con-Carne',
                cookTime: '60 to 90',
                price: 15,
                favorite: true,
                origins: ['mexico', 'USA'],
                star: 4.1,
                imageUrl: '/assets/images/Chilli-Con-Carne.jpg',
                tags: ['Indian', 'Chicken', 'Dinner'],
            },
            {
                id: 10,
                name: 'ChillyPaneer',
                cookTime: '30 to 45',
                price: 18,
                favorite: false,
                origins: ['india'],
                star: 4.3,
                imageUrl: '/assets/images/ChillyPaneer.jpg',
                tags: ['Indian', 'Chicken', 'Dinner'],
            },
            {
                id: 11,
                name: 'Chinese-Chicken-Salad',
                cookTime: '15 to 30',
                price: 15,
                favorite: true,
                origins: ['USA'],
                star: 3.5,
                imageUrl: '/assets/images/Chinese-Chicken-Salad.jpg',
                tags: ['Indian', 'Chicken', 'Dinner'],
            },
            {
                id: 12,
                name: 'Churros',
                cookTime: '30 to 45',
                price: 6,
                favorite: false,
                origins: ['spain', 'mexico'],
                star: 4.2,
                imageUrl: '/assets/images/churros.jpg',
                tags: ['Indian', 'Chicken', 'Dinner'],
            },
            {
                id: 13,
                name: 'EggfriedRice',
                cookTime: '15 to 20',
                price: 12,
                favorite: true,
                origins: ['china'],
                star: 4.4,
                imageUrl: '/assets/images/EggfriedRice.jpg',
                tags: ['Indian', 'Chicken', 'Dinner'],
            },
            {
                id: 14,
                name: 'elote',
                cookTime: '10 to 20',
                price: 5,
                favorite: false,
                origins: ['mexico'],
                star: 4.1,
                imageUrl: '/assets/images/elote.jpg',
                tags: ['Indian', 'Chicken', 'Dinner'],
            },
            {
                id: 15,
                name: 'garlicbread',
                cookTime: '10 to 15',
                price: 8,
                favorite: true,
                origins: ['italy'],
                star: 4.3,
                imageUrl: '/assets/images/garlicbread.jpeg',
                tags: ['Indian', 'Chicken', 'Dinner'],
            }
        ];
    }
}

