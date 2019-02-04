var dishDetailsView = function (container, model) {
	this.container = container;

	model.addObserver(this);

	this.update = function () {
		var currentDishId = model.getSelectedDish();

		this.container = container;
		var dishView = container.find("#dishDescription");
		var dishDescriptionData = "";
		var dishIngredientDataStart = "";
		var dishIngredientData = "";
		var dishIngredientDataEnd = "";
		var row_start = '<div class="row">';
		var row_end = '</div>';


		model.getDishApi(parseInt(currentDishId)).then(results => {
			dishDescriptionData = `
			<div class="container-fluid col-12 col-sm-6 dishDesc">
				<div class="container-fluid col-12 col-sm-10 dishDescImageCont"> 
					<h3> ${results.title} </h3> 
					<img src="${results.image}" width="100%" class="img-fluid dishDescImage" id="dishDescImage" alt="Responsive image"> </img>
					<p id="dishDescText"> ${results.description} </p>
					<button class="btn btn-secondary" id="backToSearchBtn"> Back to search </button>
				</div>
			</div>
				`;

			dishIngredientDataStart = `<div class="container-fluid col-12 col-sm-6 dishReci"> <h3>Ingredients for ${model.getNumberOfGuests()} people</h3> <table class="table ingredientTable"> <tbody>`;

			for (ingredient in results.extendedIngredients) {
				var currentIngredient = results.extendedIngredients[ingredient];
				console.log(ingredient);
				dishIngredientData += `
			<tr>
			<td> ${currentIngredient.amount * model.getNumberOfGuests()}  </td>
			<td> ${currentIngredient.unit} </td>
			<td> ${currentIngredient.name} </td>
			</tr>
			`


			}

			dishIngredientDataEnd = `<tr>
																<td>Price: </td>
																<td>${Math.round(results.pricePerServing * model.getNumberOfGuests(), 3)}$ USD</td>
															</tr>
															</tbody> 
															</table> 
															<button class="btn btn-secondary" id="addToMenuBtn"> Add to menu </button> 
															</div>`;

			dishView.html(row_start + dishDescriptionData + dishIngredientDataStart + dishIngredientData + dishIngredientDataEnd + row_end);
		}).catch(err => { console.log("following error occured: " + err) });

	}
	this.update();

	this.show = function () {
		container.show();
	};
	this.hide = function () {
		container.hide();
	};
}
