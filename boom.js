var currentRow;
var currentColumn;
var appendingParent
    
function spawnParticle(transform, delay, lifeTime){ 
    function birthMe(){
        var colorArray = ['red', 'orange', 'yellow', 'orangered']
        var randomColor = colorArray[Math.floor(Math.random()*3)];
        var boom = $("<div>").addClass('particle').css({
            'background-color': randomColor,
            'transition-duration': lifeTime+'ms',
        })
        function killMe(){
            boom.remove();
        }
        // debugger;
        $(appendingParent).append(boom);
        debugger;
        function GO(){
            boom.css({
                left: transform.x+'%',
                top: transform.y+'%'
            });
        }
        setTimeout(GO, 50);
        setTimeout(killMe, lifeTime);
    }
    setTimeout(birthMe, delay)
}
    
function explode(row, col, initialDelay){
    appendingParent = ".column"+col+".row"+row;
    console.log(appendingParent);
    if(row===5){
        return;
    }
    for(var i = 0; i<200; i++){
        var transform = {x: random(), y: random()}; //where I'm going to go
        var animationDelayTime = initialDelay; //how long I'll wait to be be born
        var lifeTime = random(200,1000); //how long I'll live when I'm born
        spawnParticle(transform, animationDelayTime, lifeTime);
    }
}

function random(min=0, max=100){
    var num = Math.floor(Math.random() * (max-min)) - min;

    return num * (Math.round(Math.random())*2-1)
}
