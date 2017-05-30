(function () {
    var kids = [];
    var TEMPLATE = "<div class=\"kid\">\n" +
        "          <div class=\"panel panel-info\">\n" +
        "            <div class=\"panel-heading\">\n" +
        "              <h3>%NAME%</h3>\n" +
        "            </div>\n" +
        "            <div class=\"panel-body\">\n" +
        "              <div class=\"col-sm-4\">\n" +
        "                <img class=\"img-responsive\" src=\"%IMG%\">\n" +
        "              </div>\n" +
        "              <div class=\"col-sm-8\">\n" +
        "                <ul>\n" +
        "                  <li><h5>Години: %AGE%</h5></li>\n" +
        "                  <li><h5>Любим цвят: %COLOR%</h5></li>\n" +
        "                  <li><h5>Любима игра: %GAME%</h5></li>\n" +
        "                  <li><h5>Любима храна: %FOOD%</h5></li>\n" +
        "                </ul>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "        </div>\n";

    function kidsDisplay(list) {
        var collection = document.getElementById("kids");
        list.forEach(function (kid) {
            var temp = TEMPLATE.replace(/%NAME%/g, kid.name)
                .replace(/%AGE%/g, kid.age)
                .replace(/%COLOR%/g, kid.color)
                .replace(/%GAME%/g, kid.game)
                .replace(/%FOOD%/g, kid.food)
                .replace(/%IMG%/g, kid.image);
            collection.innerHTML += temp;
        });
    }
    $.getJSON("js/kids.json", function (data) {
        kids = data;
        kidsDisplay(kids);
    });

    //    function propComparator(prop) {
    //        return function (a, b) {
    //            return ((a[prop] < b[prop] ? -1 : 1) || 0);
    //        };
    //    }
    $("#nameKids").click(function () {
        console.log("click");
    });
})();
