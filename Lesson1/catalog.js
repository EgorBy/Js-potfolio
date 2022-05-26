'use strict';

class Product {
    constructor(id, title, price, imageUrl) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    renderProduct() {
        return `<div class="productItem">
        <div class="productTop">
        <img class="productImg" src="${this.imageUrl}" atl="">
            <h3 class="productName">${this.title}</h3>
            <div>Цена: <span>${this.price}</span> p.</div>
            </div>
            <div class="productBottom">
            <button class="buyBtn">Купить</button>
            <div class="productDetails"><a href="">Подробнее</a></div>
            </div>
        </div>`
    };
}

const products = [
    new Product(1, 'Notebook', 2000, 'https://i.citrus.world/imgcache/size_800/uploads/shop/0/d/0d49f8acabb66f31871da93f48fae626.jpg'),
    new Product(2, 'Mouse', 20, 'https://img.mvideo.ru/Big/50135757bb.jpg'),
    new Product(3, 'Keyboard', 200, 'https://img.moyo.ua/img/products/4585/50_600.png?1653545308'),
    new Product(4, 'Gamepad', 50, 'https://i.citrus.world/imgcache/size_800/uploads/shop/6/8/687f4a38f1c4926a60e757c5df8c984d.jpg'),
];

const productsEl = document.querySelector('.products');

// Воспользовались методом join для удаления запятых между обьектами, 
// запятые образовались при переводе строк в массив по средствам map.

productsEl.innerHTML = products.map(product =>
    product.renderProduct()).join('');

