const navMenuContainer = document.getElementById('navMenu');
const navMenu = document.createElement('div');

navMenu.innerHTML = `

<div class="logoWrap pad20">
    <a href="index.html" class="wrap fltR">
        <span class="logo">
            <img src="assets/axa_logo_solid_rgb.svg" width="85" height="85" alt="AXA Brand">
        </span>
        <span class="title txt24">
            Pattern Library
        </span>
    </a>

</div>

<input id="mobMenu" name="mobMenu" class="mobMenu toggle mobTab" type="checkbox">
<label class="mobMenuLbl fltR mobTab" for="mobMenu">
<span class="hamburger">

</span>
<span class="menu">
    Menu
</span>
<span class="close dispNone">
    Close
</span>

</label>
<div class="toggleContent marT10B100 desk">
<div class="wrap fltR">

    <nav>
        <ul class="menuList">
            <li id="menus">

            </li>
            <li>
                <input type="checkbox" id="accordion1" name="accordion1" class="accordion toggle" >
                <label class="padTB15L20R50 accordionBtn" for="accordion1">
                    <span class="accordionPlus">
    
                    </span>
                    Template
                    
                </label>
                <nav id="templateMenus" class="bgWhite toggleContent dispNone">

                </nav>
            </li>
            <li>
                <input type="checkbox" id="accordion2" name="accordion2" class="accordion toggle" >
                <label class="padTB15L20R50 accordionBtn" for="accordion2">
                    <span class="accordionPlus">
    
                    </span>
                    Molecule
                    
                </label>
                <nav id="moleculeMenus" class="bgWhite toggleContent dispNone">

                </nav>
            </li>
            <li>
                <input type="checkbox" id="accordion3" name="accordion3" class="accordion toggle" >
                <label class="padTB15L20R50 accordionBtn" for="accordion3">
                    <span class="accordionPlus">
    
                    </span>
                    Component
                    
                </label>
                <nav id="componentMenus" class="bgWhite toggleContent dispNone">

                </nav>
            </li>
            
        </ul>
    </nav>


</div>



</div>


`

navMenuContainer.append(navMenu);



$(document).ready(function(){



    //menus
    {
        menus = [
            {
                "name":"Introduction",
                "link":"index"
            },
            {
                "name":"Accessibility personas &amp; resources",
                "link":"accessibility_personas"
            },
            {
                "name":"Typography",
                "link":"typography"
            },
            {
                "name":"Colours",
                "link":"colours"
            },
            {
                "name":"Breakpoint / Page layout",
                "link":"breakpoint"
            },
            {
                "name":"Change log",
                "link":"log"
            },
    
        ];
        mLen = menus.length;
    
        text = "<ul>";
    
        for (i = 0; i < mLen; i++) {
            text += "<li><a href='"+ menus[i].link +".html'>" + menus[i].name + "</a></li>";
        }
    
        text += "</ul>"
    
    
        $("#menus").html(text);
    }

    //template menus
    {
        templateMenus = [
            {
                "name":"Question set",
                "link":"question"
            },
            {
                "name":"Error states in form",
                "link":"error"
            }
    
        ];
    
        tmLen = templateMenus.length;
    
        text = "<ul>";
    
        for (i = 0; i < tmLen; i++) {
            text += "<li><a href='"+ templateMenus[i].link +".html'>" + templateMenus[i].name + "</a></li>";
        }
    
        text += "</ul>"
    
    
        $("#templateMenus").html(text);
    }

    //molecules menus
    {
        moleculeMenus = [
            {
                "name":"Accordion",
                "link":"accordion"
            },
            {
                "name":"Descriptive accordion for form buttons",
                "link":"descriptiveAccordionForFormButtons"
            },
            {
                "name":"Back to top button",
                "link":"backToTop"
            },{
                "name":"Buttons",
                "link":"buttons"
            },
            {
                "name":"Single answer buttons",
                "link":"singleanswerbutton"
            },
            {
                "name":"Single answer buttons with a clickable image",
                "link":"singleanswerbuttonImage"
            },
            {
                "name":"Check boxes",
                "link":"checkboxes"
            },
            {
                "name":"Links",
                "link":"links"
            },
            {
                "name":"Phone number link",
                "link":"phoneNumberLink"
            },
            {
                "name":"Loading",
                "link":"loading"
            },
            {
                "name":"Radio buttons",
                "link":"radioButtons"
            },
            {
                "name":"Radio buttons card",
                "link":"radioButtonsCard"
            },
            {
                "name":"Dropdown",
                "link":"dropdown"
            },
            {
                "name":"Textarea",
                "link":"textarea"
            },
            {
                "name":"Text box",
                "link":"textbox"
            },
            {
                "name":"Toggle switch",
                "link":"toggleswitch"
            }
    
    
        ];
    
        mmLen = moleculeMenus.length;
    
        text = "<ul>";
    
        for (i = 0; i < mmLen; i++) {
            text += "<li><a href='"+ moleculeMenus[i].link +".html'>" + moleculeMenus[i].name + "</a></li>";
        }
    
        text += "</ul>"
    
    
        $("#moleculeMenus").html(text);
    }
    
    //component menus
    {
        componentMenus = [
            {
                "name":"Breadcrumb",
                "link":"breadcrumb"
            },
            {
                "name":"Contextual help",
                "link":"contextualHelp"
            },
            {
                "name":"Datepicker",
                "link":"datepicker"
            },
            {
                "name":"Footer",
                "link":"footer"
            },
            {
                "name":"Header",
                "link":"header"
            },
            {
                "name":"Modal box",
                "link":"modalbox"
            },
            {
                "name":"Notification banners",
                "link":"notificationBanners"
            },
            {
                "name":"Password creation",
                "link":"passwordCreation"
            },
            {
                "name":"Progress bar",
                "link":"progressbar"
            },
            {
                "name":"Tab",
                "link":"tab"
            },
            {
                "name":"Table",
                "link":"table"
            },
            {
                "name":"Three column summary",
                "link":"threeColumn"
            }
    
    
        ];
    
        cmLen = componentMenus.length;
    
        text = "<ul>";
    
        for (i = 0; i < cmLen; i++) {
            text += "<li><a href='"+ componentMenus[i].link +".html'>" + componentMenus[i].name + "</a></li>";
        }
    
        text += "</ul>"
    
    
        $("#componentMenus").html(text);
    }

  
    
    

    

    setTimeout(function(){
        sameheight();
        hightlightMenu();
    }, 500)

        

});


// highlight the menus

function hightlightMenu(){
    var url = window.location.href;
    var menu = $('.menuList a');
    
    menu.each(function(){

        $this = this.href;
        
        if (url == $this){
            $(this).addClass("active");
            $(this).closest('ul').closest('li').find('input[type="checkbox"]').prop('checked', true);
        }
    })

    
    
}


      
    

