/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */



d3.csv('https://cdn.glitch.com/13954448-9de1-4018-9e2a-9b65a98670e1%2Fcities.csv?v=1601412428740', d3.autoType)
  .then(data=>{
  data = data.filter(d=>d.eu == true);
  console.log('cities', data);
  
  d3.select('.city-count').text();
                              
  svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', function (d,i){
    return i*100;
  });
  
});






  
                              