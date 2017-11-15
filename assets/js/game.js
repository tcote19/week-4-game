
$( document ).ready(function() {
    var randomNum = Math.floor((Math.random() * 120) + 19);
    $("#random-number").append(randomNum);

    var crystal1 = $("#crystal-one");
    var crystal2 = $("#crystal-two");
    var crystal3 = $("#crystal-three");
    var crystal4 = $("#crystal-four");

    var btnVal1 = Math.floor((Math.random() * 12) + 1);
    var btnVal2 = Math.floor((Math.random() * 12) + 1);
    var btnVal3 = Math.floor((Math.random() * 12) + 1);
    var btnVal4 = Math.floor((Math.random() * 12) + 1);

    var playerScore = $("#player-score");
    var scorePlacehold = 0;



    
    


    $(crystal1).hover(function() {
    	$("#crystal-denomination1").append(btnVal1);
    	$("#crystal-denomination1").animate({'opacity':0}, 'slow');
    	$(this).unbind('mouseenter mouseleave');
	});

    $(crystal2).hover(function() {
    	$("#crystal-denomination2").append(btnVal2);
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
		}
	});
    $(crystal2).on("click", function() {
		if (btnVal2 <= 12) {
			$(scorePlacehold += btnVal2);
			$(playerScore).html(scorePlacehold);
		}
	});
    $(crystal3).on("click", function() {
		if (btnVal3 <= 12) {
			$(scorePlacehold += btnVal3);
			$(playerScore).html(scorePlacehold);
		}
	});
    $(crystal4).on("click", function() {
		if (btnVal4 <= 12) {
			$(scorePlacehold += btnVal4);
			$(playerScore).html(scorePlacehold);
		}
	});    
});



// User starts with a random number at the start of the game.
// User has 4 crystal buttons. The button adds fixed amounts to players score.

// The player's score must match the random number at the start.
// The player loses the game if there number totals up too high.

// The crystal's value is hidden from view until clicked on.
// The crystal's values reset each new game so the user cant know
// the totals for every round.
