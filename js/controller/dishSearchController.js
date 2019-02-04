var dishSearchController = function (view, model, app) {

		view.container.on('submit', '#dishSearchForm', (evt)=>{
			evt.preventDefault();
			view.update();
		})

    view.container.on('click', '.dishBtn', function () {
        model.setSelectedDishId(this.id);
        app.showDishDetailsScreen();
    });


}