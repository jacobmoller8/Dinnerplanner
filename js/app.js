$(function () {

	var model = new DinnerModel();

	var HomeView = new homeView($('#homeView'), model);
	var HomeController = new homeController(HomeView, model, this);

	var DinnerOverviewView = new dinnerOverviewView($('#dinner_overview'), model);
	var DinnerOverviewController = new dinnerOverviewController(DinnerOverviewView, model, this);

	var DishSearchView = new dishSearchView($('#selectDishView'), model);
	var DishSearchController = new dishSearchController(DishSearchView, model, this);

	var SideBarView = new sideBarView($('#sideBarView'), model);
	var SideBarController = new sideBarController(SideBarView, model, this);

	var MobileNavbarView = new mobileNavbarView($('#navBarView'), model);
	var MobileNavbarController = new mobileNavbarController(MobileNavbarView, model, this);

	var DinnerPrintoutView = new dinnerPrintoutView($('#dinner_printout'), model);
	var DinnerPrintoutController = new dinnerPrintoutController(DinnerPrintoutView, model, this);

	var DishDetailsView = new dishDetailsView($('#dishDetailsView'), model);
	var DishDetailsController = new dishDetailsController(DishDetailsView, model, this);


	var hideAllViews = function () {
		HomeView.hide();
		DinnerOverviewView.hide();
		DishSearchView.hide();
		SideBarView.hide();
		MobileNavbarView.hide();
		DinnerPrintoutView.hide();
		DishDetailsView.hide();
	}

	this.showHomeScreen = function () {
		document.cookie = "currentScreen=this.showHomeScreen()";
		hideAllViews();
		HomeView.show();
	}

	this.showSelectDishScreen = function () {
		hideAllViews();
		document.cookie = "currentScreen=this.showSelectDishScreen()";
		var screenSize = $(window).width();
		if (screenSize >= 978) {
			SideBarView.show();
		} else {
			MobileNavbarView.show();
		}
		DishSearchView.show();
	}


	this.showDishDetailsScreen = function () {
		hideAllViews();
		document.cookie = "currentScreen=this.showDishDetailsScreen()";
		var screenSize = $(window).width();
		DishDetailsView.show();
		if (screenSize >= 978) {
			SideBarView.show();
		} else {
			MobileNavbarView.show();
		}
	}

	this.showDinnerOverviewScreen = function () {
		hideAllViews();
		document.cookie = "currentScreen=this.showDinnerOverviewScreen()";
		DinnerOverviewView.show();
	}

	this.showDinnerPrintoutScreen = function () {
		hideAllViews();
		document.cookie = "currentScreen=this.showDinnerPrintoutScreen()";
		DinnerPrintoutView.show();
	}

	if (document.cookie) {
		cookies = checkCookies();

		model.loadMenuFromCookies(cookies[0])
		model.setNumberOfGuests(cookies[1])
		model.setSelectedDishId(cookies[3])

		// Sets the DOM value of numberOfGuests to the one loaded from cookies
		document.getElementById("peopleSelector").value = cookies[1]

		// Runs the 'show..' function stored in the cookies, 'showHomeScreen()' for example
		eval(cookies[2]);


	}
});