import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	$('.test__answer-text').click(function() {
        var productsData = $(this).data('products');
        var productsArray = productsData.split(', ');

		var imageUrl = $(this).find('img').attr('src');
        $('#selected-answer').text($(this).text());
		$('#selected-img').append($('<img>').attr('src', imageUrl));
        $('#product-list').empty();
        $(".result__answer-text").each(function() {
            if ($(this).text().trim().toLowerCase() === "лебеда") {
                $('.result__list').css("grid-template-columns", "repeat(2, 1fr)")
                console.log(1);
            }
        });
        $.each(productsArray, function(index, productData) {
            var productInfo = productData.split('|');
            var productName = productInfo[0];
            var productImage = productInfo[1];
            var listItem = $('<li class="result__items">').append($('<img class="result__images">').attr('src', productImage), $('<span class="result__text-product">').text(productName));
            $('#product-list').append(listItem);
        });

        $('.test').hide();
        $('.result').show();
		$('.result__link-product').click(function() {
			$('.result').hide();
        	$('.test').show();
			$('#selected-img').find('img').remove();
            var screenWidth = $(window).innerWidth();
            if(screenWidth < 768) {
                $('.result__list').css("grid-template-columns", "repeat(2, 1fr)")
            } else {
                $('.result__list').css("grid-template-columns", "repeat(3, 1fr)")
            }
		});
        $('.result__link.main').click(function() {
            $('.result__wrap-pin').show();
            $('.result__wrap-pin').css("display", "flex");
            $('.result__text').hide();
            $('.result__recommendations').toggleClass("pink")
            $('.result__wrap-link').hide();
        });
    });
});
