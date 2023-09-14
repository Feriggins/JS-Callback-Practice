const inventory = newInventory()//Makes an object
move(inventory).to(0, 0)//Calls move function and passes inventory - the 0,0 are arguments, data


const character = newImage('assets/green-character/static.gif')//Creates a constant varaible that is an image object


//move(character).withArrowKeys(100, 250)
let direction = null;//Creates a direction varaible with the value of null or empty
 
 
function handleDirectionChange(direction)//Line 12 creates a function which is a container for code where the container can be used over and over
{
    //Direction is a parameter
    //Series of if statements that  check the value of directon and set the image 
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)//function calls


move(character).withArrowKeys(100, 250, handleDirectionChange)//function calls

let x = 100;//Creates variables that are of integer data type
let y = 250; //Creates variables that are of integer data type
function moveWithArrowKeys(left, bottom, callback){//function creation that has three parameters - functions are usally named after the purpose of the function
    let direction = null;
    let x = left;
    let y = bottom; 
}
function moveCharacter(){ //SetInterval is a built-in function that will run code every number of defined seconds
    if(direction === 'west'){
        x = x - 1//x = x - 1 means to take the current value of x and subtract it by 1 and store the result in the variable of x
    }
    if(direction === 'north'){
        y = y + 1//y = y + 1 means to take the current value of y and add it by 1 and store the result in the variable of y
        //y++
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}
setInterval(moveCharacter, 1)

document.addEventListener('keydown', function(e){//An event listener is a function that is called for a set event
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
    //callback(direction) - My code threw an error because it did not understand what callback was. I fixed it by creating the handleDirectionChange function
    handleDirectionChange(direction)//dandleDirectionChange is the callback function that is being used with the event listener
})

document.addEventListener('keyup', function(e){//The "keyup" is the event that the listener is waiting to happen before it runs the code inside
    console.log("e",e)
    direction = null
    //callback()
    handleDirectionChange(direction)
})
 

//Single line comment
/*
Block comment
*/
/*The job of a function is to stop redundant use of code or using code over and over again. Instead of retyping code, we can type the code once in a function
and reuse the function.*/
/*
Functions are similar to an item on a menu because the item can be ordered as many times as needed/wanted
*/
//The { } are called currly barces. They state the body of code that belongs to a function
function move(element) {//Move is another function 
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom){
       
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        
}
                              

move(character).to(100, 250)


move(newImage('assets/tree.png')).withArrowKeys(200, 450)


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)