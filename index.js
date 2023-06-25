var numberOfDrumbuttons= document.querySelectorAll(".drum").length;

for(var i =0;i<numberOfDrumbuttons;i++){
     document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        
        var buttonInnerHTML= this.innerHTML;

        switch (buttonInnerHTML){
        case "m":
         var amustang=new Audio("sounds/mustang.mp3")
        amustang.play();
        break;

        case "b":
         var abugatti=new Audio("sounds/bugatti.mp3")
        abugatti.play();
        break;

        case "l":
         var alambo=new Audio("sounds/lambo.mp3")
        alambo.play();
        break;
        
        case "f":
        var aferrari=new Audio("sounds/Ferrari.mp3")
        aferrari.play();
        break;

        default: console.log(buttonInnerHTML);
        }


         


     });

}



