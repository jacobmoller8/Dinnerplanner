var dinnerPrintoutController = function (view, model, app) {

	view.container.on('click', '#goBackButton', function () {
		app.showSelectDishScreen();
	});
}