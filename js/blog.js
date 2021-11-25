const url = 'https://bucketlisttravels.mskj.one/wp-json/wp/v2/posts';
const blogContainer = document.querySelector (".blog-posts");

async function getPosts() {
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }
    catch(error) {
        console.log("An error has ocurred.");
        blogContainer.innerHTML = displayError();
    }
}

getPosts();

function createHTML(posts){
    posts.forEach(function(posts) {
        console.log(posts);

        blogContainer.innerHTML += 
        `
        <div class="posts">
         <a href="/specificpage.html?id=${posts.id}">
        <h1>${posts.title.rendered}</h1>
        </a>

        <div class="posts-details">
        Published: ${posts.date}
        - Comments: (...)
        </div>

        <div class="posts-content">
        ${posts.content.rendered}
        </div>
        </div>
        `;
    })
}