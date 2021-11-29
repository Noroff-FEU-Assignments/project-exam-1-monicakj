const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://bucketlisttravels.mskj.one/wp-json/wp/v2/posts/" + id + "?_embed";

console.log(url);

const detailsContainer = document.querySelector(".post-details");

async function fetchPost() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
}
    catch(error) {
        console.log("An error has occurred.");
        detailsContainer.innerHTML = displayError();
    }   
}

fetchPost();

function createHtml(details) {
    detailsContainer.innerHTML = 
        `
        <div class="post-content">
         <h1>${details.title.rendered}</h1>

         <div class="post-date">
         Published: ${details.date} - Comments (...)
         </div>

         ${details.content.rendered}
        </div>
        `;
}

