var selectDishView = function (container, model) {

    this.container = container;

    var dishSpan = container.find("#dishesSpan");

    var allDishes = model.getAllDishes("starter");
    var dishesToPrint = "";

    var row_start = "<div class=" + 'row' + ">";
    var row_end = "</div>";


    var testerSpan = container.find("#testerDiv");
    var testText = "";

    for (var i = 0; i < 5; i++) {
        testText += allDishes[i];
    }

    for (var i = 0; i < allDishes.length; i++) {
        var dish = allDishes[i];
        dishesToPrint += '<div class="container-fluid col-12 col-sm-2 imgCont">' +
            '<img src="images/' + dish.image + '" class="img-fluid foodPic" alt="Responsive image"/>' +
            '<button class="btn btn-secondary dishBtn">' + dish.name + '</button>' + '</div>'
    }

    testerSpan.html(testText);
    dishSpan.html(row_start + dishesToPrint + row_end);
}