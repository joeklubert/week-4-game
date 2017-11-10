

//global variables
var wins = 0;
var losses = 0;
//players current score
var addition = 0;
//selects a random number from 19 t0 120
var total = Math.floor((Math.random()* 100) + 19);
//assigns random value to crystals from 1-12
var goldgem = Math.floor((Math.random()* 12) + 1);
var emeraldgem = Math.floor((Math.random()* 12) + 1);
var rubygem = Math.floor((Math.random()* 12) + 1);




var updateAddition = function (){
	$('.addition').empty();
	$('.addition').append(addition);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}
//restart function
var restart = function(){
	addition = 0;
    total = Math.floor((Math.random()* 100) + 19);

	$('.total').empty();
	$('.total').append(total);

	goldgem = Math.floor((Math.random()* 12) + 1);
    emeraldgem = Math.floor((Math.random()* 12) + 1);
    rubygem = Math.floor((Math.random()* 12) + 1);
    
    
    updateAddition();
}
var logic = function (){
	if (addition == total) {
		wins = wins + 1;
		
		
		
	}else if(addition > total){
		losses = losses + 1;
		
		
		
	}else{
		updateAddition();
	}
}
$('.total').append(total);

$('.addition').append(addition);


$(document).ready(function(){
	$('#goldgem').click(function(){
		addition = addition + goldgem;
		logic();
	})
	$('#emeraldgem').click(function(){
		addition = addition + emeraldgem;
		logic();
	})
	$('#rubygem').click(function(){
		addition = addition + rubygem;
		logic();
	})

});
	
	








