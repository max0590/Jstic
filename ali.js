var personal={
    firstname:"Ali",
    Lastname:"Makkawi",
    Age:23,
    Nationality:"Sudanese"
}
function display(){

    console.log(personal.firstname + '' + personal.Lastname);
    setTimeout(displayage,1000);

}

function displayage(){
console.log("Age: "+ personal.Age)
setTimeout(displayNationaltiy,1000);
}

function displayNationaltiy(){
    console.log("Nationality: "+ personal.Nationality)
    }

    display();

