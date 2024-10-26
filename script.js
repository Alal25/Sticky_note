// console.log("Ashish");

let btn = document.querySelector("#button");
let color = document.getElementById("color");
let textArea = document.getElementById("text_area");
let note_container = document.querySelector("#note_container")
let main = document.querySelector(".main")
let left = document.querySelector(".left_containor")
let rgt = document.querySelector(".rgt_containor")
let note = document.querySelector("#add_note")
let text_color = document.querySelector(".text_color")
// console.log(main);


// {Giving all style here}
main.style.display = "flex";
left.style.width = "50%"
left.style.height = "100vh"
rgt.style.width = "50%"
rgt.style.height = "100vh";
left.style.display = "flex"
left.style.justifyContent = "center"
left.style.flexDirection = "column"
left.style.alignItems = "center"
left.style.gap = "2rem"
// btn.style.width = "100px"
add_note.style.width = "15rem"
add_note.style.height = "3rem"
add_note.style.borderRadius = "30px"
main.style.backgroundColor = "#DBDBDB"
text_color.style.display = "flex"
text_color.style.alignItems = "center"
text_color.style.gap = "0.5rem"
rgt.style.textAlign = "center"
rgt.style.backgroundColor = "#fff"
textArea.style.padding = "10px"
note.style.backgroundColor = "#f55656"




function addnotes() {
    if(textArea.value === ""){
        alert("please enter some text")
    }
    let div = document.createElement("div");

    let p = document.createElement("p");
    p.innerText = textArea.value;

    let cross_button = document.createElement("button")
    cross_button.innerText = 'X';


    div.style.height = "150px"
    div.style.width = "150px"
    div.style.textAlign = "left"
    div.style.display = "flex"
    div.style.gap = "1rem"
    div.style.alignItems = "start";
    div.style.justifyContent = "space-between";
    div.style.backgroundColor = color.value;

    
    note_container.style.display = "flex"
    note_container.style.gap = "0.5rem"
    note_container.style.flexWrap = "wrap"
    // cross_button.style.height = "20px"
    // cross_button.style.position = "absolute"
    // div.style.top = "50px"
    // div.style.right = "15px"
    
    // console.log(textArea.value,color.value);
    
    div.appendChild(p);
    div.appendChild(cross_button)
    note_container.appendChild(div);
    textArea.value = "";

    cross_button.addEventListener("click", function(){
        console.log(cross_button);
        div.style.display = "none"
    });
}

btn.addEventListener('click',addnotes);


