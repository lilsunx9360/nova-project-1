function showSlidbar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex';
  sidebar.style.transition = '1s';
}
function hidemenu(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none';
  sidebar.style.transition = '1s';
}

const Homecls = document.getElementById('Home-cls');
const Homecls1 = document.getElementById('Home-cls1');
const Homecls2 = document.getElementById('Home-cls2');
const Homecls3 = document.getElementById('Home-cls3');
const sidebar = document.querySelector('.sidebar')
Homecls.addEventListener('click',() =>{sidebar.style.display = 'none'})
Homecls1.addEventListener('click',() =>{sidebar.style.display = 'none'})
Homecls2.addEventListener('click',() =>{sidebar.style.display = 'none'})
Homecls3.addEventListener('click',() =>{sidebar.style.display = 'none'})


const box = document.querySelector('#Project');
const About= document.querySelector('.container1')
About.addEventListener('mouseover', () => {
  box .style.backgroundColor = '#1f1f1f';
});
About.addEventListener('mouseout', () => {
  box .style.backgroundColor = 'initial'; // Reset to initial color
});

const familior = document.querySelector('#familior');
const content= document.querySelector('.content');
content.addEventListener('mouseover', () => {
  familior.style.backgroundColor = '#1f1f1f';
});
content.addEventListener('mouseout', () => {
  familior .style.backgroundColor = 'initial'; // Reset to initial color
});



