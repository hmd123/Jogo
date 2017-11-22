var game=new Phaser.Game(640, 360, Phaser.AUTO, 'Example', {preload: preload, create: create, update: update});

function preload(){
   this.load.spritesheet('under','assets/images/under_spritesheet.png',37,62);
   game.load.audio('passos','assets/audio/Pa.m4a');
}

function create(){
   
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	
	//background = game.add.sprite(0,0,'background');
    
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
        passos.play();
       }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
        under.frame = 5;
        under.y=under.y-1;
        pontoSubida+=1;
        passos.play();
       } 
    else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
        under.play('moveE');  
       under.x=under.x-1;
        pontoEsquerda+=1;
        passos.play();
       }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
        under.play('moveD'); 
        under.x=under.x+1;
        pontoDireita+=1;
        passos.play();
       }
    
    console.log(pontoDescida);

    under.x+= andaX;
        if(pontoDescida + pontoSubida + pontoEsquerda + pontoDireita == 130){
        under.frame = 2; 
        text1.text = 'Porque você faz isso?';
        //text1.anchor.setTo(0.5);   
    }
    
    if(pontoDescida + pontoSubida + pontoEsquerda + pontoDireita == 200){
        under.frame = 2;
        estilo = {font:'10px Arial', fill:'#ffffff'};
        text1.text = 'Você simplesmente me obriga a me mover, para lá e pra cá... \nNem ao menos se importa em pergunta minha opinião. Por quê?';
    }
    
}
/*
function acao(a,b){
    if(b.mal == true){
     a.kill(); 
     alert("você morreu");    
    }
    else{
     b.kill();     
    }
    
    
} */