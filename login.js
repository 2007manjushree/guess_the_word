var player_1, player_2;

function add_user() {
    player_1 = document.getElementById("player_one_name").value;
    player_2 = document.getElementById("player_two_name").value;

    localStorage.setItem("player 1", player_1);
    localStorage.setItem("player 2", player_2);

    window.location = "game_page.html";
}