// todo app
let todo = [];

let req = prompt("Please enter Your Request");

console.log(req);

while(true){
    // quit 
    if(req == "quit"){
    console.log("you quit the app");
    break;
    }
    if(req == "list"){
        console.log("________________________________________________");
        for(let i = 0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("________________________________________________")
    } else if(req == "add"){
        task = prompt("enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }else if (req == "delete"){
        let indx = prompt("enter the index you want to remove");
        todo.splice(indx,1);
        console.log("task removed");
    }else{
        console.log("wrong request")
    }
    req = prompt("Please enter Your Request");

    

}
