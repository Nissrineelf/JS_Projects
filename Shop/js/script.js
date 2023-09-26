let allProducts = document.querySelector(".products");

let products = [
    {
        id : 1,
        title   : "Maverick",
        offer   : "2+1 Gift",
        desc    : "The Maverick Collection",
        imgUrl  : "/images/w1.jpg"
    },
    {
        id : 2,
        title   : "Atlantic",
        offer   : "2+1 Gift",
        desc    : "Atlantic - Ladies' Watches",
        imgUrl  : "/images/w2.jpg"
    },
    {
        id : 3,
        title   : "MONTREDO",
        offer   : "2+1 Gift",
        desc    : "from Meisterstücke",
        imgUrl  : "/images/w3.jpg"
    },
    {
        id : 4,
        title   : "SEIKO",
        offer   : "3+1 Gift",
        desc    : "Diamonds Collection",
        imgUrl  : "/images/w4.jpg"
    },
    {
        id : 5,
        title   : "Casio",
        offer   : "2+1 Gift",
        desc    : "Sheen Collection",
        imgUrl  : "/images/w5.jpg"
    },
];


function productDesign() {
    let productDes = products.map(function(item){
        return `
                <div class="products-item">
                    <img src="${item.imgUrl}" class="product-item-img" alt="">

                    <div class="product-description">
                        <h1>${item.title}</h1>
                        <p>${item.desc}</p>
                        <span class="offer">Offer : ${item.offer}</span>
                    </div>

                    <div class="product-item-action">
                        <button class="product-item-buy">Buy now</button>
                    </div>
                 </div>
        `
    });

    allProducts.innerHTML = productDes;

}

productDesign();