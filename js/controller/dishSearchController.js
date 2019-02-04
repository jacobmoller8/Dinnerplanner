var dishSearchController = function (view, model, app) {

    view.searchDishButton.click(function () {
        view.update();

    });

    view.container.on('click', '.dishBtn', function () {
        model.setSelectedDishId(this.id);
        app.showDishDetailsScreen();
    });


}