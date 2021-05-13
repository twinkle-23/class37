class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount(){        //counts the no. of players
        var playerCountref = database.ref('playerCount');
        playerCountref.on("value", (data)=>{
            playerCount = data.val();
        }
        );
    }

    updateCount(count){//updates the no. of players
        database.ref('/').update({
            playerCount:count
        }
        );
    }

    update(){     //updates the data (name) given by the player
        var playerIndex = "Players/Player " + this.index;  // here there is a space  after Player.. 
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        }
        );
    }

    static getPlayerInfo(){
        var PlayerInforef = database.ref('Players');
        PlayerInforef.on("value", (data)=>{
            AllPlayers = data.val();
        }
        );
    }
}