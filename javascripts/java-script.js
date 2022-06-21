$(document).ready(function() {

    let a = 0;
    let b = 1000;
    $(".runLineImg").clone().appendTo(".runLine");

    $(".tanLink").click(function() {document.location.href="./tanPage.html"});
    $(".shopLink").click(function() {document.location.href="./shop.html"});
    $(".eventsLink").click(function() {document.location.href="./events.html"});
    $(".tote, .envelope, .books, .cream, .creamToo").hover(
        function () {
            $(".tote, .envelope, .books, .cream, .creamToo").css("filter", "blur(0.3vw)").css("transition", "filter 0.25s linear");
            $(this).css("filter", "blur(0)");
            let item = $(".itemName"); //current item in heading (hidden atm)
            let price = $(".itemPrice"); //current price of the item in heading (hidden atm)
            $(".itemPrice, .itemName").css("opacity", "1");
            if (this.className === "tote") {
                item.text(item.text().replace(item.text(), "сумка"));
                price.text(price.text().replace(price.text(), "2400р."));
            } else if (this.className === "envelope"){
                item.text(item.text().replace(item.text(), "открытка"));
                price.text(price.text().replace(price.text(), "650р."));
            } else if (this.className === "books"){
                item.text(item.text().replace(item.text(), "фирменная книга"));
                price.text(price.text().replace(price.text(), "4000р."));
            } else if (this.className === "cream"){
                item.text(item.text().replace(item.text(), "защитный крем"));
                price.text(price.text().replace(price.text(), "1000р."));
            } else if (this.className === "creamToo"){
                item.text(item.text().replace(item.text(), "увлажняющий крем"));
                price.text(price.text().replace(price.text(), "1000р."));
            }
        },
        function () {
            $(".tote, .envelope, .books, .cream, .creamToo").css("filter", "blur(0)").css("transition", "filter 0.25s linear");
            $(".itemPrice, .itemName").css("opacity", "0");
        }
    );
    //option 1 works but not as good-looking
    // redo in toggleClass
    // mouseOn -> click inside?
    let colorClicked = false;
    let pickedTClass = null; // placeholder for future picked triangulars

    $(".picker img").hover(
        function () {
            let currentColor = $(".pickedColor"); //current color in heading (hidden atm)

            if (!colorClicked) {
                $(".picker img").toggleClass("unpickedT");
                pickedTClass = $(this);
                $(this).toggleClass("unpickedT");
                $(this).toggleClass("pickedT");
                $(currentColor).toggleClass("activeColor");
                if (this.className === "purpleT pickedT") { // put the ifs in one function and call it when needed
                    currentColor.text(currentColor.text().replace(currentColor.text(), "пыльная лаванда"));
                } else if (this.className === "redT pickedT"){
                    currentColor.text(currentColor.text().replace(currentColor.text(), "сочинский персик"));
                } else if (this.className === "greenT pickedT"){
                    currentColor.text(currentColor.text().replace(currentColor.text(), "томный базилик"));
                } else if (this.className === "yellowT pickedT"){
                    currentColor.text(currentColor.text().replace(currentColor.text(), "горчичка"));
                }
            } else if (colorClicked && !($(this).hasClass("pickedT"))) { // check if clicked T is already selected
                $(this).click(function (){
                    $(this).toggleClass("unpickedT");
                    $(this).toggleClass("pickedT");
                    $(this).toggleClass("eventUnpicked");
                    pickedTClass.toggleClass("pickedT");
                    pickedTClass.toggleClass("unpickedT");
                    pickedTClass.toggleClass("eventUnpicked");
                    pickedTClass = $(this);
                    if (this.className === "purpleT pickedT") {
                        currentColor.text(currentColor.text().replace(currentColor.text(), "пыльная лаванда"));
                    } else if (this.className === "redT pickedT"){
                        currentColor.text(currentColor.text().replace(currentColor.text(), "сочинский персик"));
                    } else if (this.className === "greenT pickedT"){
                        currentColor.text(currentColor.text().replace(currentColor.text(), "томный базилик"));
                    } else if (this.className === "yellowT pickedT"){
                        currentColor.text(currentColor.text().replace(currentColor.text(), "горчичка"));
                    }
                });
            }


            $(this).click(function (){
                if (!colorClicked) {
                    pickedTClass.toggleClass("eventUnpicked");
                    $(".picker img").toggleClass("eventUnpicked");
                }
                colorClicked = true;

            });
        },
        function () {
            if (!colorClicked) {
                $(this).toggleClass("pickedT");
                $(".picker img").toggleClass("unpickedT");
                $(this).toggleClass("unpickedT");
                $(".pickedColor").toggleClass("activeColor");
            }
        }
    );



    $(".sendButton").click(function () {
        $(".workspaceOne").css("filter", "blur(1vw)").css("transition", "filter 0.25s linear").css("pointer-events", "none");
        $(".scheduledDiv").css("opacity", "1").css("transition", "opacity 0.25s linear");
        setTimeout(function () {
            window.location.reload();
        }, 4000);
    });

    let eventClicked = false;
    let allEvents = ".onlineTour, .groupTan, .skinProbs, .colorImp, .melaninWho";
    let pickedEventClass = null;
    let visibleContent = null;
    let visibleButton = null;
    $(allEvents).hover(
        function () {

            if (!eventClicked) {
                $(allEvents).toggleClass("eventUnpicked");
                pickedEventClass = $(this);
                $(this).toggleClass("eventUnpicked");
                $(".eventsContainer p").toggleClass("eventUnpicked");
                if (this.className === "onlineTour") {
                    $(".onlineTourDiv").toggleClass("eventContentVisible");
                    visibleContent = $(".onlineTourDiv");
                    $(".visitButton").toggleClass("eventUnpicked");
                    visibleButton = $(".visitButton");
                } else if (this.className === "groupTan"){
                    $(".groupTanDiv").toggleClass("eventContentVisible");
                    visibleContent = $(".groupTanDiv");
                    visibleButton = $(".one");
                    $(".one").toggleClass("eventUnpicked");
                } else if (this.className === "skinProbs"){
                    $(".skinProbsDiv").toggleClass("eventContentVisible");
                    visibleContent = $(".skinProbsDiv");
                    $(".three").toggleClass("eventUnpicked");
                    visibleButton = $(".three");
                } else if (this.className === "colorImp"){
                    $(".colorImpDiv").toggleClass("eventContentVisible");
                    visibleContent = $(".colorImpDiv");
                    $(".two").toggleClass("eventUnpicked");
                    visibleButton = $(".two");
                } else if (this.className === "melaninWho"){
                    $(".melaninDiv").toggleClass("eventContentVisible");
                    visibleContent = $(".melaninDiv");
                    $(".four").toggleClass("eventUnpicked");
                    visibleButton = $(".four");
                }
            } else if (colorClicked && !($(this).hasClass("pickedT"))) { // check if clicked T is already selected
                $(this).click(function (){
                    visibleContent.toggleClass("eventContentVisible");
                });
            }
        },
        function () {
            if (!colorClicked) {
                visibleContent.toggleClass("eventContentVisible");
                $(allEvents).toggleClass("eventUnpicked");
                $(this).toggleClass("eventUnpicked");
                $(".eventsContainer p").toggleClass("eventUnpicked");
                visibleButton.toggleClass("eventUnpicked");

            }
        }
    );

    $(".getInButton").click(function (){
        $(".navBlock").css("transition", "filter 0.25s linear").css("filter", "blur(1vw)");
        $(".eventsContainer").css("transition", "filter 0.25s linear").css("filter", "blur(1vw)");
        $(".youreInDiv").css("transition", "opacity 0.25s linear").css("opacity", "1");
        setTimeout(function () {
            window.location.reload();
        }, 4000);
    });
    let itemsInCart = 0;

    // shop scripts
    $(".toCart").hover(
        function () {
            $(this).toggleClass("activeToCart");

            $(this).click(function() { // add to the cart and increase cart by one
                // $(".cart").text($(".cart").text().replace(itemsInCart.toString(), (itemsInCart+ 1).toString()));
                // itemsInCart += 1;
                $(".toCart").text($(".toCart").text().replace("В КОРЗИНУ", "ДОБАВЛЕНО"));

            });
        },
        function () {
            $(".toCart").text($(".toCart").text().replace($(".toCart").text(), "В КОРЗИНУ"));
            $(this).toggleClass("activeToCart");
        }
    );


});