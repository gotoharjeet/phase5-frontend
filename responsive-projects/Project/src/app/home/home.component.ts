import { Foods } from '../shared/models/food';
import { FoodService } from './../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    // foods:Foods[]=[];
    foods:Foods[]=[];
    tags: { name: string, count: number }[] = [];
    constructor(private fs:FoodService,private route:ActivatedRoute)
    {

      
    }
    ngOnInit(): void
      {
        
        this.route.params.subscribe(params =>{
          if(params['searchItem'])
            this.foods=this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
         else if(params['tag'])
            this.foods=this.fs.getAllFoodByTag(params['tag']);
          else
            this.foods=this.fs.getAll();
        } );
          
        // this.tags = this.fs.getAllTag();
        
      }


}
