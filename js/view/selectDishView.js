var selectDishView = function (container, model) {

    this.container = container;

    var dishSpan = container.find("#dishesSpan");

    var allStarterDishes = model.getAllDishes("starter");
    var allMainDishes = model.getAllDishes("main dish");
    var allDesertDishes = model.getAllDishes("dessert");

    var allDishes = allStarterDishes.concat(allMainDishes).concat(allDesertDishes);

    var dishesToPrint = "";

    var row_start = "<div class=" + 'row justify-content-start' + ">";
    var row_end = "</div>";


    for (var i = 0; i < allDishes.length; i++) {
        var dish = allDishes[i];
        dishesToPrint += '<div class="container-fluid col-12 col-sm-2 imgCont">' +
            '<img src="images/' + dish.image + '" class="img-fluid foodPic" alt="Responsive image"/>' +
            '<button class="btn btn-secondary dishBtn">' + dish.name + '</button>' + '</div>'
    }

    dishSpan.html(row_start + dishesToPrint + row_end);
}