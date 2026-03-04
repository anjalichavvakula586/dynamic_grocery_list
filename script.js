let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("bg-container");
document.body.appendChild(bgContainerEl);
let headingElement = document.createElement("h1");
headingElement.classList.add("heading");
headingElement.textContent = "Grocery List";
bgContainerEl.appendChild(headingElement);
let ulel = document.createElement("ul");
ulel.classList.add("list-container");
bgContainerEl.appendChild(ulel);
let groceryElements = ["milk", "peanut butter", "Cupcakes", "noodles", "chicken Biriyani", "Deserts", "Ice Creams"];
for (let i of groceryElements) {
    let listel = document.createElement("li");
    listel.textContent = i;
    ulel.appendChild(listel);
}
let checkBoxEl = document.createElement("input")
checkBoxEl.type = "checkbox";
checkBoxEl.id = "deliverymodel";
bgContainerEl.appendChild(checkBoxEl);
let labelEl = document.createElement("label");
labelEl.setAttribute("for", "deliverymode");
labelEl.classList.add("delivery-text");
labelEl.textContent = "Need Home Delivery";
bgContainerEl.appendChild(labelEl);
let breakel = document.createElement("br");
bgContainerEl.appendChild(breakel);
let buttonEl = document.createElement("button");
buttonEl.classList.add("btn", "btn-primary");
buttonEl.textContent = "Proceed to Pay";
bgContainerEl.appendChild(buttonEl);