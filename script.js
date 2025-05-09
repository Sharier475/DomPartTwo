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
}
