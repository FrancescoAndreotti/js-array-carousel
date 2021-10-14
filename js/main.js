const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const imageContainer = document.querySelector(".image-container");

let currentIndex = 0;

for (let i = 0; i < items.length; i++) {

    const currentImg = items[i];


    let classeDaUsare = "";

    if (i === currentIndex) {
        classeDaUsare = "active";

    }

    const tagImg = `<img class="${classeDaUsare}" src="${currentImg}" alt="immagine #${i}">`;



    imageContainer.innerHTML += tagImg;

}



const arrowTop = document.querySelector(".arrow-top");
const arrowBottom = document.querySelector(".arrow-bottom");


arrowTop.addEventListener("click", function () {
    const activeImg = imageContainer.querySelector(".active");
    console.log(activeImg);

    activeImg.classList.remove("active");

    currentIndex--;
    console.log(currentIndex);

    if (currentIndex <= 0) {
        currentIndex = items.length - 1;
    }

    const imgTags = imageContainer.querySelectorAll("img");

    const newActiveImg = imgTags[currentIndex];
    newActiveImg.classList.add("active");
});


arrowBottom.addEventListener("click", function () {
    const activeImg = imageContainer.querySelector(".active");
    console.log(activeImg);

    activeImg.classList.remove("active");

    currentIndex++;
    console.log(currentIndex);

    if (currentIndex >= 5) {
        currentIndex = 0;
    }

    const imgTags = imageContainer.querySelectorAll("img");

    const newActiveImg = imgTags[currentIndex];
    newActiveImg.classList.add("active");
});