var btn = document.getElementById('btn')
var text = document.getElementById('text')
var photo = document.getElementById('pic')

var lunch1 = {
    imagesrc : 'http://i0.kym-cdn.com/photos/images/original/001/107/243/81a.jpg',
    name : 'kids cuisine',
    adjective : 'mmm lanch',
    verb : '420',
};

var lunch2 = {
    imagesrc : 'https://search.chow.com/thumbnail/800/600/www.chowstatic.com/assets/2014/09/28371_calamari_parsley_garlic_3000.jpg',
    name : 'octopussy',
    adjective : 'i have you now bond',
    verb : 'squirmy',
};

var lunch3 = {
    imagesrc : 'http://i0.wp.com/mommylikewhoa.com/wp-content/uploads/2015/08/bbq4.jpg',
    name : 'haute dawg',
    adjective : 'dank maymay',
    verb : 'yum',
};

var lunch4 = {
    imagesrc : 'https://news.bitcoin.com/wp-content/uploads/2018/01/DnwzoG1s-300x300.jpeg',
    name : 'food',
    adjective : 'yes',
    verb : 'very food',
};

var lunch5 = {
    imagesrc : 'https://images-na.ssl-images-amazon.com/images/I/A13waxBxEWL._SX355_.jpg',
    name : 'noodles',
    adjective : 'send noodles',
    verb : 'plz',
};

var lunch = [lunch1, lunch2, lunch3, lunch4, lunch5]

btn.addEventListener('click', function(){
    var randomNumber = Math.floor((Math.random() * 5) +0);
    photo.src = lunch[randomNumber].imagesrc;
    text.innerHTML = lunch[randomNumber].name + lunch[randomNumber].adjective + lunch[randomNumber].verb;
});