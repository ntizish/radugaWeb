$(document).ready(function() {

    let a = 0;
    let b = 1000;
    $(".runLineImg").clone().appendTo(".runLine");

    $(".shopLink").click(function() {document.location.href="./shop.html"});
    $(".tote, .envelope, .books, .cream, .creamToo, .eventsLink").hover(
        function () {
            $(".tote, .envelope, .books, .cream, .creamToo").css("filter", "blur(0.3vw)");
            $(".tote, .envelope, .books, .cream, .creamToo").css("transition", "filter 0.25s linear");
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
            $(".tote, .envelope, .books, .cream, .creamToo").css("filter", "blur(0)");
            $(".tote, .envelope, .books, .cream, .creamToo").css("transition", "filter 0.25s linear");
            $(".itemPrice, .itemName").css("opacity", "0");
        }
    );

    $(".picker img").hover(
        function () {
            $(".picker img").css("transition", "transform 0.25s linear");
            $(".picker img").css("transform", "scale(0.8, 0.8)");
            $(this).css("transform", "scale(1.2, 1.2)");
        },
        function () {
            $(".picker img").css("transition", "transform 0.25s linear");
            $(".picker img").css("transform", "scale(1)");
            $(this).css("transform", "scale(1)");
        }
    )

});