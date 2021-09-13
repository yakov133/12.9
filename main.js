//targil 1
// let names = ["aschale","yakov","yossi","noy","sami"];
// console.log(names.sort());

//targil 2
// let cities = ["hifa","tel-aviv","lod","jerusalem"];
// console.log(cities.sort());

//targil 3
// let  numbers = [3,1,9,4,2,7];
// console.log(numbers.sort());

//targil 4-a
// let  numbers = [30,1,13,40,2,7,51,23];
// console.log(numbers.sort( (a,b)=> {
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// }));

//targil 4-b
// let  numbers = [30,1,13,40,2,7,51,23];
// console.log(numbers.sort((a,b)=> b - a));

//targil 5
// let product = [
//   {
//     name: "iphone",
//     price: 3000,
//   },
//   {
//     name: "ipad",
//     price: 1500,
//   },
//   {
//     name:"airpod-2",
//     price:600
//    },
//    {
//     name:"macbookpro",
//     price:14500
//    },
//    {
//     name:"apple-TV",
//     price:1000
//    },
//    {
//     name:"airpod-1",
//     price:800
//    },
// ];
//5-a
// console.log(product.sort((elm1,elm2) => { return elm1.price - elm2.price}));
//5-b
// console.log(product.sort((elm1,elm2) => elm1.name > elm2.name ));

//****** Revers ******
//targil 6
// let rev = ["f","e","d","c","b","a"];
// console.log(rev.reverse());

//targil 7
// let revNum = [5,4,3,2,1];
// console.log(revNum.reverse());

// targil 8
// let mixedArr = ['pinappl','banana','apple','grap','strawberry'];
// console.log(mixedArr.sort().reverse());

//****** Join ******
// let names = ["aschale","yakov","yossi","noy","sami"];
//targil 1
// console.log(names.join(""));
//targil 2
// console.log(names.join(" "));

let cars = [
    {
        name:"skuda",
        year:"1992",
        price:10000,
    },
    {
        name:"tesla",
        year:"2021",
        price:150000,
    },
    {
        name:"opela",
        year:"2020",
        price:120000,
    },
    {
        name:"ford",
        year:"2019",
        price:60000,
    },
];
//targil a
// console.log(cars.sort((a,b) => a.price - b.price));

//targil b
let descending = document.getElementById("descending"); //יורד 
let ascending = document.getElementById("ascending"); // עולה
let alphbet = document.getElementById("alphbet");
let date = document.getElementById("date")
let showDiv = document.getElementById("show");
descending.addEventListener("click",()=>{
    cars.sort((a,b) =>  b.price - a.price);
    showDiv.innerHTML = `<p style="color:purple">Descending order</p>`;
    print()
})
ascending.addEventListener("click",()=>{
    cars.sort((a,b) =>  a.price - b.price);
    showDiv.innerHTML = `<p style="color:coral">Ascending order</p>`;
    print()
})
function print(){
    for(let item of cars){
        showDiv.innerHTML += `
        <p style="color:blue; font-size:18px">Modal: ${item.name}</p>
        <p style="color:red">Year: ${item.year}</p>
        <p >Price: ${item.price}</p>
        <br>`
    };
}

// targil c
console.log("Order by Year");
for(let item of cars.sort((a,b) => a.year < b.year ? -1 : a.year > b.year ? 1 : 0)){
    console.log(item);
};

//targil d-1
alphbet.addEventListener("click",()=>{
    showDiv.innerHTML = `<p>Order by Name</p>`;
    for(let item of cars.sort( (a,b)=> (a.name < b.name)? -1 : (a.name > b.name)? 1 : 0 )){
        showDiv.innerHTML += `
        <p style="color:blue; font-size:18px">Modal: ${item.name}</p>
        <p style="color:red">Year: ${item.year}</p>
        <p >Price: ${item.price}</p>
        <br>`
    };  
})

//targil d-2
date.addEventListener("click",()=>{
    showDiv.innerHTML = `<p>Order by Year</p>`;
    for(let item of cars.sort((a,b) => a.year - b.year)){
        showDiv.innerHTML += `
        <p style="color:blue; font-size:18px">Modal: ${item.name}</p>
        <p style="color:red">Year: ${item.year}</p>
        <p >Price: ${item.price}</p>
        <br>`
    };    
})
