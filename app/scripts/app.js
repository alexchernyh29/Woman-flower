import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	$('.test__answer-text').click(function() {
        var productsData = $(this).data('products');
        var productsArray = productsData.split(', ');

		var imageUrl = $(this).find('img').attr('src');
    	console.log(imageUrl);
        $('#selected-answer').text($(this).text());
		$('#selected-img').append($('<img>').attr('src', imageUrl));
        $('#product-list').empty();

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
		});
    });
});
