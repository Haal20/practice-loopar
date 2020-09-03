//arrayen men roliga saker
let list = [
  "köpa och äta mat",
  "hjälpa andra",
  "lösa problem",
  "dricka öl",
  "träffa Kantian Dinner",
];

//funktion som skriver ut <h2>, början av <ul> for()loop och slutet av <ul>
function myList() {
  let listItem = "<h2>Min skoj lista:</h2><ul>";
//for()loop som lägger till varje index elementvärde som <li> i listan skapad i functionen
  for (i = 0; i < list.length; i++) {
    listItem += "<li>" + list[i] + "</li>";
  }
  listItem += "</ul>";
  return listItem;
};

//skriver ut functionen i <div> i html-filen
document.getElementById("listPlace").innerHTML = myList();
