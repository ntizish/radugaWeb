$(document).ready(function() {

    let a = 0;
    let b = 1000;
    $(".runLineImg").clone().appendTo(".runLine");

    $(".tanLink").click(function() {document.location.href="./tanPage.html"});
    $(".shopLink").click(function() {document.location.href="./shop.html"});
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
                    pickedTClass.toggleClass("pickedT");
                    pickedTClass.toggleClass("unpickedT");
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

    // option 2 not working properly TO:DO
    // $(".picker img").hover(
    //     function () {
    //         $(".picker img").css("transition", "transform 0.25s linear");
    //         $(".picker img").css("transition", "padding-right 0.25s linear");
    //         $(this).css("padding-left", "9.2vw");
    //         $(this).css("padding-right", "10vw");
    //         $(this).css("transform", "scale(1.2, 1.2)");
    //     },
    //     function () {
    //         $(".picker img").css("transition", "transform 0.25s linear");
    //         $(".picker img").css("transition", "padding-right 0.25s linear");
    //         $(this).css("padding-right", "9.6vw");
    //         $(this).css("transform", "scale(1)");
    //     }
    // )

    $(".picker img").click(
        function () {
            if (this.className === "purpleT") {
                $(this).toggleClass("picked");

            }
        });



    $(".sendButton").click(function () {
        $(".workspaceOne").css("filter", "blur(1vw)").css("transition", "filter 0.25s linear").css("pointer-events", "none");
        $(".scheduledDiv").css("opacity", "1").css("transition", "opacity 0.25s linear");
        setTimeout(function () {
            window.location.reload();
        }, 4000);
    });


});