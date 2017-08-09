





// https://github.com/swkane


//
// let queryURL = "http://www.recipepuppy.com/api/?q=";
//
// fetch("http://www.recipepuppy.com/api/?q=").then(
//   function(response) {
//     // handle HTTP response
//   },
//   function(error) {
//     // handle network error
//   }
// );

// http://jsonplaceholder.typicode.com/users



function textReplace() {

    var api = document.getElementById("mySearch").value;
    // let api = input.value;
    console.log(api);


    let baseURL = "https://api.github.com/users/"


    fetch(baseURL + api)
      // Data is fetched and we get a promise.
      .then(
        // The promise returns a response from the server.
        function(response) {
          // We process the response accordingly.
          if (response.status !== 200) {
            console.log(response.status);
            return;
          }
          response.json().then(function(data) {
            console.log("Here is the data:", data);
            reqListener (data);
          });
        }
      )
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });

    // document.getElementById("demo").innerHTML = x;
}

let container = document.querySelector(".container");


function reqListener (data) {

for (var i = 0; i < 1; i++) {

let result = document.createElement("div");
let picture = data.avatar_url;
let name = data.name;

// <img src="http://via.placeholder.com/200x200">
  result.innerHTML = `

    <h3>${name}</h3>
    <div class="food">
    <img width=200px src="${picture}">
    </div>


  `;

container.appendChild(result);

}
};
