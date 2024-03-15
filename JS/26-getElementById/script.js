var myButton = document.getElementById('b1');

var demoParagraph= document.getElementById('demo');

myButton.addEventListener('click', function(e) {
    demoParagraph.innerHTML="Hello";
});
