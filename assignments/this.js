/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding means that if this is not referred to anything, it defaults to window object. 
* 2. Implicit binding is when function is called by the word left to the dot.
* 3. New binding is when function is invoked in with a new key words to a new objects constructed
* 4. Explicit binding is when call, apply, or bind is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const windowbind = function(){
    console.log(this.whatever);
};

windowbind();

// Principle 2

// code example for Implicit Binding

let implicit = {
    name: "John",
    says: function(){
        console.log(`Hi ${this.name}`)
        }
}

implicit.says();

// Principle 3

// code example for New Binding

function Newthings(binding){
    this.example = binding;
}

let newBinding = new Newthings('New Binding 1')

console.log(newBinding.example)

// Principle 4

// code example for Explicit Binding

// call
function food(){
    console.log(this.main)
}

let myFood = {
    main: "burger",
    side: "fries"
}

food.call(myFood);

// apply

function foodf(a,b,c){
    console.log(this.main, a, b, c)
}

let myFood2 = {
    main: "burger",
    side: "fries"
}

let array1 =["drinks", "napkins", "straws"];

foodf.apply(myFood2,array1);

// bind

function city(){
     console.log(this.name);
}

let obj = {
    name: "dallas"
}

bigCity = city.bind(obj);

bigCity();

