// .reduce() = reduce the elements of an array\
//              to asingle value

const prices = [5,30,30,29,15,20];
//with arrow function
const total = prices.reduce((acumulator, element)=>{
    return acumulator + element;
});


//without arrow function

const total2 =prices.reduce(sum);

function sum(acumulator, item){
    return acumulator + item;
}

console.log(prices);
console.log(total);
console.log(total2);

const grades = [75, 4, 50, 90, 80, 65, 95];

const maximun = grades.reduce((acumulator, item)=>{
    return Math.max(acumulator, item);
});

const maximun2 = grades.reduce(getMax);


function getMax(acumulator, item){
    return Math.max(acumulator, item);
}


console.log(grades);
console.log(maximun);
console.log(maximun2);

console.log(
    grades.reduce((acumulator, item) => {
        return Math.min(acumulator, item);
    })
);