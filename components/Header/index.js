// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function createHeader() {
  const header = document.createElement("div"),
        date = document.createElement("span"),
        title = document.createElement("h1"),
        temperature = document.createElement("span");


    header.classList.add("header");
    date.classList.add("date");
    temperature.classList.add("temp");
    date.textContent = "SMARCH 28, 2019";
    title.textContent = "Lambda Times";
    temperature.textContent = "98°";
    header.append(date, title, temperature);

    return header;
}


const headerContainer = document.querySelector(".header-container");

headerContainer.append(createHeader());
