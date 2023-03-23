var outerDiv = document.getElementById('outer');
var round = document.getElementById('innerRound');
var heading = document.getElementById('head');
round.addEventListener('click',function(){
    round.style.marginLeft = '29px';
    outerDiv.style.backgroundColor = 'white';
    document.body.style.backgroundColor = 'black';
    heading.style.color = 'white';

});