var biker_jump
var biker_idle
var biker_run
var boy
var war_scene
var scene
var eattack
var enemy

function preload(){
biker_jump= loadAnimation("jump/0.png",
"jump/1.png","jump/2.png","jump/3.png")
biker_idle= loadAnimation("idle/i_0.png","idle/i_1.png",
"idle/i_2.png","idle/i_3.png")
biker_run= loadAnimation("run/r0.png","run/r1.png",
"run/r2.png","run/r3.png",
"run/r4.png","run/r5.png")
eattack= loadAnimation("e-attack/Minotaur_02_Attacking_000.png","e-attack/Minotaur_02_Attacking_001.png",
"e-attack/Minotaur_02_Attacking_002.png","e-attack/Minotaur_02_Attacking_003.png",
"e-attack/Minotaur_02_Attacking_004.png","e-attack/Minotaur_02_Attacking_005.png",
"e-attack/Minotaur_02_Attacking_006.png","e-attack/Minotaur_02_Attacking_007.png",
"e-attack/Minotaur_02_Attacking_008.png","e-attack/Minotaur_02_Attacking_009.png",
"e-attack/Minotaur_02_Attacking_010.png","e-attack/Minotaur_02_Attacking_011.png")
war_scene= loadImage("backdrop.png")
}

function setup(){
createCanvas(windowWidth,windowHeight);
scene= createSprite(width/2,height/2);
scene.addImage(war_scene);
scene.scale=0.35;

boy= createSprite(500,height-120);
boy.addAnimation("idle",biker_idle);
boy.scale=4.0;
boy.addAnimation("run",biker_run);
boy.addAnimation("jump",biker_jump);



}

function draw(){
background("gray");
createEdgeSprites();




//spawnEnemy();
Pjump();
PMove();
drawSprites();

}

function PMove(){
    if(keyDown("w")){
        boy.y= boy.y-5;
        boy.changeAnimation("run",biker_run);
        }
    if(keyWentUp("w")){
        boy.changeAnimation("idle",biker_idle)
    }
    
    if(keyDown("s")){
        boy.y= boy.y+5
        boy.changeAnimation("run",biker_run);
    }
    if(keyWentUp("s")){
        boy.changeAnimation("idle",biker_idle)
    }
    
    if(keyDown("d")){
        boy.x= boy.x+5
        boy.changeAnimation("run",biker_run);
    }
    if(keyWentUp("d")){
        boy.changeAnimation("idle",biker_idle)
    }
    if(keyDown("a")){
        boy.x= boy.x-5
        boy.changeAnimation("run",biker_run);
    }
    if(keyWentUp("a")){
        boy.changeAnimation("idle",biker_idle)
    }
}

function Pjump(){
    if(keyDown("space")){
        boy.x= boy.x+10
        boy.changeAnimation("jump",biker_jump);
    }
    if(keyWentUp("space")){
        boy.changeAnimation("idle",biker_idle)
    }
    if(keyDown("space" && "a")){
        boy.x= boy.x-10
        boy.changeAnimation("jump",biker_jump);
    }
    if(keyWentUp("space" && "a")){
        boy.changeAnimation("idle",biker_idle)
    }
}

function spawnEnemy(){
    if(frameCount % 200===0){
        enemy= createSprite(600,height-95,10,40);
        enemy.addAnimation("attack",eattack);
        enemy.scale=0.3
        enemy.x= boy.x+10
        enemy.y= boy.y
    }

    
}