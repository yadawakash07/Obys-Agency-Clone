function cursor(){
    document.addEventListener("mousemove",function(val){
        gsap.to("#cursor",{
            x:val.x,
            y:val.y,
            top:"0%",
            left:"0%",
            duration:.75,
            opacity:1,
            scale:1
        })
    })
}
function loadingAnimation(){

    var tl=gsap.timeline();

    tl.from("#loader h1",{
        y:150,
        stagger:.25,
    })
    
    tl.from("#loader .top1 h5,#loader .top1 h6,.bottom2 h2",{
        opacity:0,
        stagger:.25,
        onStart: function(){
            var count=0;
            setInterval(function(){
                if (count <100) {
                    count++;
                } else {
                    count=100;
                    if(count==100){
                        tl.to("#loader .fade",{
                            y:-90,
                            opacity:0,
                            stagger:.2,
                        })
                        tl.to("#loader",{
                            y:"-100%",
                            duration:.4,
                        })
                    }
                }
                var counttext=document.querySelector(".top h5").textContent=count;
        },27.5)
    },
},"A")

tl.from(".lastDis",{
    opacity:0,
},"A")

tl.to("span",{
    opacity:0,
    delay:.5,
    stagger:.5
},"A")

tl.from("span",{
    opacity:1,
    delay:2,
    stagger:.3
},"A")

}
function mainAnimation(){

    var tl=gsap.timeline();
    
    var h1s=document.querySelectorAll(".heading3 .random #h1");
    h1s.forEach((h1)=>{
        h1.addEventListener("mouseenter", function(e){
            tl.to("#Flag",{
                opacity:1,
                x:e.x,
                y:e.y,
                top:"-50%",
                left:"-50%",
            })
        })
        h1.addEventListener("mouseleave", function(e){
            tl.to("#Flag",{
                opacity:0,
            })
        })
    })

    tl.from(".heading1 h1,.heading2 h1,.heading3 .random,.heading4 h1",{
        y:100,
        stagger:.2,
        duration:.5,
        delay:6.5
    })

    tl.to(".page1 .topContent1,.page1 .topContent2",{
        y:-100,
        scrollTrigger:{
            trigger:".page1",
            scroller:"body",
            start:"3% 0%",
            end:"top -5%",
            // markers:true,
            scrub:2
        }
    },"a")
    tl.to(".page1 .topContent1 h5",{
        y:-100,
        stagger:.2,
        duration:2,
        scrollTrigger:{
            trigger:".page1",
            scroller:"body",
            start:"3% 0%",
            end:"top 0%",
            // markers:true,
            scrub:.5
        }
    },"a")

    tl.to(".page1ContentBottom",{
        y:-200,
        stagger:.2,
        duration:2,
        scrollTrigger:{
            trigger:".page1",
            scroller:"body",
            start:"30% 25%",
            end:"60% 0%",
            // markers:true,
            scrub:1
        }
    },"b")
    tl.to(".page1ContentBottom .heading",{
        y:-80,
        stagger:.1,
        scrollTrigger:{
            trigger:".page1",
            scroller:"body",
            start:"30% 20%",
            end:"60% 0%",
            // markers:true,
            scrub:1
        }
    },"b")

    tl.from(".page2",{
        y:-70,
        scrollTrigger:{
            trigger:".page2",
            scroller:"body",
            start:"30% 25%",
            end:"60% 0%",
            // markers:true,
            scrub:5
        }
    })

    tl.from(".page3 .elemtImgF",{
        y:150,
        stagger:1,
        duration:3,
        scrollTrigger:{
            trigger:".page3 .elemtImgF",
            scroller:"body",
            start:"10% 110%",
            end:"70% 70%",
            // markers:true,
            scrub:3
        }
    })
    tl.from(".page3 .elemtImgS1",{
        y:150,
        duration:1,
        scrollTrigger:{
            trigger:".page3 .elemtImgS1",
            scroller:"body",
            start:"0% 100%",
            end:"47% 80%",
            // markers:true,
            scrub:3
        }
    })
    tl.from(".page3 .elemtImgS2",{
        y:150,
        scrollTrigger:{
            trigger:".page3 .elemtImgS2",
            scroller:"body",
            start:"10% 90%",
            end:"40% 70%",
            // markers:true,
            scrub:3
        }
    })
    tl.from(".page3 .elemtImgT",{
        y:150,
        stagger:.5,
        duration:1,
        scrollTrigger:{
            trigger:".page3 .elemtImgT",
            scroller:"body",
            start:"20% 100%",
            end:"60% 60%",
            // markers:true,
            scrub:4
        }
    })
}
function page2crsrAnimation(){

    var page2= document.querySelector(".page2Container");
    var page2cursor= document.querySelector(".page2cursor")
    page2.addEventListener("mousemove",function(e){
        
        gsap.to(page2cursor,{
            x:e.x,
            y:e.y,
            top:"-23%",
            left:"-37.5%",
            duration:.75,
            delay:.25
        })
    })
    page2.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            display:"none",
            scale:0,
        })
    })
    page2.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            display:"block",
            scale:1,
        })
    })
    
    var video=document.querySelector("Video");
    var videoContainer=document.querySelector(".page2contentVideo");
    var a=0;

    page2.addEventListener("click",function(){
        var tl=gsap.timeline();
        
        if (a==0) {
            video.play();
            tl.to(page2cursor,{
                scale:.5,
            })
            tl.to(videoContainer,{
                display:"block",
            })
            tl.to(".page2cursor #play",{
                display:"none"
            })
            tl.to(".page2cursor #pause",{
                display:"block"
            })
            tl.to(".page2Scursor #play",{
                display:"none"
            })
            tl.to(".page2Scursor #pause",{
                display:"block"
            })
            a=1;
        }else{
            video.pause();
            tl.to(page2cursor,{
                scale:1,
            })
            tl.to(videoContainer,{
                display:"none"
            })
            tl.to(".page2cursor #pause",{
                display:"none"
            })
            tl.to(".page2cursor #play",{
                display:"block"
            })
            tl.to(".page2Scursor #pause",{
                display:"none"
            })
            tl.to(".page2Scursor #play",{
                display:"block"
            })
            a=0;
        }
    })
}
function page3Animation(){

    var firstP= document.querySelector(".aboutParagraph p")
    var splitedText=firstP.innerText.toString().split("");
    var cluter="";
    splitedText.forEach(function(text){
        cluter+=`<span>${text}</span>`;
        firstP.innerHTML=`${cluter}`;
    })

    gsap.to(".aboutParagraph p span",{
        color:"#f9f9ed",
        stagger:.4,
        scrollTrigger:{
            trigger:".aboutParagraph p",
            scroller:"body",
            start:"20% 80%", 
            end:"70% 70%", 
            // markers:true,
            scrub:5,
        }
    })

    var firstP=document.querySelector(".para .firstp p");
        let psplitedText=firstP.innerText.toString().split("");
        var pcluter="";
        psplitedText.forEach((elem)=>{
            pcluter+=`<span>${elem}</span>`
            firstP.innerHTML=pcluter;
        })

        gsap.to(".para .firstp p span",{
            color:"#f9f9ed",
            stagger:.2,
            scrollTrigger:{
                trigger:".para .firstp p",
                scroller:"body",
                start:"20% 80%", 
                end:"70% 60%", 
                // markers:true,
                scrub:3,
            }
        })

        var secondP=document.querySelector(".para .secondp p");
        let SsplitedText=secondP.innerText.toString().split("");
        var Scluter="";
        SsplitedText.forEach((selem)=>{
            Scluter+=`<span>${selem}</span>`
            secondP.innerHTML=Scluter;
        })

        gsap.to(".para .secondp p span",{
            color:"#f9f9ed",
            stagger:.2,
            scrollTrigger:{
                trigger:".para .secondp p",
                scroller:"body",
                start:"20% 85%", 
                end:"70% 55%", 
                // markers:true,
                scrub:3,
            }
        })
}
function sheryAnimation(){
    Shery.makeMagnet(".topContent2 h4,nav svg" /* Element to target.*/, {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
}
function cursorNone(){
    var allElems= document.querySelectorAll(".elemtImg")
var allCircle= document.querySelectorAll(".c")
    allElems.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to("#cursor",{
                display:"none",
                scale:0,
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to("#cursor",{
                display:"block",
                scale:1,
            })
        })
    })
    allCircle.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to("#cursor",{
                display:"none",
                scale:0,
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to("#cursor",{
                display:"block",
                scale:1,
            })
        })
    })
}
function footerAnimation() {

    var tl=gsap.timeline();
    var clutter = ""
    var clutter2 = ""
    document.querySelector(".headingelem1 h1").textContent.split("").forEach(function (elem) {
        clutter += `<span>${elem}</span>`
    })
    document.querySelector(".headingelem1 h1").innerHTML = clutter
    document.querySelector(".headingelem1 h1").addEventListener("mouseenter", function () {
      tl.to(".headingelem1 h1 span", {
        opacity: 0,
        stagger: 0.2
      })
      tl.to(".headingelem1 h1 span", {
        delay: 0.35,
        opacity: 1,
        stagger: 0.1
      })
    })
}
function underlineAnimation(){
    var tl=gsap.timeline();

    tl.to(".projectHeading .underline",{
        width:"100%",
        duration:.05,
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            start:"0% 70%",
            end:"5% 60%",
            // markers:true,
            scrub:1
        }
    })

    tl.to(".page3 .projectContent .projectElemt1 .underline,.page3 .projectContent .projectElemt2 .underline",{
        width:"100%",
        duration:.05,
        stagger:.1,
        scrollTrigger:{
            trigger:".page3 .projectContent",
            scroller:"body",
            start:"50% 70%",
            end:"60% 50%",
            // markers:true,
            scrub:1
        }
    })

    tl.to(".page3 .projectContent1 .projectElemt1 .underline",{
        width:"100%",
        duration:.05,
        stagger:.1,
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            start:"50% 80%",
            end:"55% 60%",
            // markers:true,
            scrub:1
        }
    })
    tl.to(".page3 .projectContent1 .projectElemt2 .underline",{
        width:"100%",
        duration:.05,
        stagger:.3,
        delay:2,
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            start:"50% 60%",
            end:"55% 40%",
            // markers:true,
            scrub:1
        }
    })

    tl.to(".page3 .projectContent2 .projectElemt1 .underline",{
        width:"100%",
        duration:.05,
        stagger:.3,
        delay:2,
        scrollTrigger:{
            trigger:".page3 .projectContent2 ",
            scroller:"body",
            start:"50% 70%",
            end:"55% 50%",
            // markers:true,
            scrub:1
        }
    })
    tl.to(".page3 .projectContent2 .projectElemt2 .underline",{
        width:"100%",
        duration:.05,
        stagger:.3,
        delay:2,
        scrollTrigger:{
            trigger:".page3 .projectContent2",
            scroller:"body",
            start:"50% 30%",
            end:"55% 10%",
            // markers:true,
            scrub:1
        }
    })

    tl.to(".aboutHeading .underline",{
        width:"100%",
        duration:.05,
        scrollTrigger:{
            trigger:".page4",
            scroller:"body",
            start:"0% 60%",
            end:"5% 50%",
            // markers:true,
            scrub:1
        }
    })
    tl.to(".elems .underline",{
        width:"100%",
        duration:.05,
        stagger:2,
        scrollTrigger:{
            trigger:".page4 .aboutBottom",
            scroller:"body",
            start:"0% 60%",
            end:"5% 40%",
            // markers:true,
            scrub:1
        }
    })
    tl.to(".page4 .page4container .underline",{
        width:"100%",
        duration:.05,
        stagger:2,
        scrollTrigger:{
            trigger:".page4 .page4container",
            scroller:"body",
            start:"80% 80%",
            end:"85% 70%",
            // markers:true,
            scrub:1
        }
    })

    tl.to(".pageFooter .pageFootercontainer .underlineF",{
        width:"100%",
        duration:.05,
        stagger:2,
        scrollTrigger:{
            trigger:".pageFooter .pageFootercontainer",
            scroller:"body",
            start:"10% 80%",
            end:"15% 60%",
            // markers:true,
            scrub:1
        }
    })
    tl.to(".pageFooter .pageFootercontainer .underlineS",{
        width:"100%",
        duration:.05,
        stagger:2,
        scrollTrigger:{
            trigger:".pageFooter .pageFootercontainer",
            scroller:"body",
            start:"50% 80%",
            end:"55% 70%",
            // markers:true,
            scrub:1
        }
    })
    
    tl.to(".page3 .Selems .projectContent .projectElemt1 .underline",{
        width:"100%",
        duration:.05,
        stagger:.1,
        scrollTrigger:{
            trigger:".page3 .Selems .projectContent .projectElemt1",
            scroller:"body",
            start:"50% 70%",
            end:"60% 50%",
            // markers:true,
            scrub:1
        }
    })
    tl.to(".page3 .Selems .projectContent .projectElemt2 .underline",{
        width:"100%",
        duration:.05,
        stagger:.1,
        scrollTrigger:{
            trigger:".page3 .Selems .projectContent .projectElemt2",
            scroller:"body",
            start:"50% 70%",
            end:"60% 50%",
            // markers:true,
            scrub:1
        }
    })
    tl.to(".page3 .Selems .projectContent .projectElemt3 .underline",{
        width:"100%",
        duration:.05,
        stagger:.1,
        scrollTrigger:{
            trigger:".page3 .Selems .projectContent .projectElemt3",
            scroller:"body",
            start:"50% 80%",
            end:"55% 60%",
            // markers:true,
            scrub:1
        }
    })
    tl.to(".page3 .Selems .projectContent .projectElemt4 .underline",{
        width:"100%",
        duration:.05,
        stagger:.3,
        delay:2,
        scrollTrigger:{
            trigger:".page3 .Selems .projectContent .projectElemt4",
            scroller:"body",
            start:"50% 60%",
            end:"55% 40%",
            // markers:true,
            scrub:1
        }
    })

    tl.to(".page3 .Selems .projectContent .projectElemt5 .underline",{
        width:"100%",
        duration:.05,
        stagger:.3,
        delay:2,
        scrollTrigger:{
            trigger:".page3 .Selems .projectContent .projectElemt5",
            scroller:"body",
            start:"50% 60%",
            end:"55% 40%",
            // markers:true,
            scrub:1
        }
    })
    tl.to(".page3 .Selems .projectContent .projectElemt6 .underline",{
        width:"100%",
        duration:.05,
        stagger:.3,
        delay:2,
        scrollTrigger:{
            trigger:".page3 .Selems .projectContent .projectElemt6",
            scroller:"body",
            start:"50% 60%",
            end:"55% 40%",
            // markers:true,
            scrub:1
        }
    })
}

loadingAnimation();
mainAnimation();
page2crsrAnimation();
page3Animation()
sheryAnimation()
cursor();
cursorNone();
underlineAnimation();
footerAnimation();
