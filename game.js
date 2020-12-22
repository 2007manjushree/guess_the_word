var player1_name = localStorage.getItem("player 1");
var player2_name = localStorage.getItem("player 2");

var player1_score = 0;
var player2_score = 0;

var char1, char2, char3;
var get_word, word, row;
var remove_char1, remove_char2, remove_char3; 
var question_word, input, button;
var question_turn = "player1";
var answer_turn = "player2";
var get_answer, answer;
 

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = player1_name;
document.getElementById("player_answer").innerHTML = player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lower case = " + word);

    char1 = word.charAt(1);
    console.log(char1);

    length_by_2 = Math.floor(word.length/2);
    char2 = word.charAt(length_by_2);
    console.log(char2);

    length_minus_1 = word.length - 1;
    char3 = word.charAt(length_minus_1);
    console.log(char3);

    remove_char1 = word.replace(char1, "_");
    remove_char2 = remove_char1.replace(char2, "_");
    remove_char3 = remove_char2.replace(char3, "_");
    console.log(remove_char3);

    question_word = "<h4 id='word_display'> Q." + remove_char3 + "</h4>";
    input = "<br> Answer : <input type='text' id='input_checkbox'>";
    button = "<br><br><button id='button_check' onclick='check()' class='btn btn-primary'>Check</button>";
    row = question_word + input + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

function check() {
    get_answer = document.getElementById("input_checkbox").value;
    answer = get_answer.toLowerCase();
    console.log("Answer in lower case is = " + answer);
    if (answer == word) {
        if (answer_turn == "player1"){
            player1_score ++;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score ++;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = player2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = player1_name;
    }

    document.getElementById("output").innerHTML = "";
}