class Player{

    constructor(){}
    getCount(){
        var playerCountRef = database.ref('playerCount' );
        playerCountRef.on('value', (data) => {
            playerCount = data.val();
          
        });
    }
    updateCount(count){
        database.ref('/' ).update({
            playerCount:count
        })     
    }
update(n){
    var playerIndex='player'+playerCount
    database.ref(playerIndex ).set({
       name : n
    })   
}
}

            