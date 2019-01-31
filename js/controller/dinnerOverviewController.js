var dinnerOverviewController = function (view, model, app) {

	this.update = function () {
		recipeButtonClick();
		goBackButtonClick();
	}
	var recipeButtonClick = function () {
		view.container.find("#printRecipeButton").click(function () {
			app.showDinnerPrintoutScreen();
		})
	}

	var goBackButtonClick = function (){
		view.container.find('#goBackButton').click(function () {
			app.showSelectDishScreen();
		})
	}
	recipeButtonClick();
	goBackButtonClick();

}