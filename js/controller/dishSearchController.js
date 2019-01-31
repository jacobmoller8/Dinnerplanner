var dishSearchController = function (view, model, app) {

    view.searchDishButton.click(function () {
        view.searchUpdate();
        dishClick();
    });

    this.update = function () {
        dishClick();
    }

    var dishClick = function () {
        view.container.find(".dishBtn").click(function () {
            model.setSelectedDishId(this.id);
            app.showDishDetailsScreen();
        })
    }
    dishClick();
    model.addObserver(this);
}