var game=new Phaser.Game(640, 360, Phaser.AUTO, 'Example', {preload: preload, create: create, update: update});

function preload(){
   this.load.spritesheet('under','assets/images/under_spritesheet.png',37,62);
   game.load.audio('passos','assets/audio/passos.m4a');
}

function create(){
   
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    
    under = game.add.sprite(400,200,'under');
	under.anchor.setTo(0.5);
	under.scale.setTo(0.5);
    
    passos = game.add.audio('passos');
    
    under.animations.add('moveE',[0,1],10,false);
    under.animations.add('moveD',[3,4],10, false);
    under.animations.add('move',[0,1,2,3,4,5],50, true);
   
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.enable(under);
	
    var estilo = {font:'20px Arial', fill:'#ffffff'};
    text1 = game.add.text(50, 50, '', estilo );
	
    under.body.collideWorldBounds = true;
    under.body.bounce.setTo(1);
}

var andaX=0;

var pontoSubida = 0;
var pontoDescida = 0;
var pontoEsquerda = 0;
var pontoDireita = 0;

function update(){
  
    if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
        under.frame = 2;
        under.y=under.y+1;
        pontoDescida+=1;
        }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
        under.frame = 5;
        under.y=under.y-1;
        pontoSubida+=1;
       } 
    else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
        under.play('moveE');  
       under.x=under.x-1;
        pontoEsquerda+=1;
       }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
        under.play('moveD'); 
        under.x=under.x+1;
        pontoDireita+=1;
       }
    
    andaX = pontoDescida + pontoSubida + pontoEsquerda + pontoDireita;
        if(andaX == 150){
        under.frame = 2; 
        text1.text = 'Porque você faz isso?';
        }
    
        else if(andaX == 450){
            under.frame = 2;
            estilo = {font:'10px Arial', fill:'#ffffff'};
            text1.text = 'Você simplesmente me obriga a me mover, para lá e pra cá... \nNem ao menos se importa em perguntar minha opinião. Por quê?';
        }
    
        else if(andaX == 650){
            under.frame = 2;
            text1.text = 'Isso é algum tipo de jogo para você?';
        }
    
        else if(andaX == 900){
            under.frame = 2;
            text1.text = 'O que você quer agora? Continua com essa tortura porque \nquer tão desesperadamente que eu lhe diga quanto eu \nestou sofrendo?';
        }
    
        else if(andaX == 1200){
            under.frame = 2;
            text1.text = 'É isso...';
        }
    
        else if(andaX == 1400){
            under.frame = 2;
            text1.text = 'Talvez você se sentiria ainda melhor se me fizesse \ncolidir com a parede da esquerda';
        }
    
}