// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


function createTab(item) {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = item;

  return tab;
}


const topics = document.querySelector(".topics");

axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
      const topicsArray = response.data.topics;
      topicsArray.forEach(element => {

          return topics.append(createTab(element));
      })
  })


  .catch(error => {
      console.log("The data was not returned", error);
  });