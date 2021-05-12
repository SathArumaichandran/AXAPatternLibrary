function sameheight(){
    if($('.desk').is(":visible") || $('.tab').is(":visible")){

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

function overlay(){
    setTimeout(function(){
        $('.overlay').fadeOut();
    },500);
    
}

function feedback(){
    var feedbackContainer = document.querySelector('.feedback');
    var feedWrap = document.createElement('div');

    feedWrap.innerHTML = `
        <p>
            <strong>
                Help improve this page
            </strong>
        </p>
        <p>
            Please share your ideas, suggestions or comments.
        </p>
        <p>
            <a href="" id="emailFeedback" class="btn">
                Email us
            </a>
        </p>
    `;
    feedbackContainer.append(feedWrap);

    
    var email = "sath.arumaichandran@swiftcover.com";
    var pageURL = window.location.href;
    var mail = "mailto:"+email+"?Subject="+pageURL;

    var emailBtn = document.querySelector('#emailFeedback');
    emailBtn.setAttribute('href',mail);
}



$(document).ready(function(){
    sameheight();
    overlay();
    feedback();
});



$(window).resize(function(){

    setTimeout(function(){
        sameheight();
    }, 500)
})
    