const loop = function() {
    const jumpSpeed = 50;
    const distBeforeJump = 120;
    const instance = window.Runner.instance_;
    const tRex = instance.tRex;
    if( tRex.jumping ) {
        requestAnimationFrame(loop);
        return;
    }
    const tRexPos = tRex.xPos;
    const obstacles = instance.horizon.obstacles;
    const nextObstacle = obstacles.find(o => o.xPos - tRexPos );
    if ( nextObstacle && ( nextObstacle.xPos - tRexPos ) <= distBeforeJump){
        tRex.startJump(jumpSpeed);
    }
    requestAnimationFrame(loop);
    }

requestAnimationFrame(loop);
