const div = document.createElement('div');
div.style.backgroundColor = 'red';
div.classList.add('center');
div.id = 'div-id';

const img = document.createElement('img');
img.src = '../computer.png';
img.classList.add('center');
div.append(img);
document.body.append(div);

const h1 = document.createElement('h1');
h1.title = 'Hi everyone';
h1.textContent = 'Hi everyone';
document.body.append(h1);


const p = document.createElement('p');
const span = document.createElement('span');
const strong = document.createElement('strong');
strong.textContent = 'This is a very strong text';
span.append(strong);
p.append(span);
p.style.backgroundColor = 'red';
p.style.color = 'white';
document.body.append(p);

const divWithSpans = document.createElement('div');
const span1 = document.createElement('span');
span1.id = 'span-1';
span1.textContent = 'span tag';
span1.style.color = 'red';

const span2 = document.createElement('span');
span2.id = 'span-2';
span2.textContent = 'span tag';

const span3 = document.createElement('span');
span3.id = 'span-3';
span3.textContent = 'span tag';
span3.style.color = 'red';

divWithSpans.append(span1, span2, span3);
document.body.append(divWithSpans);
document.getElementById('span-2').remove();