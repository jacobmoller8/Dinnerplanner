var mobileNavbarView = function (container, model) {
    this.container = container;
    model.addObserver(this);

    this.update = function (menu) {
        var menu = model.getFullMenu();
        var dishSummary = container.find(".dinnerSummary");
        var topBarSummary = container.find("#topBarSum");

        var row_start = '<div class="row">';
        var row_end = '</div>';

        var selectedDishesPrint = "";

        for (dish in menu) {

            selectedDishesPrint +=
                `
			<div class="container-fluid col-12 sideBarDishItem" id="${menu[dish].id}">
				<div class="row">
					<p class="sideDishName col-6" id="selectedDishName">  ${menu[dish].title} </p>
					<p class="sideCost col-6" id="selectedDishCost"> ${model.getDishPrice(menu[dish])} </p>
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

    }

    this.update();
    this.show = function () {
        container.show();
    };
    this.hide = function () {
        container.hide();
    };

}