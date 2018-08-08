import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from './recipe.service';
import { Recipe } from '../../features/recipes/recipe.model';
import 'rxjs/Rx';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class DataStorageService {
  url = 'https://angular-course-project-8f707.firebaseio.com/';
  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipe() {
    const token = this.authService.getToken();
    return this.http.put(this.url + 'recipes.json?auth=' + token, this.recipeService.getRecipes());
  }
  getRecipes() {
    const token = this.authService.getToken();
    console.log(token);
    this.http.get(this.url + 'recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]): any => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
