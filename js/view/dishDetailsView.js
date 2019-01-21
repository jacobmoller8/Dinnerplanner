var dishDetailsView = function (container, model) {

    this.container = container;
    this.model = model;
    var dishView = container.find("#dishDescription");
    var currentDish = model.getSelectedDish();
    currentDish = model.getDish(currentDish);
    var dishDescriptionData = "";
    var dishIngredientDataStart = "";
    var dishIngredientData = "";
    var dishIngredientDataEnd = "";


    var row_start = "<div class=" + 'row' + ">";
    var row_end = "</div>";

    dishDescriptionData = "<div class=" + "container-fluid col-12 col-sm-6 dishDesc" + ">" +
        "<div class=" + "container-fluid col-12 col-sm-10 dishDescImageCont" + ">" + "<h3>" + currentDish.name +"</h3>" + "<img src=" + currentDish.image + "class=" + "img-fluid dishDescImage" + "id=" + "dishDescImage" + "alt=" + ">" + "</img>"
        + "<p id=" + "dishDescText" > + currentDish.description + "</p>"
        + "<button class=" + "btn btn-secondary" + ">" + "Back to search" + "</button>"
        + "</div>" + "</div>";

    dishIngredientDataStart = "<div class=" + "container-fluid col-12 col-sm-6 dishReci" + ">" + "<h3>Ingredients for " + "3" +  "people</h3>  " + "<table class=" + "table ingredientTable" + ">" + "<tbody>";

    for (p in model.getAllIngredients(model.getSelectedDish)){
        console.log(p);
    }


    dishIngredientDataEnd = "</tbody> </table> <button class=" + "btn btn-secondary" + ">" + "Add to menu</button> </div>";

    dishView.html(row_start + dishDescriptionData + row_end);
}
//row_start + dishDescriptionData + dishIngredientDataStart + dishIngredientDataEnd + row_end