let items = [];

document.getElementById("addButton").addEventListener("click", function () {
  let inputText = document.getElementById("inputText").value;
  console.log("new todo item text", inputText);
  items.push(inputText);
  refreshUl();
  console.log(items);
});

function refreshUl() {
  let ulWrapper = document.getElementById("ulWrapper");
  let ul = document.querySelector("ul");
  ul.remove();

  let newUl = document.createElement("ul");
  ulWrapper.appendChild(newUl);

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let li = document.createElement("li");
    li.innerText = item;
    newUl.appendChild(li);
  }
}
