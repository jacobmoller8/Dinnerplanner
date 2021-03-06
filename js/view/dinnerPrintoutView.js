var dinnerPrintoutView = function (container, model) {

    this.container = container;

    model.addObserver(this);

    this.update = function () {
        loadDinnerPrintview();
    }

    var loadDinnerPrintview = function () {
        var numberOfPersons = container.find("#numberOfPersons");
        var guests = model.getNumberOfGuests();
        numberOfPersons.html(guests);

        var dishesModel = container.find("#dishesModel");
        var menu = model.getFullMenu();
        var dishes = "";

        for (var i = 0; i < menu.length; i++) {
            var dish = menu[i];
            dishes += '<div class="row justify-content-md-center mt-4 mb-4">' +
                '<div class="col-sm-2">' +
                '</div>' +
                '<div class="col-md-5">' +
                '<div class="row">' +
                '<div class="col-md-4">' +
                '<img src="' + dish.image + '"width="100%" class="img-fluid" alt="Responsive image">' +
                '</div>' +
                '<div class="col-md-auto">' +
                '<h4>' + dish.title + '</h4>' +
                '<p>Lorem Ipsum</p>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-md">' +
                '<h4>Preparation</h4>' +
                '<p>' + dish.instructions + '</p>' +
                '</div>' +
                '</div>';
        }
        dishesModel.html(dishes);
    }

    this.update();

    this.show = function () {
        container.show();
    };
    this.hide = function () {
        container.hide();
    };

}