var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})


let datecountdown = new Date("March 22, 2025 07:45:00").getTime()           
let x = setInterval(function(){
  let mtn = new Date().getTime();
  let tpsrestant = datecountdown - mtn;
  let jours = Math.floor(tpsrestant / (1000*60*60*24));
  let heures = Math.floor(tpsrestant % (1000*60*60*24) / (1000*60*60));
  let minutes = Math.floor(tpsrestant % (1000*60*60) / (1000*60));
  let secondes = Math.floor(tpsrestant % (1000*60) / (1000));

  document.querySelector(".countdown").innerHTML =`
      <div class="boite">
          <span class="valeur">${jours}</span>
          <span class="unite">jours</span>
      </div>
      <div class="boite">
          <span class="valeur">${heures}</span>
          <span class="unite">heures</span>
      </div>                    
      <div class="boite">
          <span class="valeur">${minutes}</span>
          <span class="unite">minutes</span>
      </div>                    
      <div class="boite">
          <span class="valeur">${secondes}</span>
          <span class="unite">secondes</span>
      </div`
  ;
  if (tpsrestant < 1){
      clearInterval(x);
      jours, heures, minutes, secondes= 0
  }
}, 1000);



//CHART




document.addEventListener('DOMContentLoaded', function () {
  // Input data
  const data = [
    { name: 'Conception', percentage: 41, value: 7, color: '#601010' },
    { name: 'Programmation', percentage: 35, value: 6, color: '#A03030' },
    { name: 'Gestion', percentage: 12, value: 2, color: '#D05050' },
    { name: 'Design', percentage: 12, value: 2, color: '#F05050' },
  ];

  // Retrieve the SVG element
  const svg = document.querySelector('#teamChart');
  
  // Set viewBox to ensure nothing gets cut off
  svg.setAttribute('viewBox', '-100 -10 600 450');
  
  // Set dimensions
  const width = 400;
  const height = 400;
  const radius = Math.min(width, height) / 2 - 20; // Reduce radius slightly to prevent clipping
  const strokeWidth = 10;
  const padAngle = 0.12;

  // Create a group for the chart
  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  group.setAttribute('transform', `translate(${width / 2} ${height / 2})`);
  svg.appendChild(group);

  // Default circle
  const defaultCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  defaultCircle.setAttribute('cx', 0);
  defaultCircle.setAttribute('cy', 0);
  defaultCircle.setAttribute('r', radius);
  defaultCircle.setAttribute('transform', 'rotate(-90)');
  defaultCircle.setAttribute('fill', 'none');
  defaultCircle.setAttribute('stroke', 'hsla(0, 0%, 0%, 0.08)');
  defaultCircle.setAttribute('stroke-width', strokeWidth);
  defaultCircle.setAttribute('stroke-linecap', 'round');
  defaultCircle.setAttribute('stroke-dasharray', radius * Math.PI * 2);
  defaultCircle.setAttribute('stroke-dashoffset', radius * Math.PI * 2);
  group.appendChild(defaultCircle);

  // Compute pie data
  const pieData = computePieData(data, padAngle);

  // Create arcs for each data point
  pieData.forEach((d, i) => {
    const arcGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.appendChild(arcGroup);
    
    const arcPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const pathData = describeArc(0, 0, radius, d.startAngle, d.endAngle);
    
    arcPath.setAttribute('d', pathData);
    arcPath.setAttribute('fill', 'none');
    arcPath.setAttribute('stroke', d.data.color);
    arcPath.setAttribute('stroke-width', strokeWidth * 0.8);
    arcPath.setAttribute('stroke-linecap', 'round');
    arcPath.setAttribute('stroke-linejoin', 'round');
    
    // Calculate the actual path length immediately
    const pathLength = arcPath.getTotalLength();
    arcPath.setAttribute('stroke-dasharray', pathLength);
    arcPath.setAttribute('stroke-dashoffset', pathLength);
    
    arcGroup.appendChild(arcPath);

    // Calculate the centroid of the arc
    const [x, y] = getArcCentroid(d.startAngle, d.endAngle, radius);
    
    // Add connecting lines
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const offset = x > 0 ? 20 : -20;
    
    line.setAttribute('x1', 0);
    line.setAttribute('y1', 0);
    line.setAttribute('x2', x > 0 ? '25' : '-25');
    line.setAttribute('y2', 0);
    line.setAttribute('stroke', d.data.color);
    line.setAttribute('stroke-width', 1.5);
    line.setAttribute('transform', `translate(${x + offset} ${y})`);
    line.setAttribute('stroke-dasharray', 25);
    line.setAttribute('stroke-dashoffset', 25);
    line.style.opacity = 0; // Start with opacity 0
    arcGroup.appendChild(line);

    // Add text labels
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', 0);
    text.setAttribute('y', 0);
    text.setAttribute('font-size', 15);
    text.setAttribute('text-anchor', x > 0 ? 'start' : 'end');
    
    const textOffset = x > 0 ? 50 : -50;
    text.setAttribute('transform', `translate(${x + textOffset} ${y})`);
    
    text.innerHTML = `<tspan x="0">${d.data.name}</tspan><tspan x="0" dy="10" font-size="9">${d.data.percentage}% / ${d.data.value} personnes</tspan>`;
    text.style.opacity = 0;
    text.style.visibility = 'hidden';
    arcGroup.appendChild(text);
  });

  // Animate the default circle
  defaultCircle.style.transition = 'stroke-dashoffset 2s ease-out';
  
  // Slight delay before starting animations
  setTimeout(() => {
    defaultCircle.setAttribute('stroke-dashoffset', '0');
    
    // When the circle animation completes
    defaultCircle.addEventListener('transitionend', () => {
      // Animate arcs sequentially
      const arcGroups = document.querySelectorAll('svg > g > g');
      
      arcGroups.forEach((arcGroup, i) => {
        const path = arcGroup.querySelector('path');
        const line = arcGroup.querySelector('line');
        const text = arcGroup.querySelector('text');
        
        const duration = 1000; // 1 second per arc
        const delay = i * duration;
        
        // Animate arc
        path.style.transition = `stroke-dashoffset ${duration}ms ease-in-out ${delay}ms`;
        setTimeout(() => {
          path.setAttribute('stroke-dashoffset', 0);
        }, 10);
        
        // Animate line after arc is halfway done
        line.style.transition = `stroke-dashoffset ${duration/2}ms ease-in-out ${delay + duration/2}ms, opacity ${duration/4}ms ease-in-out ${delay + duration/2}ms`;
        setTimeout(() => {
          line.style.opacity = 1;
          line.setAttribute('stroke-dashoffset', 0);
        }, 10);
        
        // Animate text after line is done
        text.style.transition = `opacity ${duration/3}ms ease-in-out ${delay + duration*0.75}ms, visibility 0s linear ${delay + duration*0.75}ms`;
        setTimeout(() => {
          text.style.visibility = 'visible';
          text.style.opacity = 1;
        }, 10);
      });
    });
  }, 200);

  // Function to compute pie data (similar to D3's pie function)
  function computePieData(data, padAngle) {
    const total = data.reduce((sum, d) => sum + d.value, 0);
    let startAngle = -Math.PI / 2; // Start from the top (-90 degrees)
    
    return data.map(d => {
      const percentage = d.value / total;
      const angle = percentage * (Math.PI * 2);
      const endAngle = startAngle + angle - padAngle;
      
      const arc = {
        data: d,
        startAngle: startAngle,
        endAngle: endAngle,
        value: d.value
      };
      
      startAngle = endAngle + padAngle;
      return arc;
    });
  }

  // Function to describe an arc path
  function describeArc(x, y, radius, startAngle, endAngle) {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= Math.PI ? 0 : 1;
    
    // Using simple arc path without the closing lines to the center
    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
  }

  // Function to convert polar to cartesian coordinates
  function polarToCartesian(centerX, centerY, radius, angleInRadians) {
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  // Function to get the centroid of an arc
  function getArcCentroid(startAngle, endAngle, radius) {
    const midAngle = (startAngle + endAngle) / 2;
    return [radius * Math.cos(midAngle), radius * Math.sin(midAngle)];
  }
});