const input = document.querySelector(".inputBox input");
const task  = document.querySelector(".TaskContainer");

function addTask(){
    if(input.value ==""){
        alert("Please enter a task to add");
    }
    else{
        let li = document.createElement("p");
        li.innerHTML = input.value;
        task.appendChild(li);
        const del = document.createElement("span");
        del.innerHTML = "\u00d7";
        li.appendChild(del);
    }
    input.value = "";
    saveData();
}

task.addEventListener("click",(det)=>{
//  console.log(det.target)
if(det.target.tagName === "P"){
    det.target.classList.toggle("checked");
    console.log("ho gaya")
    saveData();
}
else if(det.target.tagName === "SPAN"){
    det.target.parentElement.remove();
    saveData();
}
},false);

function saveData(){
    localStorage.setItem("data", task.innerHTML);
}
function showData(){
    task.innerHTML = localStorage.getItem("data");
}
showData();