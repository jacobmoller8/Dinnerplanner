 var checkCookies = () => {
    rawCookieString = document.cookie;
    var cookies = rawCookieString.split("; ");
    var tempMenu = [];
    var tempGuests = "";
    var tempScreen = "";
    var tempSelectedDish = "";

    for (cookie in cookies){
        var cookieValue = cookies[cookie].split("=");
        if (cookieValue[0] == "menu"){
            tempMenu = cookieValue[1].split(",");
        }else if (cookieValue[0] == "selectedDish"){
            tempSelectedDish = cookieValue[1];
        }else if (cookieValue[0] == "currentScreen"){
            tempScreen = cookieValue[1];
        }else if (cookieValue[0] == "numberOfGuests"){
            tempGuests = cookieValue[1];
        }
    }
    return [tempMenu, tempGuests, tempScreen, tempSelectedDish];
 }