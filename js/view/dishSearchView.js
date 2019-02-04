var dishSearchView = function (container, model) {

    model.addObserver(this);

    this.container = container;
    this.searchDishButton = container.find('#searchDishButton');
    var dishSpan = container.find("#dishesSpan");

    var loader = document.getElementById('loader');

    this.update = function () {
        loader.style.display = "block";

        var filterValue = document.getElementById('filterInput').value;
        var typeSelector = document.getElementById('typeSelect');
        var typeValue = typeSelector[typeSelector.selectedIndex].value;

        if (typeValue == "all") {
            model.getAllDishesApi("", String(filterValue)).then(recipes => {
                getDishesHTML(recipes);
            }).catch(err => console.log("following error occured: " + err));
        }
        else if (filterValue == "") {
            model.getAllDishesApi(String(typeValue), "").then(recipes => {
                getDishesHTML(recipes);
            }).catch(err => console.log("following error occured: " + err));
        }
        else {
            model.getAllDishesApi(String(typeValue), String(filterValue)).then(recipes => {
                getDishesHTML(recipes);
            }).catch(err => console.log("following error occured: " + err));
        }
    }

    var getDishesHTML = function (dishList) {
        var row_start = "<div class=" + 'row' + ">";
        var dishesToPrint = getDishHTML(dishList);
        var row_end = "</div>";

        loader.style.display = "none";
        dishSpan.html(row_start + dishesToPrint + row_end);
    }

    var getDishHTML = function (dishList) {
        var dishesToPrint = "";
        for (var i = 0; i < dishList.length; i++) {
            var dish = dishList[i];
            dishesToPrint += `
                <div class="container-fluid col-12 col-lg-3 col-md-3 col-sm-4 imgCont">
                    <img src="https://spoonacular.com/recipeImages/${dish.image}" class="foodPic"/>
                    <button id="${dish.id}" class="btn btn-secondary dishBtn"> ${dish.title} </button>
                </div>
                `
        }
        return dishesToPrint;
    }

    this.update();

    this.show = function () {
        container.show();
    };
    this.hide = function () {
        container.hide();
    };
}