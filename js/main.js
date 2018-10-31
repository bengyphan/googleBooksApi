var search = document.getElementById("search");
var button = document.getElementById("button");

button.addEventListener("click", function(){
	$.ajax({
	url: "https://www.googleapis.com/books/v1/volumes?q=" + search.value,
	dataType: "json",
	success: function(data) {
				search.innerText = " ";
				var booksList = document.getElementById("books-list");
				for(var i = 0; i < data.items.length; i++) {
					var myH1 = document.createElement("h1");
					var myImg = document.createElement("img");
					var myH3 = document.createElement("h3");
					var myH5 = document.createElement("h5");
					var myLink = document.createElement("a");

					myH1.innerText = data.items[i].volumeInfo.title;
					myImg.src = data.items[i].volumeInfo.imageLinks.thumbnail;
					myH3.innerText = data.items[i].volumeInfo.authors;
					myH5.innerText = data.items[i].volumeInfo.publishedDate;
					myLink.innerText = "Learn More"  
					myLink.href = data.items[i].volumeInfo.infoLink;

					myLink.classList.add("btn", "btn-primary");

					booksList.appendChild(myH1);
					booksList.appendChild(myImg);
					booksList.appendChild(myH3);
					booksList.appendChild(myH5);
					booksList.appendChild(myLink);

				}
				console.log(data.items);
	},
	type: "GET"

})
})
