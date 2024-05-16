/**
 *  Promise =   An object that manages asynchronous operations.
 *              wrap a promise object around {asynchronous code}
 *              "I promise to return a value"
 *              PENDING -> RESOLVED or REJECTED
 *              new Promise((resolve. reject) => {asynchronous code})
 * 
 * DO THESE CHORES IN ORDER
 * 
 *  1. WALK THE DOG
 *  2. CLEAN THE KITCHEN
 *  3. TAKE OUT THE TRASH
 */

function walkDog(callback){
    setTimeout(() => {
        console.log("You walk the dog");
        callback();
    }, 1500);
}

function cleanKitchen(callback){
    setTimeout(() => {
        console.log("You clean the kitchen");
        callback();
    }, 2500);
}

function takeOutTrash(callback){
    setTimeout(() => {
        console.log("You take the trash");
        callback();
    }, 500);
}

//asynchronous with callback
walkDog(()=>{
    cleanKitchen(()=>{
        takeOutTrash(()=>{
            console.log("You finish all the chores")
        })
    })
})

// using promises

function wlakTheDog(){
   
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dogWalked = false;
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


wlakTheDog().then(value => {console.log(value); return cleanTheKitchen()})
            .then(value => {console.log(value); return takeOutTheTrash();})
            .then(value => {console.log(value); console.log("You finish all the chores 🎊")})
            .catch(error => console.error(error));
