$(document).ready(() => random())

function random() {
  $("#categories").empty();
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  $(".blockquote").text(randomFact["Fact"])
  let categoriesArray = randomFact["Categories"].split(" ");
  if (categoriesArray[0].length > 0) {
    for (c of categoriesArray) {
      $("#categories").append(`<p class="badge bg-secondary me-1">${c}</p>`)    
    }
  }
}