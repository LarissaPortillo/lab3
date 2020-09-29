/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

d3.csv('https://cdn.glitch.com/13954448-9de1-4018-9e2a-9b65a98670e1%2Fcities.csv?v=1601412428740').then(data=>{
	console.log('cities', data);
})

