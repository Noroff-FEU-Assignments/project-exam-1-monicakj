const url = "https://bucketlisttravels.mskj.one/wp-json/wp/v2/posts/?_embed";
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
         <div class="posts-title">
        <h2>${posts.title.rendered}</h2>
        </a>
        </div>

        <div class="posts-details">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...</p>
        <a href="/specificpage.html?id=${posts.id}">
        <button class="readmore-button">Read More</button>
        </a>
        </div>
        </div>
        `;
    })
}


//  <div class="posts-details">
//         Published: ${posts.date}
//         - Comments: (...)
//         </div>

// <div class="posts-content">
//         ${posts.content.rendered}
//         </div>
//         </div>