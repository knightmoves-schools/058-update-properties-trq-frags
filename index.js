
const person = { age: 0 };

function celebrateBirthday(p) {
    p.age = (p.age || 0) + 1;
    return p;
}

document.getElementById('result').innerHTML = JSON.stringify(person);
