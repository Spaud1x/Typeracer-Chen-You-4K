var colourChange;
var textLocX, textLocY;
var words;

var score = 0;
var timer = 120;
var startWord = true;

var mainTimer = 120;




function preload(){
  phrases = loadStrings('Copy.txt');
  
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('grey');
  
  textLocX = 20; //width of location of text
  textLocY = 40; //height of location of text
  colourChange = 'black';
  words = '';

}



function draw() {
  
  //generate random phrase
  if(startWord == true){
    result = random(phrases);
    startWord = false;
    print(startWord); //for checking startWord
  }
  
  
  //circle to indicate text appearing
  fill(colourChange);
  ellipse(windowWidth/2 , windowHeight/2, 50, 50);
  
  //text for circle
  let circleText = "Colour change indicates you are typing something!";
  textSize(16);
  textFont('MonoSpace');
  fill('black');
  text(circleText, windowWidth/4, windowHeight/2.5, windowWidth, windowHeight);
 
  
  //rules text
  let s = "dude hey hi, press DOWN ARROW to clear, BACKSPACE to delete key, any other key to type";
  textSize(16);
  textFont('MonoSpace');
  fill('black');
  text(s, 20, 20, windowWidth, windowHeight);
  
  //text for question
  let whatToType = 'Type the text below ⬇';
  textSize(20);
  textFont('Anton');
  fill('black');
  text(whatToType, 20, 120, windowWidth, windowHeight);
  
  //question text
  textSize(20);
  textFont('MonoSpace');
  fill('black');
  text(result, 20, 140, windowWidth, windowHeight);
  
  //when words are matching 
  if(words == result){
    fill('red');
    text('Nice one', 20, 160, windowWidth/2, windowWidth/2);
    timer --; //countdown before reset
  }
  
  if(timer == 0){
    clear();
    background('grey');
    textLocX = 20;
    
    words = ''; //reset string
    timer = 120; //reset timer
    score += 10; //add score
    print(score); //for checking score
    startWord = true; //choose a new random phrase
    print(startWord); //for checking startWord
  }
  
  //-------------------------------------------------------------------
  
  //score
  let scoreText = "Score: " + score;
  fill('black');
  text(scoreText, 20, windowHeight * 7/8, windowWidth, windowHeight);
  
  //main timer
  textSize(40);
  textFont('MonoSpace');
  fill('black');
  text("Time left: " + mainTimer, windowWidth - 500, windowHeight * 7/8, windowWidth, windowHeight);
  
  if (frameCount % 60 == 0 && mainTimer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    mainTimer --;
    print(mainTimer); //print time
  }
  
  //GAME OVER
  if (mainTimer == 0) {
    clear();
    background('grey');
    textSize(40);
    textAlign(CENTER);
    fill('red');
    text("GAME OVER, final score: " + score, width/2, height*0.7);
  }
  
  
}




function keyPressed(){
  //write text
  if(keyCode != BACKSPACE && keyCode != TAB && keyCode != SHIFT && keyCode != ENTER && keyCode != CONTROL && keyCode != 20){
    textSize(20);
    textFont('MonoSpace');
    fill('blue');
    words += str(key);
    text(words, textLocX, textLocY, windowWidth, windowWidth);
    
  }
  
  //clear text
  if(keyCode === DOWN_ARROW){
    clear();
    background('grey');
    textLocX = 20;
    
    words = ''; //reset string
  }
  
  //delete letter
  if(keyCode === BACKSPACE){
    words = words.slice(0, words.length - 1);
    clear();
    background('grey');
    textLocX = 20;
    textSize(20);
    textFont('MonoSpace');
    fill('blue');
    text(words, textLocX, textLocY, windowWidth/2, windowWidth/2);

    
  
  }
  
  
  //colour change to signal text typing
  if(colourChange == 'black'){
    colourChange = 'red';
  }
  else{
    colourChange = 'black';
  }
  
}

