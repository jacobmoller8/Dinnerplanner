var dinnerDetailsView = function (container, model) {

    this.container = container;

    var dishView = container.find("#dishDescription");

    var dishDescriptionData = "";
    var dishIngredientDataStart = "";
    var dishIngredientDataEnd = "";
    var selectedDish = model.selectedDish;
    var selectedDish = model.getDish(selectedDish);

    var row_start = "<div class=" + 'row' + ">";
    var row_end = "</div>";

    dishDescriptionData = "<div class=" + "container-fluid col-12 col-sm-6 dishDesc" + ">" + 
    "<div class=" + "container-fluid col-12 col-sm-10 dishDescImageCont"> + "<h3>Lasange</h3>" + "<img src=" +"#" + "class=" + "img-fluid dishDescImage" + "id=" + "dishDescImage" + "alt="+">"+"</img>"
    + "<p id=" + "dishDescText"> + "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aspernatur facere quod sunt dolorem illo placeat et obcaecati totam rerum dolor maiores magni quaerat debitis excepturi asperiores fuga doloremque error laborum exercitationem! Iste obcaecati laudantium nostrum quam. Fuga magni laudantium corrupti, quibusdam nobis corporis? Odit aliquam exercitationem molestiae amet ex."+"</p>"
    + "<button class=" + "btn btn-secondary" + ">" + "Back to search" + "</button>"
    + "</div>" + "</div>"

    dishIngredientDataStart = "<div class=" + "container-fluid col-12 col-sm-6 dishReci" + ">" + "<h3>Ingredients for 3 people</h3>  " + "<table class=" + "table ingredientTable" + ">" + "<tbody>";
            
    dishIngredientDataEnd = "</tbody> </table> <button class=" + "btn btn-secondary" + ">" + "Add to menu</button> </div>"

    dishView.html(row_start + dishDescriptionData + dishIngredientDataStart + dishIngredientDataEnd + row_end);
}
