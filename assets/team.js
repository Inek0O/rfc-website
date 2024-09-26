// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
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




const xValues = ["Conception", "Programmation", "Gestion", "Design", "Marketing"];
const yValues = [8, 6, 3, 3, 2];
const pieColors = [
  "rgba(200,0,0,1.0)",
  "rgba(150,0,0,1.0)",
  "rgba(100,0,0,1.0)",
  "rgba(75,0,0,1.0)",
  "rgba(25,0,0,1.0)",
];

new Chart("graphJs", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: pieColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Répartition et effectifs des pôles"
    }
  }
});