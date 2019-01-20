var dinnerPrintoutView = function (container, model) {

    this.container = container;

    var numberOfPersons = container.find("#numberOfPersons");
    var guests = model.getNumberOfGuests();
    numberOfPersons.html(guests);


    var dishesModel = container.find("#dishesModel");
    var menu = model.getFullMenu();
    var dishes = "";

    for (var i = 0; i < menu.length; i++) {
        var dish = model.getDish(menu[i]);
        dishes += '<div class="row justify-content-md-center mt-4 mb-4">' +
            '<div class="col-sm-2">' +
            '</div>' +
            '<div class="col-md-5">' +
            '<div class="row">' +
            '<div class="col-md-auto">' +
            '<img src="images/' + dish.image + '" width="250" height="150px">' +
            '</div>' +
            '<div class="col-md-auto">' +
            '<h2>' + dish.name + '</h2>' +
            '<p>Lorem Ipsum</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-md">' +
            '<h4>Preparation</h4>' +
            '<p>' + dish.description + '</p>' +
            '</div>' +
            '</div>';
    }

    dishesModel.html(dishes);

}