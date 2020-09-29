/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

d3.csv('cities.csv').then(data=>{
	console.log('cities', data);
})

const data = await d3.csv("cities.csv");
console.log(data);