var dinnerOverviewController = function (view, model, app) {


	view.container.on('click', '#printRecipeButton', function () {
		app.showDinnerPrintoutScreen();
	});

	view.container.on('click', '#goBackButton', function () {
		app.showSelectDishScreen();
	});

	//var goBackButtonClick = function (){
	//	view.container.find('#goBackButton').click(function () {
	//		app.showSelectDishScreen();
	//	})
	//}
	//goBackButtonClick();

}