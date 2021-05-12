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

            <li class="pad20">
                <a href="dl/AXAPatternLibrary.zip" class="btn">
                    Download Pattern Library
                </a>
            </li>

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
                "link":"index",
                "flag":"completed",
                "note":"some note"
            },
            {
                "name":"Accessibility personas &amp; resources",
                "link":"accessibility_personas",
                "flag":"new code"
            },
            {
                "name":"Typography",
                "link":"typography",
                "flag":"update code"
            },
            {
                "name":"Colours",
                "link":"colours",
                "flag":"new design"
            },
            {
                "name":"Breakpoint / Page layout",
                "link":"breakpoint",
                "flag":"update design"
            },
            {
                "name":"Change log",
                "link":"log",
                "flag":"update design"
            },
    
        ];
        mLen = menus.length;
    
        text = "<ul>";
    
        for (i = 0; i < mLen; i++) {
            text += "<li><a href='"+ menus[i].link +".html'>" + menus[i].name + "<span class='flag " + menus[i].flag + "'></span></a></li>";
        }
    
        text += "</ul>"
    
    
        $("#menus").html(text);
    }

    //template menus
    {
        templateMenus = [
            {
                "name":"Question set",
                "link":"question",
                "flag":"completed"
            },
            {
                "name":"Error states in form",
                "link":"error",
                "flag":"completed"
            }
    
        ];
    
        tmLen = templateMenus.length;
    
        text = "<ul>";
    
        for (i = 0; i < tmLen; i++) {
            text += "<li><a href='"+ templateMenus[i].link +".html'>" + templateMenus[i].name + "<span class='flag " + templateMenus[i].flag + "'></span></a></li>";
        }
    
        text += "</ul>"
    
    
        $("#templateMenus").html(text);
    }

    //molecules menus
    {
        moleculeMenus = [
            {
                "name":"Accordion",
                "link":"accordion",
                "flag":"completed"
            },
            {
                "name":"Descriptive accordion for form buttons",
                "link":"descriptiveAccordionForFormButtons",
                "flag":"completed"
            },
            {
                "name":"Back to top button",
                "link":"backToTop",
                "flag":"completed"
            },{
                "name":"Buttons",
                "link":"buttons",
                "flag":"completed"
            },
            {
                "name":"Single answer buttons",
                "link":"singleanswerbutton",
                "flag":"completed"
            },
            {
                "name":"Single answer buttons with a clickable image",
                "link":"singleanswerbuttonImage",
                "flag":"completed"
            },
            {
                "name":"Check boxes",
                "link":"checkboxes",
                "flag":"completed"
            },
            {
                "name":"Links",
                "link":"links",
                "flag":"completed"
            },
            {
                "name":"Phone number link",
                "link":"phoneNumberLink",
                "flag":"completed"
            },
            {
                "name":"Loading",
                "link":"loading",
                "flag":"completed"
            },
            {
                "name":"Radio buttons",
                "link":"radioButtons",
                "flag":"completed"
            },
            {
                "name":"Radio buttons card",
                "link":"radioButtonsCard",
                "flag":"completed"
            },
            {
                "name":"Dropdown",
                "link":"dropdown",
                "flag":"completed"
            },
            {
                "name":"Textarea",
                "link":"textarea",
                "flag":"completed"
            },
            {
                "name":"Text box",
                "link":"textbox",
                "flag":"completed"
            },
            {
                "name":"Toggle switch",
                "link":"toggleswitch",
                "flag":"completed"
            }
    
    
        ];
    
        mmLen = moleculeMenus.length;
    
        text = "<ul>";
    
        for (i = 0; i < mmLen; i++) {
            text += "<li><a href='"+ moleculeMenus[i].link +".html'>" + moleculeMenus[i].name + "<span class='flag " + moleculeMenus[i].flag + "'></span></a></li>";
        }
    
        text += "</ul>"
    
    
        $("#moleculeMenus").html(text);
    }
    
    //component menus
    {
        componentMenus = [
            {
                "name":"Breadcrumb",
                "link":"breadcrumb",
                "flag":"completed"
            },
            {
                "name":"Contextual help",
                "link":"contextualHelp",
                "flag":"completed"
            },
            {
                "name":"Datepicker",
                "link":"datepicker",
                "flag":"completed"
            },
            {
                "name":"Footer",
                "link":"footer",
                "flag":"completed"
            },
            {
                "name":"Header",
                "link":"header",
                "flag":"completed"
            },
            {
                "name":"Modal box",
                "link":"modalbox",
                "flag":"completed"
            },
            {
                "name":"Notification banners",
                "link":"notificationBanners",
                "flag":"completed"
            },
            {
                "name":"Password creation",
                "link":"passwordCreation",
                "flag":"completed"
            },
            {
                "name":"Progress bar",
                "link":"progressbar",
                "flag":"completed"
            },
            {
                "name":"Tab",
                "link":"tab",
                "flag":"completed"
            },
            {
                "name":"Table",
                "link":"table",
                "flag":"completed"
            },
            {
                "name":"Three column summary",
                "link":"threeColumn",
                "flag":"completed"
            }
    
    
        ];
    
        cmLen = componentMenus.length;
    
        text = "<ul>";
    
        for (i = 0; i < cmLen; i++) {
            text += "<li><a href='"+ componentMenus[i].link +".html'>" + componentMenus[i].name + "<span class='flag " + componentMenus[i].flag + "'></span></a></li>";
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


      
    

