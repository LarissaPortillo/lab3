d3.csv('https://cdn.glitch.com/13954448-9de1-4018-9e2a-9b65a98670e1%2Fbuildings.csv?v=1601524337994', d3.autoType)
.then(build=>{
build= build.sort((a,b)=> a.height_ft - b.height_ft);
console.log('buildings', build);

const w = 500;
const h = 500;
const svg = d3.select('.building-chart')
    .append('svg')
    .attr('width', w)
    .attr('height', h);



svg.selectAll('rect')
    .data(build)
    .enter()
    .append('rect')
    .attr("class","bar")
    .attr('x',192)
    .attr('y', (d,i)=>(i+1)*40)
    .attr('height', 30)
    .attr('width', (d)=>d.height_px)
    .attr("fill", 'teal')
    .on('click',(event,d)=>{
        d3.select('.building-name').text(d.building);
        d3.select('.height').text(d.height_ft);
        d3.select('.city').text(d.city);
        d3.select('.year').text(d.completed);
        d3.select('.floors').text(d.floors);
        d3.select('.image').attr('src',(d)=>{
          if(d.image=='1.jpg'){
            return https://cdn.glitch.com/13954448-9de1-4018-9e2a-9b65a98670e1%2F1.jpg?v=1601524359483;
          }
        });
        
    });

svg.selectAll('text.title')
        .data(build)
        .enter()
        .append('text')
        .attr('class','title')
        .attr('x',188)
        .attr('y', (d,i)=>(i+1)*40)
        .attr('dy',20)
        .text((d)=>d.building )
        .attr('text-anchor','end')
        .attr('font-size', 12);

svg.selectAll('text.value')
    .data(build)
    .enter()
    .append('text')
    .attr('class','value')
    .attr('x',(d)=>{return (d.height_px+192);})
    .attr('y', (d,i)=>(i+1)*40)
    .attr('dy',20)
    .text((d)=>{return d.height_ft+'ft';})
    .attr('text-anchor','start')
    .attr('font-size', 11);
});