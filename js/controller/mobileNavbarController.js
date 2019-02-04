var mobileNavbarController = function (view, model, app) {

	view.container.on('click', '#navBarConfirmBtn', function () {
		app.showDinnerOverviewScreen();
	});

	var inputSelector = view.container.find("#mobilePeopleSelector");
	// The off() function is important, otherwise it got bound to the button everytime it got clicked and the event fired exponentially
	inputSelector.off().click(function () {
		var nrOfPeople = inputSelector[0].value;
		model.setNumberOfGuests(parseInt(nrOfPeople));
	})
	inputSelector[0].value = model.getNumberOfGuests();



	view.container.on('click', '.sideBarDishItem', function () {
		model.removeDishFromMenu(parseInt(this.id));
	});

	//var confirmBtnClick = function () {
	//	view.container.find("#navBarConfirmBtn").click(function () {
	//		app.showDinnerOverviewScreen();
	//	})
	//}

	//var numberOfGuestsClicked = function () {
	//	var inputSelector = view.container.find("#mobilePeopleSelector");
	//	inputSelector.off().click(function () {
	//		var nrOfPeople = inputSelector[0].value;
	//		model.setNumberOfGuests(parseInt(nrOfPeople));
	//	})
	// This row ensures that the DOM value keeps in sync with the model value
	//	inputSelector[0].value = model.getNumberOfGuests();
	//}

	//var removeDishClick = function () {
	//   view.container.find(".sideBarDishItem").click(function () {
	//		console.log(this.id);
	//        model.removeDishFromMenu(parseInt(this.id));
	//	})
	//}

}