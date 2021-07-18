let num = 0
let saveEl = document.getElementById("save-el");
function increment(){
    num = num + 1
    document.getElementById("count-el").textContent = num;
}



function save(){
    console.log(num)
    let numEntire = " " + num + " - ";
    saveEl.innerText += numEntire;
    num = 0;
    document.getElementById("count-el").textContent = 0;
}


//JavaScript Programming - Full Course

//BUILD A PASSENGER COUNTER APP
//#1 - PRINTING STUFF ON THE SCREEN
    //let phrase = 'The only way to learn to code is to write a lot of code!'
    //alert(phrase);
    //console.log(phrase);

//#2 - BASIC MATHEMATICAL OPERATIONS
    //+, -, /, *

    //let myAge = 18;
    //let humanDogRatio = 7;
    //let myDogAge = myAge * humanDogRatio;
    //console.log(myDogAge)

//#3 - REASSINGNING AND INCREMENTING
    //let count = 5;
    //count = 30; -> reassingning 

    //let count2 = 2;
    //count2 = count2 + 15 -> incrementing
    
    //let bonusPoints = 50;
    //bonusPoints = bonusPoints + 50
    //bonusPoints = bonusPoints - 75
    //bonusPoints = bonusPoints + 45
    //console.log(bonusPoints)

//#4 - ADDING A BUTTON
    //<button id="increment-btn">INCREMENT</button>

//#5 - The onclick event listener
    //<button id="increment-btn" onclick="increment()">INCREMENT</button>
    //function increment(){
    //  console.log('The button was clicked')
    //}

//#6 USING FUNCTIONS TO WRITE LESS CODE
    //function countBack(){
        //console.log(5);
        //console.log(4);
        //console.log(3);
        //console.log(2);
        //console.log(1);
    //}

    //console.log('Setting up to the race')
    //countBack()
    //console.log('GO!')
    //console.log('Players are running the race')
    //console.log('Race is finished!')
    //console.log()
    //console.log('Ready to another race')
    //countBack()
    //console.log('GO!')

//#7 - WRITE YOU FIRST FUNCTION
    //function number42(){
        //console.log(42)
    //}
    //number42()

//#8 - WRITE A FUNCTION THAT LOGS THE SUM
    //let lap1 = 34;
    //let lap2 = 33;
    //let lap3 = 36;

    //function sumLaps(){
        //let sum = lap1+lap2+lap3; --> I cannot use a variable that was created inside a function outside of the function.
        //console.log(sum)
    //}
    //sumLaps()

//#9 - WRITE A FUNCTION THAT INCREMENTS
    //let lapsCompleted = 0;
    //function increaseLap(){
        //lapsCompleted = lapsCompleted + 1
    //}
    //increaseLap()
    //increaseLap()
    //increaseLap()
    //console.log(lapsCompleted)

//#10 - INCREMENT ON CLICKS
//let num = 1
//document.getElementById("count-el").innerText = 0;
//function increment(){
    //console.log('The button was clicked')
    //document.getElementById("count-el").innerText = 0 + num;
    //num = num + 1
//}

//#11 - DOCUMENT OBJECT MODEL
//DOM is the way you use JavaScript to modify a website

//#12 - CREATE THE SAVE BUTTON
//<button id="save-btn" onclick="save()">SAVE</button>

//#13 - CHALLENGES WITH STRINGS
//let name = 'Felipe';
//let greeting = 'Hi, my name is '; 
//let myGreeting = greeting + name;
//console.log(myGreeting)

//#14 - 







// Comment
//function square(num) {
    //return num * 2
//console.log(square(6))
//Variáveis regras: Não pode começar com números e nem ter espaços/caracteres especiais, tem que ter significado, não pode ser palavra reservada, 

