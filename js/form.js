class Form{

        constructor(){}
        display(){
            var title=createElement('h2')
            title.html('Multiplayer Car Racing')
            title.position(200,0)
            var input=createInput('name')
            input.position(200,160)
            var button=createButton('play')
            button.position(250,200)
            var greeting=createElement('h3')
           
            button.mousePressed(function(){
                input.hide()
                button.hide()
                var name=input.value()
                playerCount+=1
                player.update(name)
                player.updateCount(playerCount)
                greeting.html('hello'+name)
                greeting.position(200,160)
            })
        }
}