question_turn = "player_1"
answer_turn = "player_2"



function back() {
    window.location = "login_page.html";
}

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");


document.getElementById("player1_name").innerHTML = player1_name + "  :   ";
document.getElementById("player2_name").innerHTML = player2_name + "  :   ";



document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_Ans").innerHTML = "Ans turn - " + player1_name;
document.getElementById("player_Question").innerHTML = "Question turn - " + player2_name;

function send() {
    Number1 = document.getElementById("Number1").Value;
    Number2 = document.getElementById("Number2").Value;
actual_answer = parseInt(Number1) *  parseInt(Number2);
console.log(actual_answer);


question_number = <h4> + Number1 + " X "+  Number2 +"</h4>
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br> <button class='btn btn-info' onclick='check()'>check</button>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("Number1").Value = "";
document.getElementById("Number2").Value = "";

}

function check()
{
    get_ans = document.getElementById("input_check_box").Value
    if(get_ans == actual_answer)
{
    if(answer_turn == "player1")

{
    update_player1_score = player1_score +1;
    document.getElementById("player1_score").innerHTML = update_player1_score;
}
else{

    update_player2_score = player1_score +1;
    document.getElementById("player2_score").innerHTML = update_player2_score;

}

if(question_turn == "player1")
{
question_turn = "player2"
document.getElementById("player_question").innerHTML = "question_turn - " + player2_name ;
}

else
{
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "question_turn - " + player1_name 
}


}

}
