var selectDishAgainView = function (container, model) {

    this.container = container;

    var dishSpan = container.find("#dishesSpan");
    var dishSummary = container.find(".dinnerSummary");

    var allStarterDishes = model.getAllDishes("starter");
    var allMainDishes = model.getAllDishes("main dish");
    var allDesertDishes = model.getAllDishes("dessert");
    var allDishes = allStarterDishes.concat(allMainDishes).concat(allDesertDishes);
    var dishesToPrint = "";

    var row_start = '<div class="row">';
    var row_end = '</div>';


    for (var i = 0; i < allDishes.length; i++) {
        var dish = allDishes[i];
        dishesToPrint += '<div class="container-fluid col-12 col-lg-2 col-md-3 col-sm-4 imgCont">' +
            '<img src="images/' + dish.image + '" class="img-fluid foodPic" alt="Responsive image"/>' +
            '<button class="btn btn-secondary dishBtn">' + dish.name + '</button>' + '</div>'
    }

    dishSpan.html(row_start + dishesToPrint + row_end);



    var menu = model.getFullMenu();
    var allSelectedDishes = [];

    for (dish in menu){
        allSelectedDishes.push(model.getDish(menu[dish]))
    }

    var selectedDishesPrint = "";
    var price = "";
    var currentID = "";

    for (p in allSelectedDishes){
        price = model.getDishPrice(allSelectedDishes[p]);
        selectedDishesPrint += '<p class="sideDishName col-6" id="selectedDishName">'+ allSelectedDishes[p].name +'</p>' +
                          '<p class="sideCost col-6" id="selectedDishCost">'+ price +'</p>'
    }
    var totalSum = '<p class="sideSum offset-6 col-6" id="menuSum"> SEK ' + model.getTotalMenuPrice() + '</p>';
    console.log(selectedDishesPrint)
    dishSummary.html(row_start + selectedDishesPrint + totalSum + row_end);

}


//  <div class="row">
// <p class="sideDishName col-6" id="selectedDishName"></p>
// <p class="sideCost col-6" id="selectedDishCost"></p>
// </div>