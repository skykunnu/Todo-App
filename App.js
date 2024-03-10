const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const btn=document.getElementById("btn");


btn.addEventListener("click",()=>{
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li"); /* It is creating an element name li*/
        li.innerHTML=inputBox.value; /* So whatever be the input value, it will be added in the innerhtml of li*/
        listContainer.appendChild(li); /* So the li created above will be added to listContainer */
         let span=document.createElement("span");
         span.innerHTML="\u00d7"; /* this code is of cross sign and later it is append with li.*/
         li.appendChild(span);
    }
    inputBox.value=" ";
    savedata();
})


listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){// The e.target.tagName, returns the tagName of clicked element in UpperCase that's why (LI).
        e.target.classList.toggle("checked"); // toggle is the method provided by classList to toggles the presence of specified class. if the class is present-removed and if not then-added.
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove(); // here parentElement because span is a child element and li is the parentElement to span. 
        savedata();
    }

},false); // false(default) because our event is performed in event bubbling phase (Propogates from child element to parent element).


// Below we have created local storage. 
function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//To display data again after closing the website
function showdata(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showdata();













