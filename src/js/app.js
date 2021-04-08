

import '../scss/app.scss'

import jquery from './jquery'
import validate from './validate'

jquery()
validate()
  
	const nav = () => {
	    
	    let navItem = document.getElementsByClassName('nav__link')
	    let mobileWrap = document.getElementById('mobile_menu')
	    let navArr = [].slice.call(navItem)
	    let mobileNav = navArr.map((nav) => {
	        let id = nav.href
	        return '<a class="nav-mobile__menu_item" href="' + id + '">' + nav.innerText + '</a>'
	    })
	    
	    mobileWrap.innerHTML = mobileNav.join(' ')
	}
	nav()


    const setCanonicalHref = () => {
        let target = document.querySelectorAll("link[rel='canonical']"),
            protocol = window.location.protocol,
            hostname = window.location.hostname
            target[0].href = protocol + '//' + hostname + '/'
    }
    setCanonicalHref()


	const onFocusChangeColorSvg = () => {
		jQuery('img.form__input_icon').each(function(){
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');
		
			jQuery.get(imgURL, function(data) {
				var $svg = jQuery(data).find('svg');
		
				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}
		
				$svg = $svg.removeAttr('xmlns:a');
		
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}
		
				$img.replaceWith($svg);
		
			}, 'xml');
		
		});
	}

	onFocusChangeColorSvg()


	const ajaxSendData = () => {

		var formph = $('#try_form');	
        formph.validate({
        submitHandler: function(formph) {
            var fd = new FormData( formph );
            $.ajax({
                async: true,
                url: "", 
                type: "POST",             
                data: fd,
                cache: false,  
                contentType: false,			
                processData: false,      
                success: function(data) {
                    if(data == 'done'){
                        // console.log(data);
                        formph.reset();
                    } else {
                        // console.log(data);
                        formph.reset();
                        // $('#thankyou').addClass('done')
                        // $('.modal__label').removeClass('active')
                        // document.getElementById('modal').hidden = true
                        // document.body.style.overflow = "inherit"
                        // setTimeout(()=>{
                        //     $('#thankyou').removeClass('done')
                        // }, 5500);
                    }
                },
                error: function(data){
                    console.log('error');
                    console.log(data);
                }
            });
            return false;
        },
        rules: {
            try_email: {
                required: true,
                email: true
            }
        },
        messages: {
            try_email: {
                required: "Required field!",
                email: "Email must be in name@domain.com format"
            },
            
        },
            errorElement : "div",
            focusInvalid: true,
            errorClass: "input_error"
        });


		var formph = $('#contacts_form');	
        formph.validate({
        submitHandler: function(formph) {
            var fd = new FormData( formph );
            $.ajax({
                async: true,
                url: "", 
                type: "POST",             
                data: fd,
                cache: false,  
                contentType: false,			
                processData: false,      
                success: function(data) {
                    if(data == 'done'){
                        // console.log(data);
                        formph.reset();
                    } else {
                        // console.log(data);
                        formph.reset();
                        // $('#thankyou').addClass('done')
                        // $('.modal__label').removeClass('active')
                        // document.getElementById('modal').hidden = true
                        // document.body.style.overflow = "inherit"
                        // setTimeout(()=>{
                        //     $('#thankyou').removeClass('done')
                        // }, 5500);
                    }
                },
                error: function(data){
                    console.log('error');
                    console.log(data);
                }
            });
            return false;
        },
        rules: {
			contacts_name: {
				required: true
			},
            contacts_email: {
                required: true,
                email: true
            },
			contacts_text: {
				required: true
			}
        },
        messages: {
			contacts_name: {
				required: "Required field!"
			},
            contacts_email: {
                required: "Required field!",
                email: "Email must be in name@domain.com format"
            },
			contacts_text: {
				required: "Required field!"
			}
        },
            errorElement : "div",
            focusInvalid: true,
            errorClass: "input_error"
        });
		
	}

	ajaxSendData()

    $(document).ready(function(){
        setTimeout(function(){
            window.scrollTo(0, 0);
        }, 1);
    });

    const toggleClassToMenu = () => {
        $(document).ready(function() {
            $(window).scroll(function() {
              if ($(document).scrollTop() > 50) {
                $('.header__inner').addClass("colored");
              } else {
                $('.header__inner').removeClass("colored");
              }
            });
            $(window).scroll(function() {
                var scrollDistance = $(window).scrollTop();
                
                $('section').each(function(i) {
                    if ($(this).position().top <= (scrollDistance + 200)) {
                        $('.nav a.active').removeClass('active');
                        $('.nav a').eq(i).addClass('active');
                    }
                });
            }).scroll();
          });
    }
    toggleClassToMenu()


    const scrollToAnchor = () => {
        $(document).ready(function() {
            $("a[href^='#']").click(function (e) {
        	
            	e.preventDefault();
            	var position = $($(this).attr("href")).offset().top
            	let header = $('.header__inner')
            	if(header.hasClass('colored')) {
            	   position -= 150
            	} else {
            	   position -= 195
            	}
            	
            	let coord = {
            	    scrollTop: position
            	}
            	console.log(coord.scrollTop)
            	$("body, html").animate(coord);
            
            })
        })
    }
    scrollToAnchor()


    const videoContainer = () => {
        let video = document.getElementById('video'),
            thumb = document.getElementById('video_thumb'),
            start = document.getElementById('video_start'),
            close = document.getElementById('video_close'),
            watch = document.getElementById('video_watch')
            close.hidden = true
            video.hidden = true
            
            start.onclick = () => {
                close.hidden = false
                start.hidden = true
                thumb.hidden = true
                video.hidden = false
                video.src += "?autoplay=1"
            }

            close.onclick = () => {
                close.hidden = true
                start.hidden = false
                thumb.hidden = false
                video.hidden = true
                video.src += "?autoplay=0"
            }

            watch.onclick = () => {
                close.hidden = false
                start.hidden = true
                thumb.hidden = true
                video.hidden = false
                video.src += "?autoplay=1"
            }
    }
	videoContainer()


    const onHandleClickOpenMenu = () => {
        let buttonOpen = document.getElementById('menu_open'),
            buttonClose = document.getElementById('menu_close'),
            menu = document.getElementById('menu_wrap'),
            menuItems = document.getElementsByClassName('nav-mobile__menu_item')
            menuItems = [].slice.call(menuItems)

        menu.hidden = true
        
        buttonOpen.onclick = () => {
            menu.hidden = false
        }

        buttonClose.onclick = () => {
            menu.hidden = true
        }

        menuItems.map(item => {
            item.onclick = () => {
                menu.hidden = true
            }
        })
    }
    onHandleClickOpenMenu()
	
	