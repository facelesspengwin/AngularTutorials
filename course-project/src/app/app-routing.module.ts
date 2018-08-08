import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './features/recipes/recipes.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './features/recipes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './features/recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './features/recipes/recipe-edit/recipe-edit.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailsComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
