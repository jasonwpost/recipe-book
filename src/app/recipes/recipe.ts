import { Ingredient } from '../ingredient';
export class Recipe {
  constructor(public name, public description: string, public imagePath: string, public ingredients: Ingredient[]) {}
}
