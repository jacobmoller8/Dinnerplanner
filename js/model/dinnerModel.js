//DinnerModel Object constructor
var DinnerModel = function () {

	var observers = [];
	var numberOfGuests = 1;
	var menu = [];
	var selectedDish = "";

	// Adding observer
	this.addObserver = function (observer) {
		observers.push(observer);
	}
	// Notify observer
	var notifyObservers = function () {
		for (var i = 0; i < observers.length; i++) {
			observers[i].update();
		}
	}
	// Set Number of Guests
	this.setNumberOfGuests = function (num) {
		if (num < 1) return;
		numberOfGuests = num;
		notifyObservers();
	}
	// Get Number of Guests
	this.getNumberOfGuests = function () {
		return numberOfGuests;
	}
	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function (type) {
		return selectedDish;
	}
	// Set Selected Dish Id
	this.setSelectedDishId = function (id) {
		selectedDish = id;
		notifyObservers();
	}
	//Returns all the dishes on the menu.
	this.getFullMenu = function () {
		return menu;
	}
	// Returns the price for the dish
	this.getDishPrice = function (dish) {
		var dishPrice = 0;
		dishPrice += dish.pricePerServing * numberOfGuests;
		return parseInt(dishPrice.toFixed(2));
	}
	//Returns the total price of the menu 
	this.getTotalMenuPrice = function () {
		menuPrice = 0;
		for (var i = 0; i < menu.length; i++) {
			menuPrice += this.getDishPrice(menu[i]);
		}
		return menuPrice;
	}
	//Add dish to menu
	this.addDishToMenu = function (dish) {
		menu.push(dish);
		notifyObservers();
	}
	//Removes dish from menu
	this.removeDishFromMenu = function (id) {
		for (var i = 0; i < menu.length; i++) {
			if (id = menu[i].id) {
				var index = i;
			}
		}
		menu.splice(index, 1);
		notifyObservers();
	}
	// Get all dishes from API
	this.getAllDishesApi = function (type, filter) {
		var filterVar = ""
		var typeVar = ""
		if (filter) { filterVar = filter }
		if (type) { typeVar = type }
		var ApiUrl = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?instructionsRequired=false&limitLicense=false&number=20&offset=0&query=${filterVar}&type=${typeVar}`
		return fetch(ApiUrl
			, {
				headers: { 'X-Mashape-Key': APIkey }
			}).then(response => response.json())
			.then(data => data.results);
	}
	// Get selected dish from API
	this.getDishApi = function (id) {
		var ApiUrl = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`;
		return fetch(ApiUrl
			, {
				headers: { 'X-Mashape-Key': APIkey }
			}).then(response => response.json())
	}


	//Old Data
	var dishes = [{
		'id': 1,
		'name': 'French toast',
		'type': 'starter',
		'image': 'toast.jpg',
		'description': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients': [{
			'name': 'eggs',
			'quantity': 0.5,
			'unit': '',
			'price': 10
		}, {
			'name': 'milk',
			'quantity': 30,
			'unit': 'ml',
			'price': 6
		}, {
			'name': 'brown sugar',
			'quantity': 7,
			'unit': 'g',
			'price': 1
		}, {
			'name': 'ground nutmeg',
			'quantity': 0.5,
			'unit': 'g',
			'price': 12
		}, {
			'name': 'white bread',
			'quantity': 2,
			'unit': 'slices',
			'price': 2
		}]
	}, {
		'id': 2,
		'name': 'Sourdough Starter',
		'type': 'starter',
		'image': 'sourdough.jpg',
		'description': "Here is how you make it... Lore ipsum...",
		'ingredients': [{
			'name': 'active dry yeast',
			'quantity': 0.5,
			'unit': 'g',
			'price': 4
		}, {
			'name': 'warm water',
			'quantity': 30,
			'unit': 'ml',
			'price': 0
		}, {
			'name': 'all-purpose flour',
			'quantity': 15,
			'unit': 'g',
			'price': 2
		}]
	}, {
		'id': 3,
		'name': 'Baked Brie with Peaches',
		'type': 'starter',
		'image': 'bakedbrie.jpg',
		'description': "Here is how you make it... Lore ipsum...",
		'ingredients': [{
			'name': 'round Brie cheese',
			'quantity': 10,
			'unit': 'g',
			'price': 8
		}, {
			'name': 'raspberry preserves',
			'quantity': 15,
			'unit': 'g',
			'price': 10
		}, {
			'name': 'peaches',
			'quantity': 1,
			'unit': '',
			'price': 4
		}]
	}, {
		'id': 100,
		'name': 'Meat balls',
		'type': 'main dish',
		'image': 'meatballs.jpg',
		'description': "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients': [{
			'name': 'extra lean ground beef',
			'quantity': 115,
			'unit': 'g',
			'price': 20
		}, {
			'name': 'sea salt',
			'quantity': 0.7,
			'unit': 'g',
			'price': 3
		}, {
			'name': 'small onion, diced',
			'quantity': 0.25,
			'unit': '',
			'price': 2
		}, {
			'name': 'garlic salt',
			'quantity': 0.7,
			'unit': 'g',
			'price': 2
		}, {
			'name': 'Italian seasoning',
			'quantity': 0.6,
			'unit': 'g',
			'price': 3
		}, {
			'name': 'dried oregano',
			'quantity': 0.3,
			'unit': 'g',
			'price': 3
		}, {
			'name': 'crushed red pepper flakes',
			'quantity': 0.6,
			'unit': 'g',
			'price': 3
		}, {
			'name': 'Worcestershire sauce',
			'quantity': 6,
			'unit': 'ml',
			'price': 7
		}, {
			'name': 'milk',
			'quantity': 20,
			'unit': 'ml',
			'price': 4
		}, {
			'name': 'grated Parmesan cheese',
			'quantity': 5,
			'unit': 'g',
			'price': 8
		}, {
			'name': 'seasoned bread crumbs',
			'quantity': 15,
			'unit': 'g',
			'price': 4
		}]
	}, {
		'id': 101,
		'name': 'MD 2',
		'type': 'main dish',
		'image': 'bakedbrie.jpg',
		'description': "Here is how you make it... Lore ipsum...",
		'ingredients': [{
			'name': 'ingredient 1',
			'quantity': 1,
			'unit': 'pieces',
			'price': 8
		}, {
			'name': 'ingredient 2',
			'quantity': 15,
			'unit': 'g',
			'price': 7
		}, {
			'name': 'ingredient 3',
			'quantity': 10,
			'unit': 'ml',
			'price': 4
		}]
	}, {
		'id': 102,
		'name': 'MD 3',
		'type': 'main dish',
		'image': 'meatballs.jpg',
		'description': "Here is how you make it... Lore ipsum...",
		'ingredients': [{
			'name': 'ingredient 1',
			'quantity': 2,
			'unit': 'pieces',
			'price': 8
		}, {
			'name': 'ingredient 2',
			'quantity': 10,
			'unit': 'g',
			'price': 7
		}, {
			'name': 'ingredient 3',
			'quantity': 5,
			'unit': 'ml',
			'price': 4
		}]
	}, {
		'id': 103,
		'name': 'MD 4',
		'type': 'main dish',
		'image': 'meatballs.jpg',
		'description': "Here is how you make it... Lore ipsum...",
		'ingredients': [{
			'name': 'ingredient 1',
			'quantity': 1,
			'unit': 'pieces',
			'price': 4
		}, {
			'name': 'ingredient 2',
			'quantity': 12,
			'unit': 'g',
			'price': 7
		}, {
			'name': 'ingredient 3',
			'quantity': 6,
			'unit': 'ml',
			'price': 4
		}]
	}, {
		'id': 200,
		'name': 'Chocolat Ice cream',
		'type': 'dessert',
		'image': 'icecream.jpg',
		'description': "Here is how you make it... Lore ipsum...",
		'ingredients': [{
			'name': 'ice cream',
			'quantity': 100,
			'unit': 'ml',
			'price': 6
		}]
	}, {
		'id': 201,
		'name': 'Vanilla Ice cream',
		'type': 'dessert',
		'image': 'icecream.jpg',
		'description': "Here is how you make it... Lore ipsum...",
		'ingredients': [{
			'name': 'ice cream',
			'quantity': 100,
			'unit': 'ml',
			'price': 6
		}]
	}, {
		'id': 202,
		'name': 'Strawberry',
		'type': 'dessert',
		'image': 'icecream.jpg',
		'description': "Here is how you make it... Lore ipsum...",
		'ingredients': [{
			'name': 'ice cream',
			'quantity': 100,
			'unit': 'ml',
			'price': 6
		}]
	}
	];
}


