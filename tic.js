// Function called whenever user tab on any box

function myfunc() {
	// Setting DOM to all boxes or input field
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	// Checking if Player X won or not and after that disabling all the other fields
	if (
        ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) || 
        ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) ||
        ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) ||
        ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) ||
        ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) ||
        ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) ||
        ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) ||
        ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) 
    ) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		setTimeout(() => { window.alert('Player X won') }, 500);
	}

	
	// Checking if player 0 won or not and after that disabling all the other fields
	else if (
        ((b1 == '0') && (b2 == '0') && (b3 == '0')) || 
        ((b4 == '0') && (b5 == '0') && (b6 == '0')) ||
        ((b7 == '0') && (b8 == '0') && (b9 == '0')) ||
        ((b1 == '0') && (b4 == '0') && (b7 == '0')) ||
        ((b2 == '0') && (b5 == '0') && (b8 == '0')) ||
        ((b3 == '0') && (b6 == '0') && (b9 == '0')) ||
        ((b1 == '0') && (b5 == '0') && (b9 == '0')) ||
        ((b3 == '0') && (b5 == '0') && (b7 == '0'))
        ) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		setTimeout(() => { window.alert('Player 0 won') }, 500);
	}	

	// Checking if there is a Tie
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X' || b2 == '0') && 
        (b3 == 'X' || b3 ==    '0') && (b4 == 'X' || b4 == '0') && 
        (b5 == 'X' || b5 == '0') && (b6 == 'X' || b6 == '0') && 
        (b7 == 'X' || b7 == '0') && (b8 == 'X' || b8 == '0') && 
        (b9 == 'X' || b9 == '0')) {
			document.getElementById('print').innerHTML = "Match Tie";
			setTimeout(() => { window.alert('Match Tie') }, 500);
	}
	else {
		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('print').innerHTML = "Player X Turn";
		} else {
			document.getElementById('print').innerHTML = "Player 0 Turn";
		}
	}
}

// Function to reset game
function reset() {
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';
}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;

function myfun(id) {
	if (flag == 1) {
		document.getElementById(id).value = "X";
		document.getElementById(id).style.color = "blue";
		document.getElementById(id).style.backgroundColor = "white";
		document.getElementById(id).disabled = true;
		flag = 0;
	} else {
		document.getElementById(id).value = "0";
		document.getElementById(id).style.color = "red";
		document.getElementById(id).style.backgroundColor = "white";
		document.getElementById(id).disabled = true;
		flag = 1;
	}
}



