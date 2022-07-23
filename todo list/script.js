function getVal() {
    const val = document.querySelector('input').value;
    return val;
};

document.getElementById('push').addEventListener('click', function() {
    var tag = document.createElement('li');
    tag.setAttribute('id', 'task');
    tag.append(getVal());
    var element = document.getElementById('tasks');
    element.appendChild(tag);
});

function del() {
    const element = document.getElementById('task').remove();
};