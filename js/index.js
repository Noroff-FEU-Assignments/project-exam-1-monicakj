const sliders = document.querySelector(".carouselbox"); 
const buttonLeft = document.querySelector(".switchLeft");
const buttonRight = document.querySelector(".switchRight");

const url = "https://bucketlisttravels.mskj.one/wp-json/wp/v2/posts/?_embed";

console.log(url);

async function carouselHome() {
    try {
        const response = await fetch(url);
        const result = await response.json(); 

        for(let i = 0; i < result.length; i++) {
            sliders.innerHTML += 
                    `<div class="carouselbox-content">
                        <a href="/specificpage.html?id=${result[i].id}">
                            <img src="${result[0]._embedded["wp:featuredmedia"][0].source_url}">
                            <p>${result[i].title.rendered}</p>
                        </a>
                    </div>`;
        }        
}
    catch(error) {
        sliders.innerHTML = "An error has occured";
    }
}

carouselHome();

let scrollPerClick = document.querySelector(".carouselbox").clientWidth; 
let scrollAmount = 0; 

buttonLeft.onclick = function () {
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth",
    });

    if(scrollAmount < 0) {
        scrollAmount = 0
    }
}

buttonRight.onclick = function() {
    if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth",
        }); 
    }
}