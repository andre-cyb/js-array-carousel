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
let currentIndex = 0;

for (let i = 0; i < items.length; i++) {
    const urlImg = items[i];

    let classeActive = "";

    if (i === currentIndex) {
        classeActive = "active";
    }
    let tagImgActive = `<div>
                            <img class="${classeActive}" src="${urlImg}"  width="100%" alt="img ${i}" > 
                            <div class="didascalia text-white"> <h3></h3> <p></p> </div>
                        </div>`;
    console.log(tagImgActive);
    boxActiveImg.innerHTML += tagImgActive;

}






const boxThumbnail = document.querySelector(".col-2");
let activeClass = "Thumbnail_on_active";


for (let i = 0; i < items.length; i++) {
    const currentImg = items[i];
    console.log(i);

    // ho usato createElement perchè con innerHTML mi scriveva il codice dopo il div container arrow
    let tagImg = document.createElement("img");
    tagImg.src = currentImg;
    tagImg.alt = i;

    if (i === currentIndex) {
        tagImg.classList.add(activeClass);

    }

    boxThumbnail.prepend(tagImg);


}


// FRECCE

const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");


arrowUp.addEventListener("click", function () {
    //bigimg
    const activeImage = document.querySelector(".active");
    activeImage.classList.remove("active");
    //

    //thumb
    const activeThumb = document.querySelector(".Thumbnail_on_active");
    activeThumb.classList.remove(activeClass);
    /* console.log(activeThumb); */
    //


    currentIndex++;
    if (currentIndex > items.length - 1) {
        currentIndex = 0;
    }

    //bigimg
    const imageTag = boxActiveImg.querySelectorAll("img");
    const newActiveImage = imageTag[currentIndex];
    newActiveImage.classList.add("active");
    console.log(imageTag[currentIndex]);

    //

    //thumb
    const tagThumbImg = boxThumbnail.querySelectorAll("img");
    const newActiveThumb = tagThumbImg[currentIndex];
    newActiveThumb.classList.add("Thumbnail_on_active");
    //
    /* console.log(newActiveImage); */
    console.log(tagThumbImg[currentIndex]);
});










arrowDown.addEventListener("click", function () {
    const activeImage = document.querySelector(".active");
    activeImage.classList.remove("active");

    //thumb
    const activeThumb = document.querySelector(".Thumbnail_on_active");
    activeThumb.classList.remove(activeClass);

    //


    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }



    const imageTag = boxActiveImg.querySelectorAll("img");
    const newActiveImage = imageTag[currentIndex];
    newActiveImage.classList.add("active");

    console.log(newActiveImage);


    //thumb
    const tagThumbImg = boxThumbnail.querySelectorAll("img");
    const newActiveThumb = tagThumbImg[currentIndex];
    newActiveThumb.classList.add("Thumbnail_on_active");
    //



});



