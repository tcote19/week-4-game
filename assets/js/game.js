var playerWins = 0;
var playerLosses = 0;

var randomNum = Math.floor((Math.random() * 120) + 19);
$("#random-number").append(randomNum);

var crystal1 = $("#crystal-one");
var crystal2 = $("#crystal-two");
var crystal3 = $("#crystal-three");
var crystal4 = $("#crystal-four");
var winsEl = $("#game-wins");
var lossesEl = $("#game-loses");


var btnVal1 = Math.floor((Math.random() * 12) + 1);
var btnVal2 = Math.floor((Math.random() * 12) + 1);
var btnVal3 = Math.floor((Math.random() * 12) + 1);
var btnVal4 = Math.floor((Math.random() * 12) + 1);

var playerScore = $("#player-score");
var scorePlacehold = 0;

var storedGameState = localStorage.setItem(playerWins, playerLosses);

	$(crystal1).hover(function() {
    	$("#crystal-denomination1").append(btnVal1);
		$("#crystal-denomination1").animate({'opacity':0}, 'slow');
		$(this).unbind('mouseenter mouseleave');
	});

    $(crystal2).hover(function() {
    	$("#crystal-denomination2").append(btnVal1l2);
    	$("#crystal-denomination2").animate({'opacity':0}, 'slow');
    	$(this).unbind('mouseenter mouseleave');
	});

    $(crystal3).hover(function() {
    	$("#crystal-denomination3").append(btnVal3);
    	$("#crystal-denomination3").animate({'opacity':0}, 'slow');
    	$(this).unbind('mouseenter mouseleave');
	});

    $(crystal4).hover(function() {
    	$("#crystal-denomination4").append(btnVal4);
    	$("#crystal-denomination4").animate({'opacity':0}, 'slow');
    	$(this).unbind('mouseenter mouseleave');
	});

    $(crystal1).on("click", function() {
		if (btnVal1 <= 12) {
			$(scorePlacehold += btnVal1);
			$(playerScore).html(scorePlacehold);
		};
		if (scorePlacehold == randomNum){
			alert("You Win!");
			$(playerWins += 1);
			$(winsEl).html(playerWins);
		} else if (scorePlacehold > randomNum){
			alert("You Lose!");
			$(playerLosses += 1);
			$(lossesEl).html(playerLosses);
		};
	});
    $(crystal2).on("click", function() {
		if (btnVal2 <= 12) {
			$(scorePlacehold += btnVal2);
			$(playerScore).html(scorePlacehold);
		};
		if (scorePlacehold == randomNum){
			alert("You Win!");
			$(playerWins += 1);
			$(winsEl).html(playerWins);			
		} else if (scorePlacehold > randomNum){
			alert("You Lose!");
			$(playerLosses += 1);
			$(lossesEl).html(playerLosses);
		};
	});
    $(crystal3).on("click", function() {
		if (btnVal3 <= 12) {
			$(scorePlacehold += btnVal3);
			$(playerScore).html(scorePlacehold);
		};
		if (scorePlacehold == randomNum){
			alert("You Win!");
			$(playerWins += 1);
			$(winsEl).html(playerWins);
		} else if (scorePlacehold > randomNum){
			alert("You Lose!");
			$(playerLosses += 1);
			$(lossesEl).html(playerLosses);
		};
	});
    $(crystal4).on("click", function() {
		if (btnVal4 <= 12) {
			$(scorePlacehold += btnVal4);
			$(playerScore).html(scorePlacehold);
		};
		if (scorePlacehold == randomNum){
			alert("You Win!");
			$(playerWins += 1);
			$(winsEl).html(playerWins);
		} else if (scorePlacehold > randomNum){
			alert("You Lose!");
			$(playerLosses += 1);
			$(lossesEl).html(playerLosses);
		};
	});

var gameReset = (function(){

$("#random-number").empty();
$("#player-score").empty();

var storedGameState = (function(){
	localStorage.getItem(playerWins, playerLosses);
	$(winsEl).html(playerWins);
	$(lossesEl).html(playerLosses);
}); 

gameStart();

});

var gameStart = (function(){



var scorePlaceholdRest = 0;

$(crystal1).unbind();
$(crystal2).unbind();
$(crystal3).unbind();
$(crystal4).unbind();

var btnVal1Rest = Math.floor((Math.random() * 12) + 1);
var btnVal2Rest = Math.floor((Math.random() * 12) + 1);
var btnVal3Rest = Math.floor((Math.random() * 12) + 1);
var btnVal4Rest = Math.floor((Math.random() * 12) + 1);

var randomNumRest = Math.floor((Math.random() * 120) + 19);
$("#random-number").append(randomNumRest);	

	$(crystal1).hover(function() {
    	$("#crystal-denomination1").append(btnVal1Rest);
		$("#crystal-denomination1").animate({'opacity':0}, 'slow');
		$(this).unbind('mouseenter mouseleave');
	});

    $(crystal2).hover(function() {
    	$("#crystal-denomination2").append(btnVal2Rest);
    	$("#crystal-denomination2").animate({'opacity':0}, 'slow');
    	$(this).unbind('mouseenter mouseleave');
	});

    $(crystal3).hover(function() {
    	$("#crystal-denomination3").append(btnVal3Rest);
    	$("#crystal-denomination3").animate({'opacity':0}, 'slow');
    	$(this).unbind('mouseenter mouseleave');
	});

    $(crystal4).hover(function() {
    	$("#crystal-denomination4").append(btnVal4Rest);
    	$("#crystal-denomination4").animate({'opacity':0}, 'slow');
    	$(this).unbind('mouseenter mouseleave');
	});

    $(crystal1).on("click", function() {
		if (btnVal1 <= 12) {
			$(scorePlaceholdRest += btnVal1);
			$(playerScore).html(scorePlaceholdRest);
		};
		if (scorePlaceholdRest == randomNumRest){
			alert("You Win!");
			$(playerWins += 1);
			$(winsEl).html(playerWins);
			gameReset();
		} else if (scorePlaceholdRest > randomNumRest){
			alert("You Lose!");
			$(playerLosses += 1);
			$(lossesEl).html(playerLosses);
			gameReset();
		};
	});
    $(crystal2).on("click", function() {
		if (btnVal2 <= 12) {
			$(scorePlaceholdRest += btnVal2);
			$(playerScore).html(scorePlaceholdRest);
		};
		if (scorePlaceholdRest == randomNumRest){
			alert("You Win!");
			$(playerWins += 1);
			$(winsEl).html(playerWins);	
			gameReset();		
		} else if (scorePlaceholdRest > randomNumRest){
			alert("You Lose!");
			$(playerLosses += 1);
			$(lossesEl).html(playerLosses);
			gameReset();
		};
	});
    $(crystal3).on("click", function() {
		if (btnVal3 <= 12) {
			$(scorePlaceholdRest += btnVal3);
			$(playerScore).html(scorePlaceholdRest);
		};
		if (scorePlaceholdRest == randomNumRest){
			alert("You Win!");
			$(playerWins += 1);
			$(winsEl).html(playerWins);
			gameReset();
		} else if (scorePlaceholdRest > randomNumRest){
			alert("You Lose!");
			$(playerLosses += 1);
			$(lossesEl).html(playerLosses);
			gameReset();
		};
	});
    $(crystal4).on("click", function() {
		if (btnVal4 <= 12) {
			$(scorePlaceholdRest += btnVal4);
			$(playerScore).html(scorePlaceholdRest);
		};
		if (scorePlaceholdRest == randomNumRest){
			alert("You Win!");
			$(playerWins += 1);
			$(winsEl).html(playerWins);
			gameReset();
		} else if (scorePlaceholdRest > randomNumRest){
			alert("You Lose!");
			$(playerLosses += 1);
			$(lossesEl).html(playerLosses);
			gameReset();
		};
	});

});

$("#restart-game").click(function(){
	gameReset();
});

// User starts with a random number at the start of the game.
// User has 4 crystal buttons. The button adds fixed amounts to players score.

// The player's score must match the random number at the start.
// The player loses the game if there number totals up too high.

// The crystal's value is hidden from view until clicked on.
// The crystal's values reset each new game so the user cant know
// the totals for every round.
