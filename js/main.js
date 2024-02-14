function init() {
    //Вичитуемо файл goods.json
    $.getJSON("goods.json", goodsOut);
}

function goodsOut(data) {
    //Вивід товарів на головну сторінку
    //var goods = JSON.parse(data);
    console.log(data);
    var out='';
    for (var key in data){
        out += '<div class="cart">';
        out += '<p class="name">'+data[key].name+'</p>';
        out += '<img height="260px" width="166px" src="img/categories_of_book_illustrations'+data[key].img+'" alt="">';
        out += '<div class="cost">'+data[key].cost+'</div>';
        out += '<button class="add_to_cart">Придбати</button>';
        out += '</div>';
    }
    $('.novelties_of_books').html(out);
}

$(document).ready(function () {
    init();

});