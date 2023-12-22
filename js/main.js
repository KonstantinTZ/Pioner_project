let productsList = document.querySelector('.products__list')

let productsArray = [
    {
        title: 'Сигнализатор уровня'
    },
    {
        title: 'Датчики давления'
    },
    {
        title: 'ПИД-регуляторы'
    },
    {
        title: 'Калибратор давления'
    },
    {
        title: 'Корректор расхода газа'
    },
    {
        title: 'Манометры'
    },
]

function createProductCard(title, arrayIndexcounter) {
    let productCard = document.createElement('li');
    productCard.innerHTML = `
                     <li class="products__card card">
                    <img src="img/card-img-${arrayIndexcounter}.png" alt="" class="card__img">
                    <div class="card__text">

                        <span class="card__title">
                        ${title}
                        </span>
                        <a href="#" class="card__link">Подробнее</a>
                    </div>
                </li>
    `
    return productCard
}

for (const item of productsArray) {
    productsList.append(createProductCard(item.title, productsArray.indexOf(item) + 1))
}


let newsList = document.querySelector('.news__list')

let newsArray = [
    {
        newsTitle: 'НПП «ПИОНЕР» подтвердило свои компетенции в области консультирования и изготовления…',
        time: '20.07.2023',
        img: '../img/story-img-1.png'
    },
    {
        newsTitle: 'Поздравляем коллектив регионального представительства «ПИОНЕР» с праздником!',
        time: '18.07.2023',
        img: '../img/story-img-2.png'
    },
    {
        newsTitle: 'Перенос сроков проведения запланированных работ в 2020 году',
        time: '20.06.2023',
        img: '../img/story-img-3.png',
    },

]

function createNewsCard(title, time, imageSrc) {
    let newsCard = document.createElement('li');
    newsCard.innerHTML = `
    <li class="news__card story">
    <img src="${imageSrc}" alt="" class="story__img">
    <div class="story__bottom">

        <span class="story__text">
            ${title}
        </span>
                <div class="story__box">
                    <a href="#" class="story__link">Читать далее</a>
                    <span class="story__time ">
                        ${time}
                    </span>
                </div>
            </div>
        </li>
    `
    return newsCard
}

for (const item of newsArray) {
    newsList.append(createNewsCard(item.newsTitle, item.time, item.img))
}