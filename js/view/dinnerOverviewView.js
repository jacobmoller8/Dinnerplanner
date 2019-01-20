var dinnerOverviewView = function (container, model) {

    this.container = container;

    var numberOfPersons = container.find("#numberOfPersons");
    var guests = model.getNumberOfGuests();
    numberOfPersons.html(guests);


    startRow = '<div class="row justify-content-md-center">';

    var dishesModel = container.find("#dishesModel");
    var menu = model.getFullMenu();
    var dishes = "";

    for (var i = 0; i < menu.length; i++) {
        var dish = model.getDish(menu[i]);
        dishes += '<div class="col-md-2">' +
            '<img src="images/' + dish.image + '" width="100%" height="150px" class="mt-4">' +
            '<button class="btn btn-default btn-block bg-light border-dark">' + dish.name + '</button>' +
            '<h4 id="dishPrice">' + model.getDishPrice(dish).toFixed(2) + ' SEK</h4>' +
            '</div>'
    }
    rightSide = '<div id="totalCost" class="col-md-auto border-left">' +
        '<h2 id="totalTag">Total:</h2>' +
        '<h4 id="menuPrice">' + model.getTotalMenuPrice() + ' SEK</h4>' +
        '</div>'

    endRow = '</div>';

    returnString = startRow + dishes + rightSide + endRow;

    dishesModel.html(returnString);

}
