let x = Math.trunc(Math.random() * 100) + 1;
var attempt = 0;

document.querySelector('#submit').addEventListener('click', function() {
    const guess = Number(document.querySelector('#input').value);

    if (!guess) {
        document.querySelector('#txt').textContent = 'No number!'
    } else if (guess === x) {
        document.querySelector('#txt').textContent = 'You got it correct!!'
        document.querySelector('.body').style.backgroundColor = '#97fc4e';
        document.querySelector('#ntxt').textContent = x;
    } else if (guess !== x) {
        if (attempt < 10) {
            document.querySelector('#txt').textContent = guess > x ? document.querySelector('#txt').textContent = 'Too high!' : document.querySelector('#txt').textContent = 'Too low!';
            attempt++;
            document.querySelector('#text').textContent = attempt;
        } else {
            document.querySelector('#txt').textContent = 'You lost :(';
            document.querySelector('#text').textContent = 0;
        }
    }
});

document.querySelector('#reset').addEventListener('click', function() {
    attempt = 0;
    x = Math.trunc(Math.random() * 100) + 1;

    document.querySelector('#txt').textContent = '';
    document.querySelector('#text').textContent = '0';
    document.querySelector('#ntxt').textContent = '?';
    document.querySelector('.body').style.backgroundColor = '#333';
});