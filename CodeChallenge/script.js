//Print all numbers -100 - 0 

let namesArray = ["Shannon","Alice","Zoe","Neila","Grace","Bridie","Mandi"];

function findName(){
   name = parseInt(prompt("Please enter a number between 1 and 7 to find the name you are looking for."));
       if ((name > 0) || (name <= 8)){
        for(i=0; i<namesArray.length+1;i++){
        if(i == name){
        document.getElementById("nameis").innerHTML += " " + namesArray[i-1];
            alert(namesArray[i-1]);
        }
        }
    }else{
        alert("Invalid input. A number between 1 and 7 must be entered.");
    }
}

