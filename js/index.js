/*main-txt*/

$(function () {
    $('.main-title').animate({
        top: 0,
        opacity: 1
    }, 400);
    $('.main-title2').animate({
        top: 0,
        opacity: 1
    }, 400);

});

/********************메뉴************************/
$(function () {
    $('.smenu_wrap li').hover(function () {
        var smenu_I = $(this).closest('ul').index();

        if (smenu_I == 0) {
            $('.inner-header nav li').eq(0).css({
                'background': 'url(img/menu_effect.png)',
                'background-position': 'bottom',
                'background-repeat': 'no-repeat',
            })
        }
        if (smenu_I == 1) {
            $('.inner-header nav li').eq(1).css({
                'background': 'url(img/menu_effect.png)',
                'background-position': 'bottom',
                'background-repeat': 'no-repeat',
            })
        }
        if (smenu_I == 2) {
            $('.inner-header nav li').eq(2).css({
                'background-image': 'url(img/menu_effect.png)',
                'background-position': 'bottom',
                'background-repeat': 'no-repeat'
            })
        }
        if (smenu_I == 3) {
            $('.inner-header nav li').eq(3).css({
                'background-image': 'url(img/menu_effect.png)',
                'background-position': 'bottom',
                'background-repeat': 'no-repeat'
            })
        }
        if (smenu_I == 4) {
            $('.inner-header nav li').eq(4).css({
                'background-image': 'url(img/menu_effect.png)',
                'background-position': 'bottom',
                'background-repeat': 'no-repeat'
            })
        }
    }, function () {
        $('.inner-header nav li').removeAttr('style')
    });
});

/************************************************/
/*스크롤*/

/*$(window).scroll(function () {
    if ($('nav').offset().top > 50) {
        $('.inner-header img').attr('src', 'img/logo.png');
    } else {
        $('.inner-header img').attr('src', 'img/logo2.png');
    }
});*/

$(function () {
    $('nav').mouseover(function () {
        $('.smenu').slideDown();
        $('header').addClass('on');
        $('.inner-header img').attr('src', 'img/logo.png');
    });

    $('.smenu').mouseleave(function () {
        $('.smenu').stop().slideUp();
        $('header').removeClass('on');
        $('.inner-header img').attr('src', 'img/logo2.png');
    });
});
/*혜택*/
$(function () {
    var isPlay = false;

    //초기설정
    $('.container').prepend($('.container div').last());
    $('.container').css('margin-left', '-325px');


    $('.right-button').click(function () {

        if (!isPlay) {
            isPlay = true;

            $('.container').append($('.container div').first()).css('margin-left', '0');
            $('.container').animate({
                'margin-left': '-=325px'
            }, 500, function () {
                isPlay = false;
            });
        }



        //var isPlay = false;

        /*if (!isPlay) {
            isPlay = true;
            $('.container').animate({
                'margin-left': '-=325'
            }, 500, function () {
                $('.container').append($('.container div').first()).css({
                    marginLeft : '+=325'
                });
                $('.container').animate({
                    'margin-left': '+=325'
                }, 0);
            })
        }
        isPlay = false;*/
        //return false;
    });

    $('.left-button').click(function () {
        if (!isPlay) {
            isPlay = true;

            $('.container').animate({
                marginLeft: 0
            }, 600, function () {
                $('.container').prepend($('.container div').last()).css('margin-left', '-325px');

                isPlay = false;
            });
        }

        /*if (!isPlay) {
            isPlay = true;
            $('.container').prepend($('.container div').last());
            $('.container').css('left', '-=325');
            $('.container').stop().animate({
                'left': '+=325'
            }, 500, function () {
                isPlay = false;
            });
        }
        */
        //return false;
    });


});

/*fadein slide*/
$(function () {

    autocall = setInterval(fadeTxt, 5000);

    $('.pro-gallery-txt').hover(function () {
        clearInterval(autocall);

    }, function () {
        autocall = setInterval(fadeTxt, 5000);
    });

});

function fadeTxt() {
    var ftxt = $('.pro-gallery-txt div').first();
    var ntxt = ftxt.next();
    var hidetxt = $('.pro-gallery-txt div')

    hidetxt.hide()
    ntxt.addClass('active').fadeIn(800, function () {
        $('.pro-gallery-txt').append(ftxt);
        ftxt.removeClass('active');
    });
}

/*프로그램 슬라이드 210914*/

$(function(){
    $('.pro-btn > img').click(function(){
        var prev = $(this).hasClass('pro_left');
        var next = $(this).hasClass('pro_right');

        if (next){
            clearInterval(autocall);
            fadeTxt();
            fadeImg();
            return false
        }

        if (prev){
            prev_fadeImg();
            prev_fadeTxt();
            function prev_fadeTxt(){
                var ltxt = $('.pro-gallery-txt > div').last();
                var hidetxt = $('.pro-gallery-txt div');

                hidetxt.removeClass('active').hide();
                ltxt.addClass('active').fadeIn(800); 
                $('.pro-gallery-txt').prepend(ltxt);
            }

            function prev_fadeImg(){
                var hideimg =  $('.pro-gallery-img img');
                var limg = hideimg.last();

                
                hideimg.removeClass('active').hide();
                limg.addClass('active').fadeIn(800);
                $('.pro-gallery-img').prepend(limg);
            }
            return false
        }
    })
})
/****************************************************/

var autocall;

$(function () {

    autocall = setInterval(fadeImg, 5000);

    $('.pro-gallery-img').hover(function () {
        clearInterval(autocall);

    }, function () {
        autocall = setInterval(fadeImg, 5000);
    });

});

/*********************************************************/

$(function () {
    $('.pro-gallery-img').click(fadeImg);
});

function fadeImg() {
    var fimg = $('.pro-gallery-img img').first();
    var nimg = fimg.next(); //2번 이미지

    nimg.hide().addClass('active').fadeIn(800, function () {
        $('.pro-gallery-img').append(fimg);

        fimg.removeClass('active');
    });
}

$(function () {
    var ftxt = $('.pro-gallery-txt li').first();
    var ntxt = ftxt.next();
    ntxt.hide().addClass('active').fadeIn(800, function () {
        $('.des').append(ftxt);

        ftxt.removeClass('active');
    });
});


/*    $('.pro_right').click(function () {

        $('.txt-effect').animate({
            'width': '200px'
        }, 0);*/


/****************************************************/

/*프로그램*/

/*

$(function () {
    $('.des-On').fadeIn(0)
    $('.txt-effect').animate({
        'width': '200px'
    }, 1500)

    $('.pro_right').click(function () {

        $('.txt-effect').animate({
            'width': '0px'
        }, 0);

        var slide1 = $('.pro-img1').hasClass('pro-On')
        var slide2 = $('.pro-img2').hasClass('pro-On')
        var slide3 = $('.pro-img3').hasClass('pro-On')

        function proImg_right() {
            $('.pro-gallery').animate({
                'left': '-=1360'
            }, 500, function () {
                $('.pro-gallery').append($('.pro-gallery li').first());
                $('.pro-gallery').css('left', '+=1360');
            })
        }

        if (slide1) {
            $('.pro-img2').addClass('pro-On');
            $('.pro-img1').removeClass('pro-On');
            $('.pro-img3').removeClass('pro-On');

            $('.des-On').fadeOut(600)

            $('.pro-txt2').addClass('des-On');
            $('.pro-txt1').removeClass('des-On');
            $('.pro-txt3').removeClass('des-On');

            $('.des-On').fadeIn(600)
            $('.txt-effect').animate({
                'width': '200px'
            }, 1500)

            proImg_right()
        }
        if (slide2) {
            $('.pro-img3').addClass('pro-On');
            $('.pro-img1').removeClass('pro-On');
            $('.pro-img2').removeClass('pro-On');

            $('.des-On').fadeOut(600)

            $('.pro-txt3').addClass('des-On');
            $('.pro-txt1').removeClass('des-On');
            $('.pro-txt2').removeClass('des-On');

            $('.des-On').fadeIn(600)
            $('.txt-effect').animate({
                'width': '200px'
            }, 1500)

            proImg_right()
        }
        if (slide3) {
            $('.pro-img1').addClass('pro-On');
            $('.pro-img2').removeClass('pro-On');
            $('.pro-img3').removeClass('pro-On');

            $('.des-On').fadeOut(600)

            $('.pro-txt1').addClass('des-On');
            $('.pro-txt2').removeClass('des-On');
            $('.pro-txt3').removeClass('des-On');

            $('.des-On').fadeIn(600)
            $('.txt-effect').animate({
                'width': '200px'
            }, 1500)

            proImg_right()
        }
    })

    $('.pro_left').click(function () {
        $('.txt-effect').animate({
            'width': '0px'
        }, 0);

        var slide1 = $('.pro-img1').hasClass('pro-On')
        var slide2 = $('.pro-img2').hasClass('pro-On')
        var slide3 = $('.pro-img3').hasClass('pro-On')

        function proImg_left() {
            $('.pro-gallery').prepend($('.pro-gallery li').last());
            $('.pro-gallery').css('left', '-=1360');
            $('.pro-gallery').stop().animate({
                'left': '+=1360'
            }, 500)
        }

        if (slide1) {
            $('.pro-img3').addClass('pro-On');
            $('.pro-img1').removeClass('pro-On');
            $('.pro-img2').removeClass('pro-On');

            $('.des-On').fadeOut(300)

            $('.pro-txt3').addClass('des-On');
            $('.pro-txt1').removeClass('des-On');
            $('.pro-txt2').removeClass('des-On');

            $('.des-On').fadeIn(300)
            $('.txt-effect').animate({
                'width': '200px'
            }, 1500)

            proImg_left()
        }
        if (slide2) {
            $('.pro-img1').addClass('pro-On');
            $('.pro-img2').removeClass('pro-On');
            $('.pro-img3').removeClass('pro-On');

            $('.des-On').fadeOut(300)

            $('.pro-txt1').addClass('des-On');
            $('.pro-txt2').removeClass('des-On');
            $('.pro-txt3').removeClass('des-On');

            $('.des-On').fadeIn(300)
            $('.txt-effect').animate({
                'width': '200px'
            }, 1500)

            proImg_left()

        }
        if (slide3) {
            $('.pro-img2').addClass('pro-On');
            $('.pro-img1').removeClass('pro-On');
            $('.pro-img3').removeClass('pro-On');

            $('.des-On').fadeOut(300)

            $('.pro-txt2').addClass('des-On');
            $('.pro-txt1').removeClass('des-On');
            $('.pro-txt3').removeClass('des-On');

            $('.des-On').fadeIn(300)
            $('.txt-effect').animate({
                'width': '200px'
            }, 1500)

            proImg_left()
        }
    })

    setInterval(function () {
        $('.pro_right').trigger('click');
    }, 1500);
})*/




/*유튜브*/
$(function () {


    $('.youtube-wrap ul').css('width', $('.youtube-wrap ul li').width() * $('.youtube-wrap ul li').size());

    $('.youtube-wrap ul li:last').prependTo('.youtube-wrap ul');

    var chW = $('.youtube-wrap ul li').width();
    $('.youtube-wrap ul').css('margin-left', -chW);


    $('.tv_right').click(function () {
        $('.youtube-wrap ul').animate({
            marginLeft: '-=' + $('.youtube-wrap ul li').width()
        }, 'slow', function () {
            $('.youtube-wrap ul li:first').appendTo('.youtube-wrap ul');
            $('.youtube-wrap ul').css('margin-left', -chW);
        })

    });


    $('.tv_left').click(function () {
        $('.youtube-wrap ul').animate({
            marginLeft: '+=' + chW
        }, 'slow', function () {
            $('.youtube-wrap ul li:last').prependTo('.youtube-wrap ul');
            $('.youtube-wrap ul').css('margin-left', -chW);
        });
    });



});

/*....dsadasdassaㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㅁㅇㅁ*/
var prot = 0;
var pno = 0;
const totcnt = 6;

$(function () {
    $(document).on("mousewheel DOMMouseScroll", function (e) {

        e.preventDefault();

        if (prot === 1) return false;
        prot = 1;

        var evt = window.event || e;

        var delta = evt.detail ? evt.detail : evt.wheelDelta;

        if (delta > 0) {
            pno--;
        } else {
            pno++;
            if (pno === totcnt) pno = totcnt - 1;
        }

        var pagepos = $('.page').eq(pno).offset().top;
        $('html,body').stop().animate({
            scrollTop: pagepos + 'px'
        }, 800, function () {
            prot = 0;
        });


    });

});


/*탑버튼*/
$(function () {
    $(window).scroll(function () {
        var scTop = $(this).scrollTop();
        if (scTop > 100) {
            $('.totop').fadeIn();
        } else {
            $('.totop').fadeOut();
        }

    });
    $('.totop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });


});

/****************/


/*패밀리사이트*/
$(function () {
    $('.family-box').click(function () {
        if ($('.sub-site').css('display') == 'none') {
            $('.sub-site').show();
        } else {
            $('.sub-site').hide();
        };
    });

});



/***************/
$(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
});
