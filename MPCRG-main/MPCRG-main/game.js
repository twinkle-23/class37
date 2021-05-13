class Game{
    constructor(){

    }

    getState(){//will read the gamestate
        var gamestateref = database.ref('gamestate');
        gamestateref.on("value", function(data){
            gamestate = data.val();
        }
        );
    }

    update(state){ //will update the gamestate
        database.ref('/').update({
            gamestate : state
        }
        )
    }

    async start(){  //will start the game
        if(gamestate === 0){
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start", 120, 100);
        Player.getPlayerInfo();
        
        if(AllPlayers !== undefined){
            if (frameCount % 60 == 0){
                console.log(AllPlayers);
            }
            var displayPos = 130;
            for(var plr in AllPlayers){
                if(plr === "Player " + player.index){   // so added space here
                    console.log("plr")
                    
                    fill("#fae")
                }
                else{

                    fill("black");
                }
                displayPos += 20;
                textSize(15);
                text(AllPlayers[plr].name + ":" + AllPlayers[plr].distance, 120, displayPos);
            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
    }
}