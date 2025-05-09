//Dom Manupulation (Attributes) 
// GET
{
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);


let para = document.querySelector("p");
console.log(para.getAttribute("class"));
}



// SET/Edit

let div = document.querySelector("div");
console.log(div.setAttribute("name","JavaScriptDiv"));

let para = document.querySelector("p");
console.log(para.setAttribute("class","JavaScriptDiv"));


//Style

div.style.backgroundColor = "red";
div.innerText = "Hello!";
div.style.fontSize = "20px";