//while using arrow(=>), if the function written contains only one statement without a block("{}"), then
//it gets automatically returned without using return statement
//if a block is used as in below map array, we should use explicit return statements
//yep if there is only a single line written for that arrow function, no need to use block ({}) and return statement
//for more than one liners, we need a block and explicit return statements

// currying

const multiply = (a,b) => a*b;
const currymultiply = (a) => (b) => a*b;
const multiply6 = currmultiply(6);

//compose

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num+1;
const result = compose(add1, add1)(5);
console.log(result);

//array operations using map, filter and reduce

const arr = [1,2,3,4,5];

const arr2 = [];
arr.forEach(num => arr2.push(num*2));

console.log(arr2);

//doing the same above operation using map
//map -> always have to return something when using map

const maparray = arr.map(num => num*2);
console.log("map", maparray);

//filter

const filterarray = arr.filter(num => num > 2);
console.log("filter", filterarray);

//reduce -> looks like it doesn't returns an array like map and filter
//reduce takes two parameters accumulator/acc and array num
//in the end accumulator was initialized with value 0

const reduceArray = arr.reduce((acc, num) => {
	return acc + num;
}, 0);

console.log("reduce", reduceArray);

const obj = {
	user1: "kans";
	user2: "sams";
	user3: "mams";
}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
});

//Object.values gives only the values not preperty names
Object.values(obj).forEach(value => console.log(value));

//Object.entries gives both the preperty and value names in individual arrays and gives access to
//array stuff like map, reduce and filter
Object.entries(obj).forEach(entry => console.log(entry));

//extract only the values from the object with some modifications
const valarr = Object.entries(obj).map(entry => {
	return entry[1] + entry[0].replace('user', '');
})

class Animal{
	constructor(name, type, color){
		this.name=name;
		this.type=type;
		this.color=color;
	}
	sound(){
		console.log(`Moo I'm ${this.name} of type ${this.type} of color ${this.color}`);
	}
}

class Cow extends Animal{
	constructor(name, type, color){
		super(name, type, color);
	}
	cowSound(){
		console.log(`Hi I'm ${this.name} and i sound line mmaw`);
	}
}

const nums = [1,2,3,4,,,,,5];
nums.flat();
const newnums = nums.flatMap(num => num);

//we can flatten the nested arrays alos using flat(), if we want to flatten an array
//that is nested two levels then we have to use arr.flat(2)

// trimStart() -> removes leading spaces
// trimEnd() -> removes trailing spaces

//Object.fromEntries
const board = [['king',1],['queen',2],['knight',3]];

//create object out of the above entries
const obj = Object.fromEntries(board);

//arrays and strings are iterable in javascrpt
//we can use 'for of' on them
const nums1 = [1,2,3,4,5];
for(i of nums1){
	console.log(i);
}

//objects are enumberable in javascript
//we can use 'for in' to show the properties of objects
basket = {'apples':1, 'oranges':2, 'grapes':100};
for(i in basket){
	console.log(i);
}

//optional chaining operator '?'
const aj_pokemon = {
	pikachu : {
		type: 'mouse_pokemon',
		height: 0.4,
		weight: 6,
		power: 0
	}
}

let ifexists = aj_pokemon?.pikachu?.weight;

//nullish coalescent operator
let power = aj_pokemon?.pikachu?.power || "no power"; //returns no power
let power2 = aj_pokemon?.pikachu?.power ?? "no power"; // returns 0

//replace only updates the first instance of the given word in a string
//replaceAll updates all the instances of the given word in a string
let str = `I'm best of the best`;
let a = str.replace('best', 'worst');
let b = str.replaceAll('best', 'worst');

//setTimout -> it is a separate Web API call
console.log('1');
//timout set for 2 sec =  200 millisecond
setTimeout(() => {
	console.log('2');
}, 2000);
console.log('3');