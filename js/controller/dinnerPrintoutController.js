var dinnerPrintoutController = function (view, model, app) {

	this.update = function () {
		goBackButtonClick();
	}
	var goBackButtonClick = function () {
		view.container.find("#goBackButton").click(function () {
			app.showSelectDishScreen();
		})
    }
    goBackButtonClick();

}