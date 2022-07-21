//Declare variable for inputs
let title_value_1 = "";
let title_value_2 = "";
let title_value_3 = "";

let notes_value_1 = "";
let notes_value_2 = "";
let notes_value_3 = "";

//Get all input buttons.
let title_box = document.getElementById("title_input");
let notes_box = document.getElementById("notes_input");

let save_button1 = document.getElementById("save1");
let save_button2 = document.getElementById("save2");
let save_button3 = document.getElementById("save3");

let load_button1 = document.getElementById("load1");
let load_button2 = document.getElementById("load2");
let load_button3 = document.getElementById("load3");

// /**
//  * Set the button's color with the corresponding color.
//  */
// function setButtonColor(color1, color2, color3){
//   console.log("hit");
//   save_button1.style.backgroundColor = color1;
//   load_button1.style.backgroundColor = color1;
//   save_button2.style.backgroundColor = color2;
//   load_button2.style.backgroundColor = color2;
//   save_button3.style.backgroundColor = color3;
//   load_button3.style.backgroundColor = color3;
// }

/**
 * set the button's class name to default.
 */
function setClassName(){
  load_button1.className = "button";
  load_button2.className = "button";
  load_button3.className = "button";
  
  save_button1.className = "button";
  save_button2.className = "button";
  save_button3.className = "button";
}


// let save_buttons = document.getElementsByClassName();

save_button1.addEventListener("click", async() =>{
  title_value_1 = title_box.value;
  notes_value_1 = notes_box.value;
  chrome.storage.sync.set({title_value_1});
  chrome.storage.sync.set({notes_value_1});

  setClassName();
  save_button1.className = "select_button";
 // setButtonColor("red","white", "white");

  }
);

load_button1.addEventListener("click", async() => {
  chrome.storage.sync.get("title_value_1", ({ title_value_1 }) => {
    title_box.value = title_value_1;
  });
  chrome.storage.sync.get("notes_value_1", ({ notes_value_1 }) => {
    notes_box.value = notes_value_1;
  });
  setClassName();
  load_button1.className = "select_button";
  // setButtonColor("red","white", "white");
  

});


//---------------BUTTON 2-----------------------------
save_button2.addEventListener("click", async() =>{
  title_value_2 = title_box.value;
  notes_value_2 = notes_box.value;
  chrome.storage.sync.set({title_value_2});
  chrome.storage.sync.set({notes_value_2});
  setClassName();
  save_button2.className = "select_button";
  // setButtonColor("white","red", "white");
  }
  
);

load_button2.addEventListener("click", async() => {
  chrome.storage.sync.get("title_value_2", ({ title_value_2 }) => {
    title_box.value = title_value_2;
  });
  chrome.storage.sync.get("notes_value_2", ({ notes_value_2 }) => {
    notes_box.value = notes_value_2;
  });
  setClassName();
  load_button2.className = "select_button";
  //setButtonColor("white","red", "white");
});

//---------------BUTTON 3-----------------------------
save_button3.addEventListener("click", async() =>{
  title_value_3 = title_box.value;
  notes_value_3 = notes_box.value;
  chrome.storage.sync.set({title_value_3});
  chrome.storage.sync.set({notes_value_3});
  setClassName();
  save_button3.className = "select_button";
  //setButtonColor("white","white", "red");

  }
);

load_button3.addEventListener("click", async() => {
  chrome.storage.sync.get("title_value_3", ({ title_value_3 }) => {
    title_box.value = title_value_3;
  });
  chrome.storage.sync.get("notes_value_3", ({ notes_value_3 }) => {
    notes_box.value = notes_value_3;
  });
  setClassName();
  load_button3.className = "select_button";
  //setButtonColor("white","white", "red");
});