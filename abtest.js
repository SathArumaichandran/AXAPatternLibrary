// Ensures the optimizely object is defined globally using
window['optimizely'] = window['optimizely'] || [];

// Optimizely and GA event configuration

function fireEvent(eventLabelName){
    window['optimizely'].push({
        type: 'event',
        eventName: eventLabelName
    });
    window.dataLayer.push({
        event: 'optimizely-event',
        eventAction: 'Van Contact IVR Experiment',
        eventLabel : eventLabelName
    });
}


// Van Contact - Live Chat button configuration

var chatCTA = document.querySelectorAll('.chatCTA');

chatCTA.forEach(function(e){
    e.addEventListener('click', function(){
        fireEvent('vanIVRliveChat');
    });
});

// Van Contact - Phone button configuration

var phoneCTA = document.querySelectorAll('.phoneCTA');

phoneCTA.forEach(function(e){
    e.addEventListener('click', function(){
        fireEvent('vanIVRPhone');
    });
});

// Van Contact - Log in button configuration

var loginCTA = document.querySelectorAll('.loginCTA');

loginCTA.forEach(function(e){
    e.addEventListener('click', function(){
        fireEvent('vanIVRLogin');
    });
});

// Van Contact - Create account button configuration

var createAccountCTA = document.querySelectorAll('.registrationCTA');

createAccountCTA.forEach(function(e){
    e.addEventListener('click', function(){
        fireEvent('vanIVRCreateAccount');
    });
});

// Van Contact - Get a quote button configuration

var quoteCTA = document.querySelectorAll('.quoteCTA');

quoteCTA.forEach(function(e){
    e.addEventListener('click', function(){
        fireEvent('vanIVRGetQuote');
    });
});

// Van Contact - retrieve a quote button configuration

var retrieveQuoteCTA = document.querySelectorAll('.retrievequoteCTA');

retrieveQuoteCTA.forEach(function(e){
    e.addEventListener('click', function(){
        fireEvent('vanIVRRetreiveQuote');
    });
});

// Van Contact - Email link configuration

var emailCTA = document.querySelectorAll('.emailLink');

emailCTA.forEach(function(e){
    e.addEventListener('click', function(){
        fireEvent('vanIVREmail');
    });
});

// Van Contact - General buttons configuration

var vanIVRBtns = document.querySelectorAll('.generalSelection');

vanIVRBtns.forEach(function(e){
    var eventLabelName = e.innerHTML.trim();
    
    e.addEventListener('click',function(){

        window['optimizely'].push({
            type: 'event',
            eventName: 'vanIVRButton',
            tags: {
                'title': eventLabelName
            }

        });

        window.dataLayer.push({
            event: 'optimizely-event',
            eventAction: 'Van Contact IVR Experiment',
            eventLabel : eventLabelName
        });

    });

});


// Retrieve the utils library
var utils = window["optimizely"].get('utils');

// Wait for the footer element to appear in the DOM, then change the color
utils.waitForElement('.btnSelfServe');
//var btnSelfServe = document.querySelectorAll('.btnSelfServe');


utils.waitForElement('.btnSelfServe').then(function(btnSelfServe) {
  
    btnSelfServe.forEach(function(e){
        e.style.background = 'red';
        e.addEventListener('click',function(){
            alert('this is working');
          });
    });

  
 
});

