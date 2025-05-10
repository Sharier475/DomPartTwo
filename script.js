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
{
    let div = document.querySelector("div");
    console.log(div.setAttribute("name", "JavaScriptDiv"));

    let para = document.querySelector("p");
    console.log(para.setAttribute("class", "JavaScriptDiv"));

}



//Style
{
    // let div = document.querySelector("div");
    // div.style.backgroundColor = "red";
    // div.innerText = "Hello!";
    // div.style.fontSize = "20px";
}

//Create Elements / Add Elements
{
    let newBtn = document.createElement("button");
    newBtn.innerText = "Click Me!";
    console.log(newBtn);

    let div = document.querySelector("div");
    div.append(newBtn); // (adds at the last of the node.)
    // div.prepend(newBtn);  //(adds at the start of the node.)
    // div.before(newBtn);  // (adds before the node.)
    // div.after(newBtn);   // (adds after the node.)


    let newHeading = document.createElement("h1");
    newHeading.innerHTML = "<i> Sharier Islam </i>";

    document.querySelector("body").prepend(newHeading);


    //Append Child

    // let newp = document.createElement("p");
    // let div1 = document.querySelector("#box");
    // div1.appendChild(newp);
// document.querySelector("#box").appendChild(document.createElement("p"));
let newp = document.createElement("p");
newp.innerText = "Hello";
document.querySelector("#box").appendChild(newp);
}

// Delete Element
{
    let para = document.querySelector("p");
    // para.remove();
    let removepara = document.querySelector("#para2");
    removepara.remove();
    // let removeItem = document.querySelector("h1");
    // removeItem.remove();

    //Remove Child

    //To remove a specified element when knowing its parent node:
     const parent = document.querySelector("#parent");
     const child = document.querySelector("#child");
    //  const remove = parent.removeChild(child);


     // To remove a specified element without having to specify its parent node:

     const node = document.querySelector("#child");
     if(node.parentNode){
        node.parentNode.removeChild(node);
     }

}