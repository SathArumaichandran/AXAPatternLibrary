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
                "flag":"completed"
            },
            {
                "name":"Accessibility personas &amp; resources",
                "link":"accessibility_personas",
                "flag":"completed"
            },
            {
                "name":"Typography",
                "link":"typography",
                "flag":"completed"
            },
            {
                "name":"Colours",
                "link":"colours",
                "flag":"completed"
            },
            {
                "name":"Breakpoint / Page layout",
                "link":"breakpoint",
                "flag":"completed"
            },
            {
                "name":"Change log",
                "link":"log",
                "flag":"completed"
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
                "flag":"completed",
                "status":"update code",
                "designer":"waiho",
                "developer":"brijesh"
            },
            {
                "name":"Descriptive accordion for form buttons",
                "link":"descriptiveAccordionForFormButtons",
                "flag":"edit update code",
                "status":"new code",
                "designer":"waiho",
                "developer":"brijesh"
            },
            {
                "name":"Back to top button",
                "link":"backToTop",
                "flag":"edit update code",
                "status":"completed",
                "designer":"waiho",
                "developer":"brijesh"
            },{
                "name":"Buttons",
                "link":"buttons",
                "flag":"edit update code",
                "status":"completed",
                "designer":"waiho",
                "developer":"brijesh"
            },
            {
                "name":"Single answer buttons",
                "link":"singleanswerbutton",
                "flag":"edit update design",
                "status":"completed",
                "designer":"mandy",
                "developer":"brijesh"
            },
            {
                "name":"Single answer buttons with a clickable image",
                "link":"singleanswerbuttonImage",
                "flag":"edit update design",
                "status":"completed",
                "designer":"mandy",
                "developer":"brijesh"
            },
            {
                "name":"Check boxes",
                "link":"checkBoxes",
                "flag":"edit update design",
                "status":"update code",
                "designer":"mandy",
                "developer":"brijesh"
            },
            {
                "name":"Links",
                "link":"links",
                "flag":"edit update design",
                "status":"completed",
                "designer":"waiho",
                "developer":"brijesh"
            },
            {
                "name":"Phone number link",
                "link":"phoneNumberLink",
                "flag":"edit update design",
                "status":"update code",
                "designer":"sath",
                "developer":"brijesh"
            },
            {
                "name":"Loading",
                "link":"loading",
                "flag":"edit update design",
                "status":"new code",
                "designer":"sath",
                "developer":"brijesh"
            },
            {
                "name":"Radio buttons",
                "link":"radioButtons",
                "flag":"edit update design",
                "status":"update code",
                "designer":"mandy",
                "developer":"brijesh"
            },
            {
                "name":"Radio buttons card",
                "link":"radioButtonsCard",
                "flag":"edit update design",
                "status":"update code",
                "designer":"mandy",
                "developer":"brijesh"
            },
            {
                "name":"Dropdown",
                "link":"dropdown",
                "flag":"edit update design",
                "status":"update code",
                "designer":"mandy",
                "developer":"brijesh"
            },
            {
                "name":"Textarea",
                "link":"textarea",
                "flag":"edit update design",
                "status":"update code",
                "designer":"sath",
                "developer":"brijesh"
            },
            {
                "name":"Text box",
                "link":"textbox",
                "flag":"edit update design",
                "status":"update code",
                "designer":"sath",
                "developer":"brijesh"
            },
            {
                "name":"Toggle switch",
                "link":"toggleSwitch",
                "flag":"edit update design",
                "status":"new code",
                "designer":"sath",
                "developer":"brijesh"
            }
    
    
        ];
    
        mmLen = moleculeMenus.length;
    
        text = "<ul>";
    
        for (i = 0; i < mmLen; i++) {
            text += "<li><a href='"+ moleculeMenus[i].link +".html'>" + moleculeMenus[i].name + "<span class='flag " + moleculeMenus[i].flag + " title='" + moleculeMenus[i].flag + "'></span> <span class='flag status " + moleculeMenus[i].status + " title='" + moleculeMenus[i].status + "'></span> <span class='flag designer " + moleculeMenus[i].designer + " designer='" + moleculeMenus[i].designer + "'></span> <span class='flag developer " + moleculeMenus[i].developer + " designer='" + moleculeMenus[i].developer + "'></span></a></li>";
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
                "flag":"edit update design",
                "status":"completed",
                "designer":"waiho",
                "developer":"brijesh"
            },
            {
                "name":"Contextual help",
                "link":"contextualHelp",
                "flag":"edit update design",
                "status":"update design",
                "designer":"sath",
                "developer":"brijesh"
            },
            {
                "name":"Datepicker",
                "link":"datePicker",
                "flag":"edit update design",
                "status":"new code",
                "designer":"sath",
                "developer":"brijesh"
            },
            {
                "name":"Footer",
                "link":"footer",
                "flag":"edit update design",
                "status":"update code",
                "designer":"mandy",
                "developer":"brijesh"
            },
            {
                "name":"Header",
                "link":"header",
                "flag":"edit update design",
                "status":"update design",
                "designer":"waiho",
                "developer":"brijesh"
            },
            {
                "name":"Modal box",
                "link":"modalBox",
                "flag":"edit update design",
                "status":"new code",
                "designer":"sath",
                "developer":"brijesh"
            },
            {
                "name":"Notification banners",
                "link":"notificationBanners",
                "flag":"edit update design",
                "status":"update code",
                "designer":"waiho",
                "developer":"brijesh"
            },
            {
                "name":"Password creation",
                "link":"passwordCreation",
                "flag":"edit new design",
                "status":"new code",
                "designer":"sath",
                "developer":"brijesh"
            },
            {
                "name":"Progress bar",
                "link":"progressBar",
                "flag":"edit update design",
                "status":"update code",
                "designer":"mandy",
                "developer":"brijesh"
            },
            {
                "name":"Tab",
                "link":"tab",
                "flag":"edit update design",
                "status":"new code",
                "designer":"sath",
                "developer":"brijesh"
            },
            {
                "name":"Table",
                "link":"table",
                "flag":"edit update design",
                "status":"new code",
                "designer":"mandy",
                "developer":"brijesh"
            },
            {
                "name":"Three column summary",
                "link":"threeColumn",
                "flag":"edit update design",
                "status":"update code",
                "designer":"sath",
                "developer":"brijesh"
            },
            {
                "name":"Sticky nav bar",
                "link":"",
                "flag":"edit new design",
                "status":"new design",
                "designer":"sath",
                "developer":""
            },
            {
                "name":"Skip link",
                "link":"",
                "flag":"edit new design",
                "status":"new design",
                "designer":"",
                "developer":""
            },
            {
                "name":"Single price module",
                "link":"",
                "flag":"edit new design",
                "status":"new design",
                "designer":"sath",
                "developer":""
            },
            {
                "name":"Map",
                "link":"",
                "flag":"edit new design",
                "status":"new design",
                "designer":"",
                "developer":""
            },
            {
                "name":"Pagination",
                "link":"",
                "flag":"edit new design",
                "status":"new design",
                "designer":"",
                "developer":""
            },
            {
                "name":"Tag",
                "link":"",
                "flag":"edit new design",
                "status":"new design",
                "designer":"",
                "developer":""
            },
            {
                "name":"File upload",
                "link":"",
                "flag":"edit new design",
                "status":"new design",
                "designer":"sath",
                "developer":""
            },
            {
                "name":"Summary info card",
                "link":"",
                "flag":"edit new design",
                "status":"new design",
                "designer":"waiho",
                "developer":"brijesh"
            }

        ];
    
        cmLen = componentMenus.length;
    
        text = "<ul>";
    
        for (i = 0; i < cmLen; i++) {
            text += "<li><a href='"+ componentMenus[i].link +".html'>" + componentMenus[i].name + "<span class='flag " + componentMenus[i].flag + "'></span> <span class='flag status " + componentMenus[i].status + "'></span> <span class='flag designer " + componentMenus[i].designer + "'></span> <span class='flag developer " + componentMenus[i].developer + "'></span></a></li>";
        }
    
        text += "</ul>"
    
    
        $("#componentMenus").html(text);
    }

    hightlightMenu();
    backLog();
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

// highlight the menus

function backLog(){
    var backLogItems = $('a[href=".html"');
    
    backLogItems.each(function(){
        $(this).hide();
    })    
}