// make console.log safe to use
window.console||(console={log:function(){}});

//Internet Explorer 10 in Windows 8 and Windows Phone 8 fix
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

//Android stock browser
var nua = navigator.userAgent
var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
if (isAndroid) {
  $('select.form-control').removeClass('form-control').css('width', '100%')
}

//doc ready function
$(document).ready(function() {

 	//Disable certain links
    $('a[href^=#]').click(function (e) {
        e.preventDefault()
    })

    //------------- Highlight code  -------------//
    hljs.initHighlightingOnLoad();

 	//------------- Init our plugin -------------//
 	$('body').sprFlat({
        //main color scheme for template
        //be sure to be same as colors on main.css or custom-variables.less
        colors : {
            white: '#fff',
            dark: '#79859b',
            red: '#f68484',
            blue: '#75b9e6',
            green: '#71d398',
            yellow: '#ffcc66',
            orange: '#f4b162',
            purple: '#af91e1',
            pink: '#f78db8',
            lime: '#a8db43',
            mageta: '#eb45a7',
            teal: '#97d3c5',
            black: '#000',
            brown: '#d1b993',
            gray: '#f3f5f6'
        },
        customScroll: {
            color: '#999', //color of custom scroll
            railColor: '#eee', //color of rail
            size: '5px', //size in pixels
            opacity: '0.5', //opacity
            alwaysVisible: false //disable hide in
        },
        header: {
            fixed: true //fixed header
        },
        breadcrumbs: {
            auto: true //auto populate breadcrumbs via js if is false you need to provide own markup see for example.
        },
        sidebar: {
            fixed: true,//fixed sidebar
            rememberToggle: true, //remember if sidebar is hided
            offCanvas: false //make sidebar offcanvas in tablet and small screens
        },
        sideNav : {
            hover: false, //shows subs on hover or click
            showNotificationNumbers: 'onhover',//show how many elements menu have with notifcation style values - always, onhover, never
            showArrows: true,//show arrow to indicate sub
            sideNavArrowIcon: 'en-arrow-down5', //arrow icon for navigation
            showIndicator: false,//show indicator when hover links
            notificationColor: 'red', //green, red
            subOpenSpeed: 300,//animation speed for open subs
            subCloseSpeed: 400,//animation speed for close subs
            animationEasing: 'linear',//animation easing
            absoluteUrl: false, //put true if use absolute path links. example http://www.host.com/dashboard instead of /dashboard
            subDir: '' //if you put template in sub dir you need to fill here. example '/html'
        },
        tile: {
            countNumbers: true //count numbers from 0 to specified value (required count plugin)
        },
        panels: {
            refreshIcon: 'im-spinner6',//refresh icon for panels
            toggleIcon: 'im-minus',//toggle icon for panels
            collapseIcon: 'im-plus',//colapse icon for panels
            closeIcon: 'im-close', //close icon
            showControlsOnHover: true,//Show controls only on hover.
            overlayRefreshIcon: 'im-spinner5', //loading icon in overlay
            rememberSortablePosition: true //remember position in localstorage
        },
        forms: {
            checkAndRadioTheme: 'blue', //theme for radios - aero, blue,flat, green,gray,orange,pink,purple,red,yellow
        },
        tooltips: true, //activate tooltip plugin build in bootstrap
        tables: {
            responsive: true, //make tables resposnive
            customscroll: true //ativate custom scroll for responsive tables
        },
        alerts: {
            animation: true, //animation effect toggle
            closeEffect: 'bounceOutDown' //close effect for alerts see http://daneden.github.io/animate.css/
        },
        backToTop: {
            active: true, //activate back to top
            scrolltime: 800, //scroll time speed
            imgsrc: 'assets/img/backtop.png', //image 
            width: 48, //width of image
            place: 'bottom-right', //position top-left, top-right, bottom-right, bottom-left
            fadein: 500, //fadein speed
            fadeout: 500, // fadeOut speed
            opacity: 0.5, //opacity
            marginX: 1, //X margin
            marginY: 2 //Y margin
        },
        dropdownMenu: {
            animation: true, //animation effect for dropdown
            openEffect: 'fadeInDown',//open effect for menu see http://daneden.github.io/animate.css/
        }
 	});

    //get settings object
    var sprObject = $('body').data('sprFlat');
    var settings = sprObject.settings;

    //------------- Bootstrap tooltips -------------//
    $("[data-toggle=tooltip]").tooltip ({container:'body'});
    $(".tip").tooltip ({placement: 'top', container: 'body'});
    $(".tipR").tooltip ({placement: 'right', container: 'body'});
    $(".tipB").tooltip ({placement: 'bottom', container: 'body'});
    $(".tipL").tooltip ({placement: 'left', container: 'body'});
    //------------- Bootstrap popovers -------------//
    $("[data-toggle=popover]").popover ();

    //------------- Qick post wysiwyg editor and tags -------------//
    tinymce.init({
        selector: ".wysiwyg",
        menubar : false,
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste"
        ],
        toolbar: "bold italic strikethrough bullist numlist blockquote hr alignleft aligncenter alignright alignjustify link unlink code image media fullscreen"
    });
    $('.tags1').tagsInput({width: 'auto'});

});
