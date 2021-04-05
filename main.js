

var myCanvas= new fabric.Canvas("myCanvas");
player_x=80;
player_y=20;

blocks_width=30;
blocks_height=30;

var playersstorer="";
var blockstorer="";

function update_player(){
    fabric.Image.fromURL("player.png",function(Img){
        playersstorer=Img;
       playersstorer.scaleToWidth(150);
       playersstorer.scaleToHeight(140);
       playersstorer.set({
           top:player_y,left:player_x
       });
       myCanvas.add(playersstorer);
    });
}

function update_block(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockstorer=Img;
       blockstorer.scaleToWidth(blocks_width);
       blockstorer.scaleToHeight(blocks_height);
       blockstorer.set({
           top:player_y,left:player_x
       });
       myCanvas.add(blockstorer);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if( keyPressed == "80"){
        console.log("P  together");
        blocks_width = blocks_width +10;
        blocks_height = blocks_height +10;

        document.getElementById("width").innerHTML = blocks_width;
        
        document.getElementById("height").innerHTML = blocks_height;

    }
    if( keyPressed == "77"){
        console.log("M  together");

        blocks_width = blocks_width -10;
        blocks_height = blocks_height -10;

        document.getElementById("width").innerHTML = blocks_width;
        
        document.getElementById("height").innerHTML = blocks_height;
    }

    if(keyPressed == "38" ){
        up();
        console.log("up");
    }
    if(keyPressed == "39" ){
        right();
        console.log("right");
    }

    if(keyPressed == "40" ){
        Down();
        console.log("Down");
    }

    if(keyPressed == "37" ){
        left();
        console.log("left");
    }

    if(keyPressed == "67" ){
        update_block("cloud.jpg");
        console.log("c");
    }

    if(keyPressed == "68" ){
        update_block("dark_green.png");
        console.log("d");
    }

    if(keyPressed == "71" ){
        update_block("ground.png");
        console.log("g");
    }

    if(keyPressed == "76" ){
        update_block("light_green.png");
        console.log("l");
    }

    
    if(keyPressed == "82" ){
        update_block("roof.jpg");
        console.log("r");
    }

    if(keyPressed == "84" ){
        update_block("trunk.jpg");
        console.log("t");
    }

    if(keyPressed == "85" ){
        update_block("unique.png");
        console.log("u");
    }

    if(keyPressed == "87" ){
        update_block("wall.jpg");
        console.log("w");
    }

    if(keyPressed == "89" ){
        update_block("yellow_wall.png");
        console.log("y");
    }
}

function up(){
    if(player_y >=0)
{
 player_y=player_y-blocks_height;
 console.log(blocks_height);
 console.log("when up arrow pressed x="+player_x+"y="+player_y);
 myCanvas.remove(playersstorer);
 update_player();
}
}


function Down(){
    if(player_y <=600)
{
 player_y=player_y+blocks_height;
 console.log(blocks_height);
 console.log("when down arrow pressed x="+player_x+"y="+player_y);
 myCanvas.remove(playersstorer);
 update_player();
}
}


function right(){
    if(player_x <=900)
{
 player_x=player_x+blocks_width;
 console.log(blocks_width);
 console.log("when right arrow pressed x="+player_x+"y="+player_y);
 myCanvas.remove(playersstorer);
 update_player();
}
}


function left(){
    if(player_x >=0)
{
 player_x=player_x-blocks_width;
 console.log(blocks_width);
 console.log("when left arrow pressed x="+player_x+"y="+player_y);
 myCanvas.remove(playersstorer);
 update_player();
}
}
