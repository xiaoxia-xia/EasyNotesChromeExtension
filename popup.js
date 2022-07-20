// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

let value_ = "";

let input_ = document.getElementById("input");
// input_.value += "FWIOEJFIOWEJFOIJWEIOFJWEOIJFOWIEJFOIWEIJO";
console.log(input_.value);


chrome.storage.sync.get("color", ({ color }) => {
  //Set the color of the button, ( don't effect the function tho. )
  // console.log("Hello World");
  changeColor.style.backgroundColor = color;
});


input_.addEventListener("click", async() =>{
  // console.log(input_.value);
  value_ = input_.value;
  chrome.storage.sync.set({value_});
});


chrome.storage.sync.get("value_", ({ value_ }) => {
  input_.value = value_;
});


// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // console.log("Hello World");

    //Function calls.
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});



// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    //Incharge of the actual thing that controls the background of the chrome page.
    document.body.style.backgroundColor = color;
    // console.log("Hello World");
  });
}
