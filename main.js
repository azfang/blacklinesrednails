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
        $(".left-txt").css("font-size", "0.885vw");
      });

    $("#fireescape").mouseleave(function(){
        $(".left-txt").css("font-size", "0.885vw");
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

    // $("#div-txtL1").mouseover(function(){
    //     $("#title-left").html("PART ONE");
    // });

    // $("#div-txtL1").mouseleave(function(){
    //     $("#title-left").html("BLACK LINES");
    // });

    // $("#div-txtL2").mouseover(function(){
    //     $("#title-left").html("PART ONE");
    // });

    // $("#div-txtL2").mouseleave(function(){
    //     $("#title-left").html("BLACK LINES");
    // });



      document.querySelectorAll('a[href^="#"]').forEach($anchor => {
        $anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start' //scroll to top of the target element
            });
        });
    });
})

    // document.querySelectorAll('a[href^="."]').forEach($anchor => {
    //     $anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start', //scroll to top of the target element
    //         });
    //     });
    // });
  
// })
