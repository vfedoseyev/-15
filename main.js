const homeWork = [
    'Vladimir',
    33,
    false,
    'Fedoseyev',
    11,
    true,
    'Alexey',
    28,
    true
]
for (let a = 0; a < homeWork.length; a++) {
    console.log(homeWork[a]);
}

for (let a = 0; a < homeWork.length; a++) {
    if (a % 2 === 0) {
        console.log(homeWork[a]);
    }
}

const fluffy = {
    'abyssinian': '😸',
    'american-bobtail': '🐱',
    'siam': '🙀',
    'bombay': '😼'
};

for (let cat in fluffy) {
    if (cat.length > 4) {
        console.log(fluffy[cat])
    }
}


const btn = document.getElementById('btn');
const content = document.getElementById('content');

const someObject = {};

btn.onclick = function () {
    const inputKey = document.getElementById('some-object-key').value;
    const inputValue = document.getElementById('some-object-value').value;
    someObject[inputKey] = inputValue;
    content.innerHTML = '111';

    for (let key in someObject) {
        content.innerHTML += `<div> ключ ${key}, значение ${someObject[key]}; </div>`;
    };
};


const content2 = document.getElementById('content2');
const d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
const a1 = [];
const a2 = [];
for (let index = 0; index < d.length; index++) {
    if (d[index] % 2 === 0) {
        a1.push(d[index]);
    } else {
        a2.push(d[index]);
    }
}
console.log(a1);
console.log(a2);
content2.innerHTML += `<div>Массив а1 ${a1}</div>`;
content2.innerHTML += `<div>Массив а2 ${a2}</div>`;