//min script fil
let list = [
  "köpa och äta mat",
  "hjälpa andra",
  "lösa problem",
  "dricka öl",
  "träffa Kantian Dinner",
];

let myList = function () {
  let listItem = "<h2>Min skoj lista:</h2><ul>";

  for (i = 0; i < list.length; i++) {
    listItem += "<li>" + list[i] + "</li>";
  }
  listItem += "</ul>";
  return listItem;
};

document.getElementById("listPlace").innerHTML = myList();
