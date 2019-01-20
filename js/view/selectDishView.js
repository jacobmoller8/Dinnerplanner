var selectDishView = function (container, model) {

    this.container = container;

    var dishSpan = container.find("#dishesSpan");
    var menu = model.getFullMenu();
    var dishes = "";

    var row_start = "<div class=" + 'row' + ">"
    var row_end = "</div>"

    for (var i = 0; i < menu.length; i++) {
        var dish = model.getDish(menu[i]);
        dishes += '<div class="container-fluid col-12 col-sm-2 imgCont">' +
            '<img src="images/' + dish.image + '" class="img-fluid foodPic" alt="Responsive image"/>' +
            '<button class="btn btn-secondary dishBtn">' + dish.name + '</button>' + '</div>'
    }

    dishSpan.html(row_start + dishes + row_end);
}