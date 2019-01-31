var dishDetailsController = function (view, model, app) {

	this.update = function () {
		backButtonClick();
		addToMenuClick();
	}
	var backButtonClick = function () {
		view.container.find("#backToSearchBtn").click(function () {
			app.showSelectDishScreen();
		})
	}

	var addToMenuClick = function (){
		view.container.find("#addToMenuBtn").click(function () {
		model.addDishToMenu(parseInt(model.getSelectedDish()));
		app.showSelectDishScreen();
		})
	}

	model.addObserver(this);
}


