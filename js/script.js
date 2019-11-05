/*global $*/

$(document).ready(function(){
    //*****************************************************
    //Global Variables
    //*****************************************************
    var current = "";
    var computer = "";
    var win = 0;
    var lose = 0;
    var tie = 0;
    
    
    //*****************************************************
    //event listeners
    //*****************************************************
    $("#playButton").on("click", RockPaperScissor);
    
    $(".choice_rcp").on("click", function() {
        $(".choice_rcp").css("background","");
        $(this).css("background","rgb(255, 255, 0)");
    });
    
    //*****************************************************
    //functions
    //*****************************************************
    
    function RockPaperScissor(){
        whichone();
        computerRandom();
        if(current =="rock"){
            changeImage("img/rock.png");
        }
        else if(current =="paper"){
            changeImage("img/paper.jpg");
        }
        else {
            changeImage("img/scissor.png");
        }
        
        //WINNER WINNER?  0 = tie, 1 = win, 2 = lose
        if ( current == computer)
        {
            displayMessage(0);
            tie+=1;
        }
        else if ( current == "rock" && computer == "scissor")
        {
            displayMessage(1);
            win+=1;
        }
        else if ( current == "rock" && computer == "paper")
        {
            displayMessage(2);
            lose+=1;
        }
        else if ( current == "scissor" && computer == "paper")
        {
            displayMessage(1);
            win+=1;
        }
        else if ( current == "scissor" && computer == "rock")
        {
            displayMessage(2);
            lose+=1;
        }
        else if ( current == "paper" && computer == "rock")
        {
            displayMessage(1);
            win+=1;
        }
        else if ( current == "paper" && computer == "scissor")
        {
            displayMessage(2);
            lose+=1;
        }
        else
        {
            displayMessage(0);
            tie+=1;
        }
    }
    
    
    // 0 = tie, 1 = win, 2 = lose
    function displayMessage(num)
    {
        let inputName = document.getElementById("inputName").value;
        
        if (inputName != "")
        {
            inputName+="'s";
        }
        
        if (num == 0)
        {
            $("#status").html("TIED!");
        }
        else if (num == 1)
        {
            $("#status").html("WINNER!");
        }
        else if(num == 2)
        {
            $("#status").html("LOSER!");
        }
        
        $("#totalWins").html(`${inputName} Total Wins: ${win}`);
        $("#totalLose").html(`${inputName} Total Lose: ${lose}`);
        $("#totalTie").html(`${inputName} Total Tie: ${tie}`);
    }
    
    
    //COMPUTER 
    function getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    function computerRandom(){
        let val = getRandomInt(3);
        
        switch(val){
            case 0:
                changeImageComp("img/rock.png");
                computer = "rock";
                break;
                
            case 1:
                changeImageComp("img/paper.jpg");
                computer = "paper";
                break;
            
            case 2:
                changeImageComp("img/scissor.png");
                computer = "scissor";
                break;
        }
        
    }
    
    
    
    //Change the Image
    function changeImage(a) {
        document.getElementById("player").src=a;
    }
    
    function changeImageComp(a){
        document.getElementById("computer").src=a;
    }
    
    //Find out which one was chosen
    function whichone(){
        if($("#rock").css("background-color") == "rgb(255, 255, 0)") {
            current="rock";
        } 
        else if ($("#paper").css("background-color") == "rgb(255, 255, 0)") {
            current="paper";
        }
        else {
            current="scissor";
        }
    }
});
    
    
    

