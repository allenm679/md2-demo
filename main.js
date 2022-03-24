//practicing arrays with ash journey
let backpack = [];

 backpack.push('pokeball');
 backpack.push('potion');
 backpack.push('pokedollars');

 // shift removes the first item in the array
 //pop removes the last item of the array
 //backpack.shift()
 
 // splice example below to remove pokeball

 backpack.splice(0,1);
 
let stone = 'water stone'
backpack.push(stone);

// backpack.pop to remove waterstone to evolve eevee into vaperon
backpack.pop();


// .length shows the number amount of whats in the array(in this case ash's backpack)
//console.log(backpack.length)

backpack.push('great ball', 'antidote', 'revive');

//this splice is gonna delete antidote and revive because this splice says delete at the index of 3 and remove 2 items
let satchel = backpack.splice(3, 2)

//this for loop is to list it in a more neat manner rather than in a array
//for(let i = 0; i< backpack.length; i++){
   // console.log(`This is the item at the index of ${i}:` , backpack[i]);
//}

//this for loop allows us to see just the first 2 items in our "backpack" or array
//for(let i = 0; i < 2; i++){
    //console.log(backpack[i])
//}

// if the amount of items ash has in his backpack is greater than 3 then it will hit the first for loop, but if it is <= 2 then it will hit the last for loop.
if(backpack.length > 2){
    for(let i = 0; i < 2; i++){
        console.log(backpack[i])
    }
} else {
    for(let i = 0; i< backpack.length; i++){
         console.log(`This is the item at the index of ${i}:` , backpack[i]);
     }
    
}



//console.log(satchel)
//console.log(backpack);

//------------------------------------------------------------------------------------------

