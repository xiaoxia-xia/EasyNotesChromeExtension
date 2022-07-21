//Declare variable for inputs

// let title_value = "";
// let notes_value = "";

let title_value_1 = "";
let title_value_2 = "";
let title_value_3 = "";

let notes_value_1 = "";
let notes_value_2 = "";
let notes_value_3 = "";

// chrome.storage.sync.set(title_value);
// chrome.storage.sync.set(notes_value);

//Set the variable initialiy to avoid bugs.
// chrome.storage.sync.set(title_value_1);
// chrome.storage.sync.set(title_value_2);
// chrome.storage.sync.set(title_value_3);

// chrome.storage.sync.set(notes_value_1);
// chrome.storage.sync.set(notes_value_2);
// chrome.storage.sync.set(notes_value_3);


//Get all input buttons.
let title_box = document.getElementById("title_input");
let notes_box = document.getElementById("notes_input");

let save_button1 = document.getElementById("save1");
let save_button2 = document.getElementById("save2");
let save_button3 = document.getElementById("save3");

let load_button1 = document.getElementById("load1");
let load_button2 = document.getElementById("load2");
let load_button3 = document.getElementById("load3");


// let save_buttons = document.getElementsByClassName();

save_button1.addEventListener("click", async() =>{
  title_value_1 = title_box.value;
  notes_value_1 = notes_box.value;
  chrome.storage.sync.set({title_value_1});
  chrome.storage.sync.set({notes_value_1});
  }
);

load_button1.addEventListener("click", async() => {
  chrome.storage.sync.get("title_value_1", ({ title_value_1 }) => {
    title_box.value = title_value_1;
  });
  chrome.storage.sync.get("notes_value_1", ({ notes_value_1 }) => {
    notes_box.value = notes_value_1;
  });
});


//---------------BUTTON 2-----------------------------
save_button2.addEventListener("click", async() =>{
  title_value_2 = title_box.value;
  notes_value_2 = notes_box.value;
  chrome.storage.sync.set({title_value_2});
  chrome.storage.sync.set({notes_value_2});
  }
);

load_button2.addEventListener("click", async() => {
  chrome.storage.sync.get("title_value_2", ({ title_value_2 }) => {
    title_box.value = title_value_2;
  });
  chrome.storage.sync.get("notes_value_2", ({ notes_value_2 }) => {
    notes_box.value = notes_value_2;
  });
});

//---------------BUTTON 3-----------------------------
save_button3.addEventListener("click", async() =>{
  title_value_3 = title_box.value;
  notes_value_3 = notes_box.value;
  chrome.storage.sync.set({title_value_3});
  chrome.storage.sync.set({notes_value_3});
  }
);

load_button3.addEventListener("click", async() => {
  chrome.storage.sync.get("title_value_3", ({ title_value_3 }) => {
    title_box.value = title_value_3;
  });
  chrome.storage.sync.get("notes_value_3", ({ notes_value_3 }) => {
    notes_box.value = notes_value_3;
  });
});


// // Initialize butotn with users's prefered color
// // let changeColor = document.getElementById("changeColor");

// let value_ = "";
// chrome.storage.sync.set({value_});

// // Represents the textBox.
// let input_ = document.getElementById("notes_input");
// // input_.value += "FWIOEJFIOWEJFOIJWEIOFJWEOIJFOWIEJFOIWEIJO";
// // console.log(input_.value);

// /**
//  * Stores the value whenever the textbox is clicked.
//  */
// input_.addEventListener("click", async() =>
// { 
//   value_ = input_.value;
//   chrome.storage.sync.set({value_});
// }
// );

// /**
//  * retreives the value from the chrome storage.
//  */
// chrome.storage.sync.get("value_", ({ value_ }) => {
//   //To avoid bug for undefined?
//   // if (value_ == undefined){
//   //   value_ = '';
//   // }
//   // else if (value_ == null){
//   //   value_ = '';
//   // }
//   input_.value = value_;
// });



// // The color stuff..
// chrome.storage.sync.get("color", ({ color }) => {
//   //Set the color of the button, ( don't effect the function tho. )
//   // console.log("Hello World");
//   changeColor.style.backgroundColor = color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   // console.log("Hello World");

//     //Function calls.
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });



// // The body of this function will be execuetd as a content script inside the
// // current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     //Incharge of the actual thing that controls the background of the chrome page.
//     document.body.style.backgroundColor = color;
//     // console.log("Hello World");
//   });
// }
