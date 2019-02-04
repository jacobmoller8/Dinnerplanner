var sideBarView = function (container, model) {
	this.container = container;
	model.addObserver(this);

	this.update = function () {
		var menu = model.getFullMenu();
		var dishSummary = container.find(".dinnerSummary");
		var topBarSummary = container.find("#topBarSum");

		var row_start = '<div class="row">';
		var row_end = '</div>';
		var selectedDishesPrint = "";
		var price = "";
		var allSelectedDishes = [];

		if (menu.length > 0) {
			for (dish in menu) {
				allSelectedDishes.push(model.getDishApi(menu[dish]))

			}
			for (p in allSelectedDishes) {
				price = model.getDishPrice(allSelectedDishes[p]);
				selectedDishesPrint +=
					`
				<div class="container-fluid col-12 sideBarDishItem" id="${allSelectedDishes[p].id}">
					<div class="row">
						<p class="sideDishName col-6" id="selectedDishName">  ${allSelectedDishes[p].name} </p>
						<p class="sideCost col-6" id="selectedDishCost"> ${price} </p>
					</div>
				</div>
				`
			}
	
			var totalSum = `
			<p class="sideSum offset-6 col-6" id="menuSum"> SEK ${model.getTotalMenuPrice()}</p>
			`;
			var topTotalSum = `
				<h5 id="topBarSumText"> SEK ${model.getTotalMenuPrice()} </h5>
			`;
	
			topBarSummary.html(row_start + topTotalSum + row_end);
			dishSummary.html(row_start + selectedDishesPrint + totalSum + row_end);
	
		}else{console.log("Side menu is empty!")}
	
	}


	this.show = function () {
		container.show();
	};
	this.hide = function () {
		container.hide();
	};
}