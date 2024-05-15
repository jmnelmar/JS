// class = (ES6 feature) provides a more structured and cleaner way to
//          work with objects compared to traditional constructor functions
//          export. static keyword, encapsulation, inheritance


class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    

    displayProduct = function(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    };

    calculateTotal = function(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const produc1 = new Product('Shirt',19.99);
const produc2 = new Product('Pants',22.50);
const produc3 = new Product('Underwear',100.00);

produc1.displayProduct();
console.log(produc1.calculateTotal(salesTax).toFixed(2));

produc2.displayProduct();
console.log(produc2.calculateTotal(salesTax).toFixed(2));

produc3.displayProduct();
console.log(produc3.calculateTotal(salesTax).toFixed(2));

