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
    .attr('x',250)
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
        var img=document.createElement('img');
        img.src=d.image;
        d3.select('.image').appendChild(img);
        
    });

svg.selectAll('text')
        .data(build)
        .enter()
        .append('text')
        .attr('x',245)
        .attr('y', (d,i)=>(i+1)*40)
        .attr('dy',20)
        .text((d)=>d.building )
        .attr('text-anchor','end')
        .attr('font-size', 15);

});