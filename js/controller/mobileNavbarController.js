var mobileNavbarController = function (view, model, app) {

	view.container.on('click', '#navBarConfirmBtn', function () {
		app.showDinnerOverviewScreen();
	});

	var inputSelector = view.container.find("#mobilePeopleSelector");
	inputSelector.off().click(function () {
		var nrOfPeople = inputSelector[0].value;
		model.setNumberOfGuests(parseInt(nrOfPeople));
	})
	inputSelector[0].value = model.getNumberOfGuests();

	view.container.on('click', '.sideBarDishItem', function () {
		model.removeDishFromMenu(parseInt(this.id));
	});

}