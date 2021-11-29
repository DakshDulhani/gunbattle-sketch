var rifle,rifle_copy,handgun,handgun_copy,assultRifle,assultRifle_copy,shotgun,shotgun_copy
var bg
var screen
var steve, steveImg,rightarm1,rightarm1Img,leftarm1,leftarm1Img
var steve_copy , steve_copyImg
var explosion, explosionAnimation
var explosionSound
var armAngleR = 0;
var armAngleL =0;
var rifleCollection
var rifleCollectionImg;




function preload(){
bg = loadImage("assets/background.png")
explosionSound = loadSound("assets/category_explosion/explosion.ogg")
steveImg =  loadImage("assets/steve.png")
steve_copyImg =  loadImage("assets/steve_copy.png")
explosionAnimation = loadAnimation("assets/sprite_0.png","assets/sprite_1.png","assets/sprite_2.png",
"assets/sprite_3.png","assets/sprite_4.png","assets/sprite_5.png","assets/sprite_6.png")
rightarm1Img = loadImage("assets/rightarm_1.png")
leftarm1Img = loadImage("assets/leftarm_1.png")
rifleCollectionImg = loadImage("assets/rifleCollection.png")
}



function setup(){
createCanvas(windowWidth -20, windowHeight-60)
screen = createSprite(765,320,windowWidth, windowHeight-100)
screen.addImage("scenery",bg)
screen.scale= 2.15

steve = createSprite(850,500,20,20)
steve.addImage("aiming",steveImg)
steve.scale = 0.7;

steve_copy =createSprite(650,500,20,20)
steve_copy.addImage("aiming_copy",steve_copyImg)
steve_copy.scale = 0.7;

rightarm1 = createSprite(845,500,10,10)
rightarm1.addImage("R1",rightarm1Img)
rightarm1.scale=0.4
rightarm1.debug = true
rightarm1.setCollider("rectangle",-10,-50,10,10)

leftarm1 = createSprite(650,500,10,10)
leftarm1.addImage("L1",leftarm1Img)
leftarm1.scale=0.4



}

function draw(){
background("blue")
//rifleCollection.visible= false
if(keyWentDown("j")){
    explosion= createSprite(700,200,20,20)
    explosion.addAnimation("boom",explosionAnimation)
    explosionSound.play()
}

if(keyWentUp("j")){
    explosion.visible = false;
}

if(keyWentDown("f")){
    explosion= createSprite(700,200,20,20)
    explosion.addAnimation("boom",explosionAnimation)
    explosionSound.play()
}

if(keyWentUp("f")){
    explosion.visible = false;
}

if(keyWentDown("z")){
    rifleCollection = createSprite(700,330,20,20);
    rifleCollection.addImage("rifleL",rifleCollectionImg);
    rifleCollection.scale = 1.15;
    rifle = createSprite(440,130,20,150)
    rifle_copy = createSprite(440,470,20,150)
    handgun = createSprite(550,110,20,150)
    handgun_copy = createSprite(550,470,20,150)
    assultRifle = createSprite(710,130,20,220)
    assultRifle_copy = createSprite(710,160,20,220)
    shotgun = createSprite(870,130,20,200)
    //shotgun_copy = createSprite(870,160,20,200)
}

if(keyWentUp("a")){
    rifleCollection.visible= false;
    rifle.x=-100
    rifle_copy.x=-120
    handgun_copy.x=-110
    handgun.x=-130
    assultRifle.x=-140
    //assultRifle_copy.x = -150
   // shotgun_copy.x = -160
    shotgun.x = -170
}




if(keyDown("o")){
if(armAngleR <105){
    armAngleR = armAngleR + 5
   // rightarm1.x = rightarm1.x -0.54
  // rightarm1.y = rightarm1.y -0.75
}
    if(armAngleR > 105){
        armAngleR = 105
        
    }
    rightarm1.rotation = armAngleR
}

if(keyDown("l")){
if(armAngleR>0){
    armAngleR = armAngleR -5
   //rightarm1.x = rightarm1.x +0.8
  // rightarm1.y = rightarm1.y +0.71
}
    if(armAngleR < 0){
        armAngleR = 0
        
    }
    rightarm1.rotation = armAngleR




}

//console.log(armAngleR)
console.log(rightarm1.x)


drawSprites();
}