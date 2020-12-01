$(document).ready(function() {

    // $('#link1').on('click', function(){
    //     $('#intro-left').css('padding-top','175px');
    // })

    // $('#link2').on('click', function(){
    //     $('#intro-left').css('padding-top','60px');
    // })
    
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
