var dishDetailsController = function (view, model, app) {

	view.container.on('click', '#backToSearchBtn', function () {
		app.showSelectDishScreen();
		model.setSelectedDishId(-1);
	});

	view.container.on('click', '#addToMenuBtn', function () {
		model.addDishToMenu(window.dishObject);
		//app.showSelectDishScreen();
	});


}


