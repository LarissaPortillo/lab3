/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


d3.csv('https://cdn.glitch.com/13954448-9de1-4018-9e2a-9b65a98670e1%2Fcities.csv?v=1601412428740', d3.autoType)
    .then(data=>{
    data = data.filter(d=>d.eu == true);
    console.log('cities', data);

    d3.select('.city-count').text('28 cities');


    const width = 700;
    const height = 550;
    const svg = d3.select('.population-plot')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
  
   
    svg.selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', (d)=> d.x)
            .attr('cy', (d)=>d.y)
            .attr('r', (d)=>{ 
                if (d.population<1000000){
                    return 4;
                }
                else{
                    return 8 ; 
                }
            } )
            .attr('fill', 'skyblue')
           //.on('mouseover', tip.show)
           //.on('mouseout'.tip.hide);
           // .attr('opacity', d=>d.population/extent[1]);
   
    svg.selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .attr('x',(d)=>d.x )
            .attr('y',(d)=>d.y )
            .text((d)=>{
                if(d.population >= 1000000){
                    return(d.city);
                }
            })
            //.attr('dx',10)
            .attr('dy', 3)

            .attr('font-size', 10)
            .attr('text-anchor', 'middle') ;
 });




  
                              