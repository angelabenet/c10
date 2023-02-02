var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a403ce7c-cec3-463c-a2e8-f2e5bcf09111","e73f12dd-a9a4-4e78-90d3-42eaccb2d109"],"propsByKey":{"a403ce7c-cec3-463c-a2e8-f2e5bcf09111":{"name":"basketball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lJ_EH4DV2ueKL_rNgl9vTVZREP_YfLJf/category_sports/basketball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"lJ_EH4DV2ueKL_rNgl9vTVZREP_YfLJf","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lJ_EH4DV2ueKL_rNgl9vTVZREP_YfLJf/category_sports/basketball.png"},"e73f12dd-a9a4-4e78-90d3-42eaccb2d109":{"name":"cesta","sourceUrl":"assets/v3/animations/ruZkQsPXJ5mUzxLiFPyTxInoT5VcMcSkHI81_Ua2bL4/e73f12dd-a9a4-4e78-90d3-42eaccb2d109.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"d7s4dID5xD3bxCNy8QHDzW8gVg9J7Q2V","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/ruZkQsPXJ5mUzxLiFPyTxInoT5VcMcSkHI81_Ua2bL4/e73f12dd-a9a4-4e78-90d3-42eaccb2d109.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score;
score = 0 ;
var bola;
bola=  createSprite(20,20, 20,20); 
bola.setAnimation("basketball_1");
bola.scale = 0.2;
bola.velocityY =5; 
bola.velocityX = -3;

var cesta  =  createSprite(200,370,20,20);
cesta.setAnimation("cesta");
cesta.scale = 3;

createEdgeSprites();


function draw(){
  background("white");

  textSize(30)
  text("Pontos " +score,   50, 50 );
  
  bola.bounceOff(edges);
  if(bola.isTouching(cesta) ||bola.isTouching(leftEdge)  ){

    score = score +1; 
    
  }

  
  
  
  
  drawSprites();
}



function queVaiDiminuir(){
  score += 1
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
