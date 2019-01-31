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
		hideAllViews();
		HomeView.show();
	}

	this.showSelectDishScreen = function () {
		hideAllViews();
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
		DinnerOverviewView.show();
	}

	this.showDinnerPrintoutScreen = function () {
		hideAllViews();
		DinnerPrintoutView.show();
	}

});