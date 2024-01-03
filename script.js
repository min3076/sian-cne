gsap.registerPlugin(ScrollTrigger);
    let speed = 100;
    let speed2 = 200;

    /*  SCENE 1 */
    let scene1 = gsap.timeline();
    ScrollTrigger.create({
      animation: scene1,
      trigger: ".sec1", // 객체기준범위
      pin: true, // 고정
      start: "top top", // 시작점
      end: "bottom bottom", // 끝점
      scrub: 1, // 모션바운스
      markers: true, // 개발가이드선
      onLeave: function(){
        console.log('end');
      }
    });



//배경
scene1.add('start0')
scene1.to('.cir_red', {duration:6000,opacity: 1,x: 200 , y: 200, scale:2,ease: "power1.in" },'start0')
scene1.to('.star', {scale:0},'start0')
scene1.to('.cir', {opacity:0,scale:0,ease: "power1.in" })

// scene1.add('start1')
// scene1.to('.sqa', {delay:10,duration: 100,y: 100, scale:4,ease: "power1.in" },'start1')
// scene1.to('.cir_yellow', {delay:20,duration: 100, opacity: 1, y: -20, scale:3,ease: "power1.in" },'start1')




//   ~출발선이 평등한~ 충남교육 등장
scene1.add('start1')
scene1.to('.cir_red', {duration:6000,opacity: 1,x: 400 , y: 250, scale:2,ease: "power1.in" },'start1')
scene1.to('.star', {duration:6000,opacity: 1, scale:1,rotation:180, ease: "power1.in" },'start1')
scene1.to('.cir_yellow', {delay:10,opacity: 1,duration: 6000, y: 200, scale:4,ease: "power1.in" },'start1')
scene1.to('.slash', {delay:10,duration: 6000, opacity: 1, x:0, y: -200,ease: "power1.in" },'start1')


// scene1.to('.sqa', {duration: 6000, x: -200, y: -200, scale:2,ease: "power1.in" },'start1')
// 
// scene1.to('.cir_blue', {delay:10,duration: 6000, opacity: 1, x:0, y: -200,ease: "power1.in" },'start1')


scene1.to('.sec1_tit1', {duration:600, opacity: 1, y: 0,ease: "power1.in" },'start1')
scene1.to('.sec1_tit1', {duration:600, y: -100,ease: "power1.in" })


scene1.add('start2')
scene1.to('.cir_red', {duration:6000,opacity: 1,x: 300 , y: 100, scale:2,ease: "power1.in" },'start2')
scene1.to('.star', {duration:6000,x:-100,y:300,rotation:280, ease: "power1.in" },'start2')
scene1.to('.cir_yellow', {duration: 6000, y:100,x:10,scale:6,ease: "power1.in" },'start2')
scene1.to('.slash', {duration: 6000, x:0, y: -100,ease: "power1.in" },'start2')


// scene1.to('.sqa', {duration: 6000, x: -200, y: -200, scale:2,ease: "power1.in" },'start2')
// scene1.to('.cir_yellow', {delay:10,duration: 6000, opacity: 1, y: 200, scale:4,ease: "power1.in" },'start2')
// scene1.to('.slash', {delay:10,duration: 6000, opacity: 1, x:0, y: -200,ease: "power1.in" },'start2')
// scene1.to('.cir_blue', {delay:10,duration: 6000, opacity: 1, x:0, y: -200,ease: "power1.in" },'start2')

scene1.to('.sec1_tit2', {delay:600,duration:600, opacity: 1, y: 0},'start2')
scene1.to('.sec1_tit2', {delay:600, duration:600, y: -10},'start2')







//   ~출발선이 평등한~ 충남교육 작아지기
scene1.add('start3')
scene1.to('.cir_red', {duration:6000,opacity: 1,x: 400 , y: 150, scale:1,ease: "power1.in" },'start3')
scene1.to('.star', {duration:6000,x:-150,y:400,rotation:320, scale:4, ease: "power1.in" },'start3')
scene1.to('.cir_yellow', {duration: 6000, y:0,x:-100,scale:8,ease: "power1.in" },'start3')
scene1.to('.slash', {duration: 6000, x:-100, y: -200,ease: "power1.in" },'start3')
// scene1.to('.sqa', {duration: 6000, x: -200, y: -200, scale:2,ease: "power1.in" },'start3')
// scene1.to('.cir_yellow', {delay:10,duration: 6000, opacity: 1, y: 200, scale:4,ease: "power1.in" },'start3')
// scene1.to('.slash', {delay:10,duration: 6000, opacity: 1, x:0, y: -200,ease: "power1.in" },'start3')
// scene1.to('.cir_blue', {delay:10,duration: 6000, opacity: 1, x:0, y: -200,ease: "power1.in" },'start3')


scene1.to('.sec1_tit1', {delay:600,duration:600, scale: .8, y: -230},'start3')
scene1.to('.sec1_tit2', {delay:600,duration:600, scale: .8, y: -160},'start3')







scene1.to('.sec1_tit3', {duration: 600, opacity: 1, y: 0})
scene1.to('.sec1_tit3', {duration: 600, y: -30})

scene1.to('.sec1_tit3 .on0', {duration: 0, x:0,scale:.7})
scene1.to('.sec1_tit3 .on_kor', {delay:100, duration: 0,opacity: 1,})
scene1.to('.sec1_tit3 .on1', {duration:600, opacity: 1, x:80})
scene1.to('.sec1_tit3 .on0', {delay:600,duration: 100, opacity: 1, x:20})

scene1.to('.sec1_tit1', {duration: 0, opacity:0, y: -200})
scene1.to('.sec1_tit2', {duration: 0, opacity:0, y: -160})
scene1.to('.sec1_tit3', {duration: 0, y: -60})

scene1.to('.sec1_tit3 .on_txt',  {delay:100, duration: 100, opacity:0, scale:0})
scene1.to('.sec1_tit3 .on_en', {duration: 100, opacity: 1, x:20})
  
// ~으로 시작합니다 없어지기
scene1.add('logo')
scene1.to('.cir', {delay:20,duration:1000, opacity: 1, scale:3,ease: "power1.in" },'logo')
scene1.to('.star', {duration:6000,x:-100,y:340,scale:1.5,rotation:360, ease: "power1.in" },'logo')
scene1.to('.cir_yellow', {duration: 6000, y:-100,x:80,scale:12,ease: "power1.in" },'logo')

scene1.to('.sec1_tit3 .txt', {duration:600,delay:1000, opacity:0, x: 100, ease: "power1.in" },'logo')
scene1.to('.sec1_tit3 .on0', {duration:600,delay:300, x: 100, ease: "power1.in"  },'logo')
scene1.to('.sec1_tit3 .on1',  { duration:600, x:200},'logo')

// 로고정지
scene1.to('.cir', {delay:20,duration:1000, scale:4,ease: "power1.in" },'logo2')
scene1.to('.sec1_tit3 .on0', {duration:600, x:230, y:20, scale:1,ease: "power1.in" },'logo2')
scene1.to('.sec1_tit3 .logo_copy',{duration:600, y:0, opacity: 1,ease: "power1.in" },'logo2')



// 스위치켜기
scene1.to('.sec1_tit3 .on_en', {delay:1000,duration:600, opacity:0,  x: 100})
scene1.to('.sec1_tit3 .on_kor', {duration:600, x: 180})
scene1.to('.sec1_tit3 .on_kor_txt', {duration:600, opacity:0,  x: 100})
scene1.to('.sec1_tit3 .logo_copy', {duration:600, opacity:0,  y: 100})
scene1.add('start')
scene1.to('.cir', {delay:20,duration:1000, scale:3,ease: "power1.in" },'start')
scene1.to('.sec1_tit3 .on_switch', {backgroundColor:'#040B24'})
scene1.to('.sec1_tit3 .slide', {backgroundColor:'#52CDF9'},'start')
scene1.to('.sec1_tit3 .slide', {delay:300,duration:600, x:40, backgroundColor:'#52CDF9'},'start')
scene1.to('.mv', {delay:600,opacity:1})
// 영상열리기
scene1.add('movie')
scene1.to('.mv', {opacity:1,duration:1000,scale:1,clipPath: "circle(100%)"  },'movie',1)
scene1.to('.sec1_tit3 .on0', {delay:600,duration:800,opacity:0 },'movie')
scene1.to('.text1', {opacity:1,delay:1000,duration:600,y:-200})
scene1.to('.text2', {opacity:1,delay:1000,duration:600,y:-100,ease: "power2.out",})


/* Clouds  */
/*   Bird   */
gsap.fromTo(".sec2 header", { opacity: 0,  y: 60,}, {
  y: 0,
  x: 0,
  opacity: 1 ,
  ease: "power2.out",
  scrollTrigger: {
      trigger: ".scrollElement",
      start: "15% top",
      end: "60% 100%",
      scrub: 4,
  }
})

