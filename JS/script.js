const items = [
    'consegna/img/01.jpg',
    'consegna/img/02.jpg',
    'consegna/img/03.jpg',
    'consegna/img/04.jpg',
    'consegna/img/05.jpg'
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


const boxActiveImg = document.querySelector(".col-10");
let currentIndex = 4;

for (let i = 0; i < items.length; i++) {
    const urlImg = items[i];

    /*  let tagImgActive = `<img src="${urlImg}" height="" width="100%" alt="img ${i}">`;*/
    /*   */

    let classeActive = "";

    if (i === currentIndex) {
        classeActive = "active";
    }
    let tagImgActive = `<img class="${classeActive}" src="${urlImg}"  width="100%" alt="img ${i}" >`;
    console.log(tagImgActive);
    boxActiveImg.innerHTML += tagImgActive;

}






const boxThumbnail = document.querySelector(".col-2");

for (let i = 0; i < items.length; i++) {
    const currentImg = items[i];

    // ho usato createElement perchè con innerHTML mi scriveva il codice dopo il div container arrow
    let tagImg = document.createElement("img");
    tagImg.src = currentImg;
    tagImg.alt = i;

    boxThumbnail.prepend(tagImg);


}


// FRECCE

const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");


arrowUp.addEventListener("click", function () {
    const activeImage = document.querySelector(".active");
    activeImage.classList.remove("active");

    currentIndex--;
    const imageTag = boxActiveImg.querySelectorAll("img");
    const newActiveImage = imageTag[currentIndex];
    newActiveImage.classList.add("active");
    console.log(newActiveImage);
});
arrowDown.addEventListener("click", function () {
    const activeImage = document.querySelector(".active");
    activeImage.classList.remove("active");

    currentIndex++;
    const imageTag = boxActiveImg.querySelectorAll("img");
    const newActiveImage = imageTag[currentIndex];
    newActiveImage.classList.add("active");
    console.log(newActiveImage);
});



