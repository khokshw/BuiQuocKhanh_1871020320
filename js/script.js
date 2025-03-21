$(document).ready(function() {
    //tim kiem
    $('#searchInput').on('input', function() {
        let keyboard = $(this).val().toLowerCase();
        $('.product').each(function() {
            let productName = $(this).find("h5").text().toLowerCase();
            if (productName.includes(keyboard)) {
                $(this).show();
                Results = true;
            } else {
                $(this).hide();
            }
        });
    });
    //loc theo hang
    $(".brand-item").click(function () {
        let brand = $(this).find("img").attr("alt").toLowerCase();
        $(".product").each(function () {
            let productName = $(this).find("h5").text().toLowerCase();
            $(this).toggle(productName.includes(brand));
        });
    });
    //loc theo nhu cau
    $(".demand").click(function () {
        let demand = $(this).text().trim().toLowerCase();
        $(".product").each(function () {
            let productAlt = $(this).find("img").attr("alt").toLowerCase();
            $(this).toggle(productAlt.includes(demand));
        });
    });
    //chon theo mau
    $("input[name='color']").change(function () {
        let color = $(this).attr("id");
        let imgPath = `images/product-img/iPhone/13-${color}.jpg`; 
        $("#productImage").attr("src", imgPath);
    });
    
});
