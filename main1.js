// //  Shery.imageEffect("#back", {style: 5, debug: true})

// import * as THREE from 'https://unpkg.com/three@0.155.0/build/three.module.js';
//       window.THREE = THREE; // Assign to window to maintain compatibility with Shery.js

//       import 'https://unpkg.com/sheryjs/dist/Shery.js';
//       document.addEventListener("DOMContentLoaded", function() {
//           Shery.imageEffect("#back", { style: 5,config:{
//             a:{value: 1.49, range:[0,30]},
//             b:{value: -0.98, range:[-1,2]},
//             aspect: {value: 1.8822947576656774},
//             gooey:{value: true},
//             infiniteGooey:{value:true},
//             durationOut:{value:1,range:[0.1,5]},
//             durationIn:{value:1,range:[0.1,5]},
//             displaceAmount:{value: 0.5},
//             masker:{value:true},
//             maskVal:{value:1.33, range:[1,5]},
//             scrollType:{value:true},
//             geoVertex:{range:[1,64],value:1},
//             noEffectGooey:{value: false},
//             onMouse:{value:1},
//             noise_speed:{value:1.59, range:[0,10]},
//             metball:{value: 0.21, range:[0,2]},
//             discard_threshold:{value:0.5, range:[0,0.1]},
//             antialias_threshold:{value: 0, range:[0,0.1]},
//             noise_height:{value: 0.47, range:[0,2]},
//             noise_scale:{value: 12.15, range:[0,100]},
           
//           }, gooey:true });
//       });

var elems=document.querySelectorAll(".elem")

elems.forEach(function(elem){
var h1s=elem.querySelectorAll("h1");
var index=0;
var animating =false;
    document.querySelector("#main")
    .addEventListener("click",function(){

        if(!animating){
            animating=true;
        gsap.to(h1s[index],{
            top:'-=100%',
            ease:Expo.easeInOut,
            duration:1,

            onComplete:function(){
                gsap.set(this._targets[0], {top: "100%"});
                animating=false;
            }
        });

     index===h1s.length-1 ? (index=0) :  index++;

        gsap.to(h1s[index],{
            top:'-=100%',
            ease:Expo.easeInOut,
            duration:1,
        });

    }
    });

});
