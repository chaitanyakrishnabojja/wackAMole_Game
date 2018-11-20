$(document).ready( function() {
    
    var score = 0, maxScore, maxScoreDisplay, sound = 0;
    
//    Randomising the penguins
    
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
    
    
    if(score == 0){
        var scoreDisplay = score + '<br/>Score';
        $('#score').html(scoreDisplay);
    }
    
    maxScore = sessionStorage.getItem('maxScore');
    if(maxScore == null){
        maxScore = 0;
    }
    
    maxScoreDisplay = maxScore + '<br/>Highest Score';
    $('#highestScore').html(maxScoreDisplay);
    
//    generating penguin img tags
    
    
    var $penguinimage = new Array();
    
    
    for(var i = 1; i <= 15; i++){
        
        var penguin = '<img src="images/penguin_' + i + '.png" alt="penguin_' + i + '">';

        $penguinimage[i] = penguin;
    }
    
//    selecting penguins Array
    
    var $penguinsList = $('div div');
    
//    shuffled penguins array
    
    $penguinsList = shuffle($penguinsList);

    $penguinsList.on('click', function(){
        
        $(this).html($penguinimage[$penguinsList.index(this)]);
        
        $(this).off('click');

        
        
//        code when yeti is found
        if($(this).html() == ''){
            
            const penguinSound = new Audio("./sounds/sound2.mp3");
            penguinSound.play();
            sound++;
            
            $(this).html('<img src="images/yeti.png" alt="yeti">');
            var el = document.createElement('div');
            el.setAttribute('id', 'yaaar');

            $('#highestScore').after(el);
            $('#yaaar').html("Yaaaarrrr!");

            if (maxScore <= score) {
                maxScore = score;
            }

            maxScoreDisplay = maxScore + '<br/>Highest Score';
            $('#highestScore').html(maxScoreDisplay);
            sessionStorage.setItem('maxScore', maxScore);
            var myVar = setTimeout(waitforreload, 2000);  
            function waitforreload(){
                location.reload();
            }    
        
//        alert("Yaaaarrrr!");
        }
        
//        code if yeti not found
        

        
        score++;
//        sound
        if (sound == 0){
            const penguinSound = new Audio("./sounds/sound1.mp3");
            penguinSound.play(); 
        }
        
        if(sound != 0){
            score--;
        }
        
        
        
        if(score >= 15){
            score = 15;
        }
        var scoreDisplay = score + '<br/>Score';
        $('#score').html(scoreDisplay);
        
    });
    


});