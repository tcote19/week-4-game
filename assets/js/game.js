
$( document ).ready(function() {
    var randomNum = Math.floor((Math.random() * 120) + 19);

    var crystal1 = $("#crystal-one");
    var crystal2 = $("#crystal-two");
    var crystal3 = $("#crystal-three");
    var crystal4 = $("#crystal-four");

    $("#random-number").append(randomNum);
    
    $(crystal1).hover(function() {
    	$("#crystal-denomination1").append(Math.floor((Math.random() * 19) + 1));
    	$("#crystal-denomination1").animate({'opacity':0}, 'slow');
    	$(this).unbind('mouseenter mouseleave');
	});

    $(crystal2).hover(function() {
    	$("#crystal-denomination2").append(Math.floor((Math.random() * 19) + 1));
    	$("#crystal-denomination2").animate({'opacity':0}, 'slow');
    	$(this).unbind('mouseenter mouseleave');
	});

    $(crystal3).hover(function() {
    	$("#crystal-denomination3").append(Math.floor((Math.random() * 19) + 1));
    	$("#crystal-denomination3").animate({'opacity':0}, 'slow');
    	$(this).unbind('mouseenter mouseleave');
	});

    $(crystal4).hover(function() {
    	$("#crystal-denomination4").append(Math.floor((Math.random() * 19) + 1));
    	$("#crystal-denomination4").animate({'opacity':0}, 'slow');
    	$(this).unbind('mouseenter mouseleave');
	});

});



// User starts with a random number at the start of the game.
// User has 4 crystal buttons. The button adds fixed amounts to players score.

// The player's score must match the random number at the start.
// The player loses the game if there number totals up too high.

// The crystal's value is hidden from view until clicked on.
// The crystal's values reset each new game so the user cant know
// the totals for every round.
