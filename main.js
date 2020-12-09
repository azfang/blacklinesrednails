$(document).ready(function() {

    // $("html").mouseover(pageLoad);
    // function pageLoad() {
    //   scrollLeftUp.play();
    //   scrollRightUp.play();
    // }
    window.onload = function() {
      scrollLeftUp.play();
      scrollRightUp.play();
    };

    // var scrollLeftUp = anime({
    //   targets: '#div-left3',
    //   translateY: [
    //     {value: -50, duration: 500},
    //   ],
    //   opacity: [
    //     {value: 1, duration: 500},
    //   ],
    //   easing: 'easeInOutQuad',
    //   autoplay: false
    // });

    // var scrollRightUp = anime({
    //   targets: '#div-right3',
    //   translateY: [
    //     {value: -50, duration: 500, delay: 400},
    //   ],
    //   opacity: [
    //     {value: 1, duration: 500, delay: 400},
    //   ],
    //   easing: 'easeInOutQuad',
    //   autoplay: false
    // });

    var scrollLeftUp = anime({
      targets: '#div-left3',
      translateY: [
        {value: -1450, duration: 1000, delay: 200},
      ],
      easing: 'easeInOutQuad',
      autoplay: false
    });

    var scrollRightUp = anime({
      targets: '#div-right3',
      translateY: [
        {value: -1450, duration: 1000, delay: 600},
      ],
      easing: 'easeInOutQuad',
      autoplay: false
    });

    
    $("#fireescape").mouseover(function(){
        $(".left-txt").css("font-size", "1vw");
        }, function(){
        $(".left-txt").css("font-size", "0.89vw");
      });

    $("#fireescape").mouseleave(function(){
        $(".left-txt").css("font-size", "0.89vw");
        }, function(){
        $(".left-txt").css("font-size", "1vw");
      });
    
    $("#untitled").mouseover(function(){
        $(".right-txt").css("font-size", "1vw");
        }, function(){
        $(".right-txt").css("font-size", "0.885vw");
      });

    $("#untitled").mouseleave(function(){
        $(".right-txt").css("font-size", "0.885vw");
        }, function(){
        $(".right-txt").css("font-size", "1vw");
      });

      $( "#secondary-title" ).mouseover(function() {
        // $("html").css("background-color", "black");
        // $("body").css("color", "red");
      });

// Add smooth scrolling to all links
  // Define selector for selecting 
        // anchor links with the hash 
        let anchorSelector = 'a[href^="#"]'; 
      
        // Collect all such anchor links 
        let anchorList =  
            document.querySelectorAll(anchorSelector); 
          
        // Iterate through each of the links 
        anchorList.forEach(link => { 
            link.onclick = function (e) { 
      
                // Prevent scrolling if the 
                // hash value is blank 
                e.preventDefault(); 
          
                // Get the destination to scroll to 
                // using the hash property 
                let destination =  
                    document.querySelector(this.hash); 
          
                // Scroll to the destination using 
                // scrollIntoView method 
                destination.scrollIntoView({ 
                    behavior: 'smooth' 
                }); 
            } 
        });

        $("#div-left3").scroll(function() {
            $( ".maintitle" ).fadeOut( "slow" );
          });
})

