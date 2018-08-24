import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService) {
  }

  storeRecipes() {
    // const header = new HttpHeaders().set('Authorization', 'Bearer aibsdb3ububsdvu').append('header2', 'blah');

    // return this.http.put('https://angular-course-project-8f707.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: header
    // });
    const req = new HttpRequest('PUT', 'https://angular-course-project-8f707.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      reportProgress: true
    });
    return this.http.request(req);
  }

  getRecipes() {

    // this.http.get('https://angular-course-project-8f707.firebaseio.com/recipes.json?auth=' + token, {
    //   observe: 'response',   // body, response, etc...
    //   responseType: 'blob'  // arrayBuffer, json, text, blob, etc...
    // })
    //   .map(
    //     (recipes) => {
    //       console.log(recipes);
    //       for (const recipe of recipes) {
    //         if (!recipe['ingredients']) {
    //           recipe['ingredients'] = [];
    //         }
    //       }
    //       return [];
    //     }
    //   )
    //   .subscribe(
    //     (recipes: Recipe[]) => {
    //       this.recipeService.setRecipes(recipes);
    //     }
    //   );
    this.http.get<Recipe[]>('https://angular-course-project-8f707.firebaseio.com/recipes.json')
      .map(
        (recipes) => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
