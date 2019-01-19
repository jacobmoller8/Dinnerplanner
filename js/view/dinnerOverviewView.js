var dinnerOverviewView = function (container, model) {

    this.container = container;

    var NumberOfGuests = container.find("#numberOfGuests");
    var persons = model.getNumberOfGuests();
    NumberOfGuests.html("hej");



    var Test = container.find("#test");
    var menu = model.getFullMenu();
    var dishes = "";

    dish

    for (var i = 0; i < menu.length; i++) {
        var dish = model.getDish(menu[i]);
        dishes += '<div class="col-md-6">' +
            '<img src="images/' + dish.image + '" width="100%" height="150px">' +
            '<button class="btn btn-default btn-block">' + dish.name + '</button>' +
            '<p align="right">' + 'func for price' + ' SEK </p>' +
            '</div>';
    }

    Test.html();

}
