const item1Elem = document.querySelector('.js-sideImg');
const item2Elem = document.querySelector('.js-frontImg');
const item3Elem = document.querySelector('.js-backImg');
const buttonElem1 = document.querySelector('.js-button1');
const buttonElem2 = document.querySelector('.js-button2');
const buttonElem3= document.querySelector('.js-button3');
const buttonElem4= document.querySelector('.js-button4');
const buttonElem5= document.querySelector('.js-button5');
const buttonElem6= document.querySelector('.js-button6');
const buttonElem7= document.querySelector('.js-button7');

 
 
let red1 ="url('imacredside.jpeg')";
let red2 ="url('imacredfront.jpeg')";
let red3 =" url('imacredback.jpeg')";

let green =" url('imacgreenside2.jpeg')";
let green1=" url('imacgreenfront1.jpeg')";
let green2 =" url('imacgreenback2.jpeg')";

let yellow =" url('imacyellowside.jpeg')";
let yellow1=" url('imacyellowfront.jpeg')";
let yellow2 =" url('imacyellowback.jpeg')";

let orange =" url('imacorangeside.jpeg')";
let orange1=" url('imacorangefront.jpeg')";
let orange2 =" url('imacorangeback.jpeg')";

let  purple=" url('imacpurpleside.jpeg')";
let purple1=" url('imacpurplefront.jpeg')";
let  purple2=" url('imacpurpleback.jpeg')";

let  blue=" url('imacblueside.jpeg')";
let blue1=" url('imacbluefront.jpeg')";
let  blue2=" url('imacblueback.jpeg')";

blue
function colorCHange(param){
    if(param === 'red'){
        item1Elem.style.backgroundImage =red1;
        item2Elem.style.backgroundImage = red2
        item3Elem.style.backgroundImage =red3
        buttonElem1.style.border = "1.3px solid blue";
        buttonElem1.addEventListener("mouseleave", () =>{
            buttonElem1.style.border = "none";
        })
    }
    else if(param === 'green'){
        item1Elem.style.backgroundImage =green;
        item2Elem.style.backgroundImage = green1;
        item3Elem.style.backgroundImage =green2;
        buttonElem2.style.border = "1.3px solid blue";
        buttonElem2.addEventListener("mouseleave", () =>{
            buttonElem2.style.border = "none";
        })
    }
    else if(param === 'yellow'){
        item1Elem.style.backgroundImage =yellow;
        item2Elem.style.backgroundImage = yellow1;
        item3Elem.style.backgroundImage =yellow2;
        buttonElem3.style.border = "1.3px solid blue";
        buttonElem3.addEventListener("mouseleave", () =>{
            buttonElem3.style.border = "none";
        })
    }
    else if(param === 'orange'){
        item1Elem.style.backgroundImage =orange;
        item2Elem.style.backgroundImage = orange1;
        item3Elem.style.backgroundImage =orange2;
        buttonElem4.style.border = "1.3px solid blue";
        buttonElem4.addEventListener("mouseleave", () =>{
            buttonElem4.style.border = "none";
        })
    }
    else if(param === 'purple'){
        item1Elem.style.backgroundImage =purple;
        item2Elem.style.backgroundImage = purple1;
        item3Elem.style.backgroundImage =purple2;
        buttonElem5.style.border = "1.3px solid blue";
        buttonElem5.addEventListener("mouseleave", () =>{
            buttonElem5.style.border = "none";
        })
    }

    else if(param === 'blue'){
        item1Elem.style.backgroundImage =blue;
        item2Elem.style.backgroundImage = blue1;
        item3Elem.style.backgroundImage =blue2;
        buttonElem6.style.border = "1.3px solid blue";
        buttonElem6.addEventListener("mouseleave", () =>{
            buttonElem6.style.border = "none";
        })
    }
}

function dom(){
    
    const canvas = document.querySelector('.animation');
    // const context  = canvas.getContext('2d');
// we are setting it as a innerheight/width it will adapt the size of
// canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", ()=>{

// we are setting it as a innerheight/width it will adapt the size of
// canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    function files(index){
        let data = `
      canvas.style.backgroundImage =url("all i mac_files/design_hero__b1s6t07doqj6_large.jpg");
        `;
        return data.split("\n")[index];
    }

    const frameCount = 22;

    const images = [];
    const imageSeq = {
        frame :0,
    }

    for (let i = 0 ; i   <= frameCount; i++ ){
//this loop will loop through and get the img and 
        let img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq,{
        frame : frameCount -1,
        snap: "frame",
        ease : 'none',
        scrollTrigger:{
            scrub:1.8,
            pin:true,
            trigger:'.animation',
        },
        
        onUpdate : render()
    });
    
    images[0].onload =  render;

    function render(){
        scaleImage(images[imageSeq.frame], context);

        console.log(image);
        console.log(imageSeq);
        console.log(imageSeq.frame);
    }

    function scaleImage(img , ctx){
        //this func is to centralize the imgs in canvas.
        let canvas = ctx.canvas;
        let hRatio = canvas.width / img.width;
        let vRatio = canvas.height / img.height;
        let ratio = Math.max(hRatio, vRatio);
        let centerShift_x = (canvas.width - img.width * ratio) / 2;
        let centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearReact(0,0, canvas.width , canvas.height); // it will clear the old img
        ctx.drawImage(img ,0,0, img.width , img.height ,centerShift_x,centerShift_y,
             img.width * ratio, img.height * ratio);  // it will generate the new img
    }

}

// dom()


var tl = gsap.timeline({scrollTrigger:{
    trigger: ".brilliantDisplay",
    start: "0% 80%",
    end:"25% 50%",
    scrub:true,
   
    // markers: true,
  }

  })

tl.to("#briliant_desg1",{
    //   width: "70%",
     height:"65%",
     marginTop:"12%",
     marginLeft:"12%",
    
    });

 tl.to(".jurasicImg",{
    // display : "flex",
    // justifyContent:"center",
    width: "66.36%",
    top:"346.9%",
    right: "17.82%",

});    


tl.to(".brilliantH1",{
    fontSize: "10vh",
    top:'375%',
});    
      

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".left",
    start: "top top",
    end:"bottom bottom",
    scrub:true,
    pin: ".slider_imac"
  }
})

tl2.from(".textBox2",{
    opacity: 0.1,
})

var tl3 = gsap.timeline({scrollTrigger:{
    trigger: ".left",
    start: "top top",
    end:"bottom bottom",
    scrub:true,
    pin: ".changingImg"
  }
})

var tl4 = gsap.timeline({scrollTrigger:{
    trigger: ".apps",
    start: "30% 50%",
    end:"47% 40%",
    scrub:true,
    pin: ".middleText",
    // markers: true,
}})

var tl5 = gsap.timeline({scrollTrigger:{
    trigger: ".apps",
    start: "45% 50%",
    end:"45% 40%",
    scrub:true,
    // markers: true,
}})

tl5.from(".middleText1",{

  top: "60%",
  opacity :0,
  

})

