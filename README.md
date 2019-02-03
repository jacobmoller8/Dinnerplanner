# Lab2
DH2642  Course Lab

Jacob Möller & Hugo Bergqvist 
CMETE16



Todo Lab 3

- getAllDishesApi Function
- getdishApi Function
- Adjust code so it works with the new data
- Add loading error messages
- Add loading indicator


New JSON Example

https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random
- Input:
    * number of dishes
- Output:
    * dishes to JSON
    

https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search
- input: 
    * type (main course, side dish, dessert, appetizer, salad, breakfast, soup)
    * query
- output:
    * id
    * title
    * image


https://market.mashape.com/spoonacular/recipe-food-nutrition#get-recipe-information
- input: 
    * id
- output: 
    * extendedIngredients[{name, amount, unitShorts}]
    * image
    * instructions
    * title


Old JSON Example
{
	'id': 103,
	'name': 'MD 4',                                             CHECK
	'type': 'main dish',                                        CHECK
	'image': 'meatballs.jpg',                                   CHECK
	'description': "Here is how you make it... Lore ipsum...",  CHECK
	'ingredients': [{                                           CHECK
		'name': 'ingredient 1',                                 CHECK        
		'quantity': 1,                                          CHECK
		'unit': 'pieces',                                       CHECK
		'price': 4
	}]
}
