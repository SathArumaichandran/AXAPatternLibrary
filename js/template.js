function sameheight(){
    if($('.desk').is(":visible") || $('.tab').is(":visible")){

        for(i=0; i < 10; i++){
            console.log("i = "+ i)
        }


        //row1
        var row1 = 0;
        $('.row1').each(function(){  
            if($(this).innerHeight() > row1){  
                row1 = $(this).innerHeight();  
            }
        });   
        $('.row1').css({
            minHeight: row1
        });

        //row2
        var row2 = 0;
        $('.row2').each(function(){  
            if($(this).innerHeight() > row2){  
                row2 = $(this).innerHeight();  
            }
        });    

        $('.row2').css({
            minHeight: row2
        });

        //row3
        var row3 = 0;
        $('.row3').each(function(){  
            if($(this).innerHeight() > row3){  
                row3 = $(this).innerHeight();  
            }
        });    
        $('.row3').css({
            minHeight: row3
        });

        //row4
        var row4 = 0;
        $('.row4').each(function(){  
            if($(this).innerHeight() > row4){  
                row4 = $(this).innerHeight();  
            }
        });    
        $('.row4').css({
            minHeight: row4
        });
   
    }else{
        //row1
        $('.row1').css({
            minHeight: 0
        });

        //row2
        $('.row2').css({
            minHeight: 0
        });

        //row3
        $('.row3').css({
            minHeight: 0
        });

        //row4
        $('.row4').css({
            minHeight: 0
        });
    }

}





$(window).resize(function(){

    setTimeout(function(){
        sameheight();
    }, 500)
})
    