var dinnerOverviewController = function (view, model, app) {

	view.container.on('click', '#printRecipeButton', function () {
		app.showDinnerPrintoutScreen();
	});

	view.container.on('click', '#goBackButton', function () {
		app.showSelectDishScreen();
	});
}