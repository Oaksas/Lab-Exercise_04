

// UI Vars 
const postDiv2 = document.getElementById('myPosts');

const loader = document.querySelector('.load');


//load a single customer function 
function loadPosts() {

    // Create the xhr object 
    const xhr = new XMLHttpRequest();

    // Open the connection [URL can be local or remote]
    xhr.open('GET', './asset/jsonData/post.json', true);
    //on ready state is 4 when it reaches this method 
    xhr.onload = function() {
        // Check status is OK 
        if (this.status === 200) {

            //the data will be parsed as an array object from the responseText object 
            const posts = JSON.parse(this.responseText);

            let output = '';

            posts.forEach(post => {

                // Creating the UI by concatenation
                output += `
              <div class="item">
              <div class="image">
                  <img src="${post.image}">
              </div>
              <div class="content">
                  <a class="header" href="#" id="bTitle">
                  ${post.postTitle}
                  </a>
                  <div class="meta">
                      <span id="bDate">${post.date} </span>
                      <span>By: <a href="#" id="bAuthor"> ${post.name}</a></span>
                  </div>
                  <div class="description">
                      <p id="bDesc">
                      ${post.postText}
                      </p>
                  </div>
                  <div class="extra">
                      <a class="ui floated basic violet button" href="#">Read Mores</a>
                  </div>
              </div>
          </div>
          `;

            });


            loader.classList.remove('active')
            // Assign it to the DIV
            postDiv2.innerHTML = output;
        }
    }

    // Send the Request 
    xhr.send();
}