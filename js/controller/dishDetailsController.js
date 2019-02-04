var dishDetailsController = function (view, model, app) {

	view.container.on('click', '#backToSearchBtn', function () {
		app.showSelectDishScreen();
	});


	view.container.on('click', '#addToMenuBtn', function () {
		console.log(window.dishObject);
		model.addDishToMenu(window.dishObject);

		//model.addDishToMenu(parseInt(model.getSelectedDish()));
		app.showSelectDishScreen();
	});


}


