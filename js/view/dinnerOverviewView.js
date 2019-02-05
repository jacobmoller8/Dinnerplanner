var dinnerOverviewView = function (container, model) {

	this.container = container;
	model.addObserver(this);

	this.update = function () {
		var numberOfPersons = container.find("#numberOfPersons");
		var guests = model.getNumberOfGuests();
		numberOfPersons.html(guests);

		startRow = '<div class="row justify-content-md-center">';

		var dishesModel = container.find("#dishesModel");
		var menu = model.getFullMenu();

		var dishes = "";

		for (var i = 0; i < menu.length; i++) {
			var dish = menu[i];

			dishes += `
                <div class="col-12 col-lg-2 col-md-2 col-sm-3 imgCont">
                    <img src="${dish.image}" class="foodPic"/>
					<button id="${dish.id}" class="btn btn-secondary dishBtn"> ${dish.title} </button>
					<h4 id="dishPrice">${model.getDishPrice(dish)} SEK</h4>
                </div>
				`;
		}
		rightSide = `<div id="totalCost" class="col-md-auto border-left">
			<h2 id="totalTag">Total:</h2>
			<h4 id="menuPrice"> ${model.getTotalMenuPrice()} SEK</h4>
			</div>
			`;

		endRow = '</div>';

		returnString = startRow + dishes + rightSide + endRow;

		dishesModel.html(returnString);

	}
	this.update();

	this.show = function () {
		container.show();
	};
	this.hide = function () {
		container.hide();
	};

}
