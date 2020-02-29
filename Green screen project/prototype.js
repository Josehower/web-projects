

var imga = null;
var imgb = null;
var imgo = null;

//Llama el canvas no 1
function callCVS1() {
console.log("canvas 1 llamado")   
return document.getElementById("canva"); 

}
//Llama el canvas no 2
function callCVS2() {
console.log("canvas 2 llamado") 
return document.getElementById("canva2");
}
   
//Sube la imagen a y la imprime (actualiza imga)
function upload() {
    imga = new SimpleImage(document.getElementById("fle")); 
    imga.drawTo(callCVS1()); 
    console.log("imga listo")
         
}

//Sube la imagen b y la imprime (actualiza imgb)
function uploadB() {
    imgb = new SimpleImage(document.getElementById("fle2"));
    imgb.drawTo(callCVS2())
    console.log("imgb listo")
            
}

//Limpia ambos canvas 
function fullClean() {
   //limpia canvas 1
   var Cctx = callCVS1().getContext("2d");
   Cctx.clearRect(0,0,callCVS1().width,callCVS1().height);
   document.getElementById("fle").value = '';
  
   //limpia canvas 2
   var Cctx2 = callCVS2().getContext("2d");
   Cctx2.clearRect(0,0,callCVS2().width,callCVS2().height);
   console.log("canvas limpio")
   document.getElementById("fle2").value = '';
   }

function QuitarF() { 
    alert("te quito el fondo");
}

//crea output basado en altura y anchura mas grande
function crearoutput() {
  //verifica que existan dos imagenes
  if (imga == null || imgb == null) {
      if (imga == null) {alert("Foreground image is missing");}
      else {alert("Background image is missing");}
      } 
//leer y comparar anchos de imagenes a y b retornar el mas alto  
   else {
        if (imga.width>imgb.width) {
           console.log("aw mas grande")
           mW = imga.width
        }
        else{
         console.log("bw mas grande")
         mW = imgb.width
        }
  //leer y comparar altos de imagenes a y b retornar els mas altos      
        if (imga.height>imgb.height) {
        console.log("ah mas grande")
        mH = imga.height
        }
        else{
        console.log("bh mas grande")
        mH = imgb.height
        }
   }
   //crea una imagen con los valores mas altos
   console.log("W: "+mW+", H: "+mH);
   imgo = new SimpleImage(mW,mH);
   //agrando la imagen de fondo para que quede del mayor ancho y alto
   //console.log(imgb.width, imgb.height," imagen de fondo antes")
   imgb.setSize(mW,mH);
   imga.setSize(mW,mH);
   console.log(imgb.width, imgb.height," imagen de fondo despues")
   cortaverde();
   fullClean()
  imgo.drawTo(callCVS1());
  imga = imgo
  console.log("imga listo")
  alert("te quito el fondo");
  }

  function cortaverde() {
   for (var pixel of imga.values()) {
      //si el pixel es verde
     if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
     //poner en el output el pixel que corresponde a imagen fondo
     imgo.setPixel(pixel.getX(),pixel.getY(),imgb.getPixel(pixel.getX(),pixel.getY()));
     }
     //si el pixel no es verde
     else {
     //poner en el output la imagen que esta en la imagen principal
     imgo.setPixel(pixel.getX(),pixel.getY(),imga.getPixel(pixel.getX(),pixel.getY()));
     }

}
}

   
    
    
    
    
  /* function upload() {
   creaimg();
   repeat(); }


   function repeat(){
   
      if (real == null || ! real.complete()) {
         setTimeout(repeat, 0);

      }
      else {
      pxlAVR();
      }
   }      
   




function pxlAVR(){
    var x = real;
    var imgW = x.getWidth();
    var imgH = x.getHeight();
   
   var Gimg = new SimpleImage(imgW,imgH);
    
   for (var pix of x.values()) 
   {

        var Px = pix.getX();
        var Py = pix.getY();
        var Gpix = Gimg.getPixel(Px,Py);
        //Gimg se vuelve una copia a color
        Gpix.setAllFrom(pix); 
               
        var R = pix.getRed();
        var G = pix.getGreen();
        var B = pix.getBlue();
        var brillo=0;
        var pixAVR = ((R+G+B)/3)+brillo;
        pix.setRed(pixAVR);
        pix.setGreen(pixAVR);
        pix.setBlue(pixAVR);
        //aqui real es escala de grises
           }
    imgGris = real;
    real = Gimg;
    var canvas = document.getElementById("canva");
    Gimg.drawTo(canvas); 
 

}

function fullClean(){
   var canv = document.getElementById("canva");
   var Cctx = canv.getContext("2d");
   var CW = canv.width;
   var CH = canv.height;
   Cctx.clearRect(0,0,CW,CH);
   var canv2 = document.getElementById("canva2");
   var Cctx2 = canv2.getContext("2d");
   var CW2 = canv2.width;
   var CH2 = canv2.height;
   Cctx2.clearRect(0,0,CW2,CH2);
   
}
function Gf(){
   var canvas = document.getElementById("canva2"); 
    imgGris.drawTo(canvas);
    
}

var x = null;

function test() {
   //console.log(x,"antes");
   
   if (x != 5 ) {
      if (x == null || x == undefined ) {
         x = 1;
         console.log(x);
         test();
      }
      else{
      x = x+1;
      console.log(x);

      test();
      }

   }
   else {
     
      console.log("completado")
      x = null;
   }

} */