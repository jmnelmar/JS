/**
 * Async/Await  
 *  Async   =   makes a function return a promise
 *  Await   =   makes an async function wait for a promise
 * 
 *              Allows you write asynchronous code in a synchronous manner
 *              Async doesn't have resolver or reject parameters
 *              Everything after Await is placed in event queue    
 */

function wlakTheDog(){
   
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog 🐕‍🦺" );
            }else{
                reject("You didn't walk the dog 😠");
            }
            
         }, 1500);
    });

}

function cleanTheKitchen(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You clean the kitchen 🧹");
            }else{
                reject("You didn't clean the kitchen!");
            }
            
        }, 2500);
    });
}

function takeOutTheTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const takedOut = true;
            if(takedOut){
                resolve("You take out the trash ♻️");
            }else{
                reject("You didn't take out the trash! 😠");
            }
            
        }, 500);
    });
}

async function doChores(){
    try{
        const walkDogResult = await wlakTheDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanTheKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTheTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores 🎊");
    }catch(error){
        console.error(error)
    }
    
}

doChores();