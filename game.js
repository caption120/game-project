let userscore = 0;
let computerscore = 0;

// Step 1: Select choices
let choices = document.querySelectorAll(".choice");

// Step 2: Select score elements
let computersc = document.querySelector("#computer");
let usersc = document.querySelector("#user");
let message_con = document.querySelector("#meaasge_con");

// Step 3: Function to get random computer choice
function getrandomnumber() {
    let arrylist = ["rock", "paper", "scissors"];
    let randomindax = Math.floor(Math.random() * 3);
    return arrylist[randomindax];
}

// Step 4: Play the game
function plygame(userchoise) {
    let computerchoise = getrandomnumber();

    if (userchoise === computerchoise) {
        message_con.innerHTML = "It's a draw!";
    } else if (
        (userchoise === "rock" && computerchoise === "scissors") ||
        (userchoise === "paper" && computerchoise === "rock") ||
        (userchoise === "scissors" && computerchoise === "paper")
    ) {
        userscore++;
        usersc.innerHTML = userscore;
        message_con.innerHTML = `You win! ${userchoise} beats ${computerchoise}`;
    } else {
        computerscore++;
        computersc.innerHTML = computerscore;
        message_con.innerHTML = `Computer wins! ${computerchoise} beats ${userchoise}`;
    }
}


choices.forEach(choice => {
    choice.addEventListener("click", () => {
        let userchoise = choice.id; 
        plygame(userchoise); 
    });
});


Math.floor(Math.random*3());