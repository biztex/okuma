$(document).ready(function() {
    $(".navigation").click(function() {
        $(this).children("span").toggleClass("activity");
        if ($(this).parent().parent().parent().hasClass("change")) {
            $(this).parent().parent().parent().removeClass("change")
        }

        $(".nav_menu").fadeToggle("slow");
        $(".menu_items .menu_item_link").toggleClass("active");
    });


    try {
        $(".search_filtering .item_list a").click(function(e) {

            localStorage.setItem("search", $(this).data('id'));
        });
        $(".search_filtering .item_list_year a").click(function(e) {

            localStorage.setItem("search_year", $(this).data('id'));
        });

    } catch (error) {

    }


    try {
        $(".search_filtering .item_list a:nth-child(" + localStorage.getItem("search") + ")").addClass("active");
        $(".search_filtering .item_list_year a:nth-child(" + localStorage.getItem("search_year") + ")").addClass("active");

    } catch (error) {

    }



})

try {
    var textHeader = document.querySelector('.year_ani');
    var year_height = getOffset(textHeader);
} catch (error) {

}

$(function() {
    var shrinkHeader = 100;
    var changeHeader = $(".video").outerHeight();
    var textHeader = $(".year_ani");
    var greyheight = $(".grey_back").offset().top - 50;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();

        if (scroll >= shrinkHeader) {
            $('header').addClass('shrink');
        } else {
            $('header').removeClass('shrink');


        }
        if (scroll >= changeHeader) {
            $('header').addClass('change');
            $('.top').fadeIn("slow");


        } else {
            $('header').removeClass('change');
            $('.top').fadeOut("slow");

        }

        if (scroll >= 650) {
            try {
                $(".drawing").addClass("active");

            } catch (error) {

            }
        } else {
            try {
                $(".drawing").removeClass("active");

            } catch (error) {

            }

        }
        try {
            if (scroll > year_height.top - 550) {
                const CLASSNAME = "-visible";
                $(".year_ani").addClass(CLASSNAME);

            }
        } catch (error) {

        }


        try {
            if (scroll > greyheight) {
                $(".grey_back").css({ "position": "fixed", "top": "91px" });
            } else {
                $(".grey_back").css({ "position": "absolute", "top": "0" });

            }

        } catch (err) {

        }

    });

    function getCurrentScroll() {
        return window.pageYOffset;
    }

    try {
        $('.policy_slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 800,
            autoplaySpeed: 5000,
            pauseOnFocus: false,
            pauseOnHover: false,
            dots: true,
        }).slickAnimation();
    } catch (error) {

    }



    $('.okuma .slide').slick({
        arrows: false, //左右の矢印はなし
        autoplay: true, //自動的に動き出すか。初期値はfalse。
        autoplaySpeed: 0, //自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
        speed: 6900, //スライドのスピード。初期値は300。
        infinite: true, //スライドをループさせるかどうか。初期値はtrue。
        pauseOnHover: false, //オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
        pauseOnFocus: false, //フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
        cssEase: 'linear', //動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
        slidesToShow: 4, //スライドを画面に4枚見せる
        slidesToScroll: 1, //1回のスライドで動かす要素数
        responsive: [{
                breakpoint: 769, //モニターの横幅が769px以下の見せ方
                settings: {
                    slidesToShow: 2, //スライドを画面に2枚見せる
                }
            },
            {
                breakpoint: 500, //モニターの横幅が426px以下の見せ方
                settings: {
                    slidesToShow: 1, //スライドを画面に1.5枚見せる
                }
            }
        ]
    });

    $('.slider_sec').slick({
        arrows: false, //左右の矢印はなし
        autoplay: true, //自動的に動き出すか。初期値はfalse。
        autoplaySpeed: 0, //自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
        speed: 6900, //スライドのスピード。初期値は300。
        infinite: true, //スライドをループさせるかどうか。初期値はtrue。
        pauseOnHover: false, //オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
        pauseOnFocus: false, //フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
        cssEase: 'linear', //動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
        slidesToShow: 4, //スライドを画面に4枚見せる
        slidesToScroll: 1, //1回のスライドで動かす要素数
        responsive: [{
                breakpoint: 769, //モニターの横幅が769px以下の見せ方
                settings: {
                    slidesToShow: 2, //スライドを画面に2枚見せる
                }
            },
            {
                breakpoint: 500, //モニターの横幅が426px以下の見せ方
                settings: {
                    slidesToShow: 1, //スライドを画面に1.5枚見せる
                }
            }
        ]
    });

    $('.info .info_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        dots: false,
        vertical: true,
        verticalScrolling: true,
    });




    $('.technical_video').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        dots: true,
    });

    $('.products .products_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        dots: true,
        responsive: [{
                breakpoint: 500, //モニターの横幅が769px以下の見せ方
                settings: {
                    centerMode: true,
                    centerPadding: '55px',
                    infinite: true,
                    variableWidth: false,
                    slidesToShow: 1, //スライドを画面に2枚見せる
                }
            },
            {
                breakpoint: 768, //モニターの横幅が769px以下の見せ方
                settings: {
                    slidesToShow: 2, //スライドを画面に2枚見せる
                }
            },
        ]
    });
    $('.products.recommend .products_slide').slick('unslick');
    $('.products.recommend .products_slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        responsive: [{
            breakpoint: 500, //モニターの横幅が769px以下の見せ方
            settings: {
                centerMode: true,
                centerPadding: '55px',
                infinite: true,
                variableWidth: false,
                slidesToShow: 1, //スライドを画面に2枚見せる
            }
        }, ]
    });


    $(".top").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 1000);

        return false;
    })
});


$('p[data-slide]').click(function(e) {
    e.preventDefault();
    $(this).addClass("active");
    $('p[data-slide]').not(this).removeClass("active");
    var slideno = $(this).data('slide');
    $('.technical_video').slick('slickGoTo', slideno - 1);
});


$('.technical_video').on('init', function(event, slick, currentSlide) {

    $('p[data-slide]').eq(0).addClass("active");
    const CurrentSlideDom = $(slick.$slides.get(currentSlide)).find(".part");

    const title = CurrentSlideDom.eq(0).html();
    $(".technical_slide .technical_text .technical_intro.pc .part").html(title);

});
$('.technical_video')
    .on('afterChange', function(event, slick, currentSlide, nextSlide) {

        var CurrentSlideDom = $(slick.$slides.get(currentSlide));
        $("p[data-slide]:nth-child(" + parseInt(currentSlide + 1) + ")").addClass("active");
        $("p[data-slide]:not(:nth-child(" + parseInt(currentSlide + 1) + "))").removeClass("active");
        var title = CurrentSlideDom.find(".part").html()
        $(".technical_slide .technical_text .technical_intro.pc .part").html(title);

    });


try {

    var items = $(".info_box.info .part");
    var numItems = items.length;

    if (numItems == 0) {

        items = $(".info_box.column .part");
        numItems = items.length;
    }
    var perPage = 6;

    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function(pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
} catch (err) {

}




// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
    $('.eachTextAnime').each(function() {
        var elemPos = $(this).offset().top + 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("appeartext");


        } else {
            $(this).removeClass("appeartext");
        }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function() {
    EachTextAnimeControl(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述

//spanタグを追加する
var element = $(".eachTextAnime");
element.each(function() {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function(t, i) {
        if (t !== " ") {
            if (i < 10) {
                textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
            } else {
                var n = i / 10;
                textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
            }

        } else {
            textbox += t;
        }
    });
    $(this).html(textbox);
});

EachTextAnimeControl(); /* アニメーション用の関数を呼ぶ*/






$('.policy_slide').on('init', function(event, slick, currentSlide) {
    const CurrentSlideDom = $(slick.$slides.get(currentSlide)).find(".slide_title");
    const CLASSNAME = "-visible";
    CurrentSlideDom.eq(0).addClass(CLASSNAME);

});

$('.policy_slide')
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {

        const CurrentSlideDom = $(slick.$slides.get(currentSlide));
        const nextSlideDom = $(slick.$slides.get(nextSlide)).find(".slide_title");
        const CLASSNAME = "-visible";
        let $target = CurrentSlideDom.find(".slide_title");
        if (nextSlideDom.hasClass(CLASSNAME)) {
            $(this).removeClass(CLASSNAME);
        }
        $target.removeClass(CLASSNAME);


    });

$('.policy_slide')
    .on('afterChange', function(event, slick, currentSlide, nextSlide) {

        const CurrentSlideDom = $(slick.$slides.get(currentSlide));
        const CLASSNAME = "-visible";
        let $target = CurrentSlideDom.find(".slide_title");
        $target.addClass(CLASSNAME);


    });




// $('.info_slider').on('init', function(event, slick, currentSlide) {
//     const CurrentSlideDom = $(slick.$slides.get(currentSlide)).find(".title").eq(0);
//     if (CurrentSlideDom.text().trim().length > 20) {
//         var temp = CurrentSlideDom.text();
//         var swithText = temp.trim().substr(0, 20) + "...";
//         CurrentSlideDom.text(swithText);
//     }
// });




// $('.info_slider')
//     .on('afterChange', function(event, slick, currentSlide, nextSlide) {

//         const CurrentSlideDom = $(slick.$slides.get(nextSlide)).find(".title").eq(0);
//         if (CurrentSlideDom.text().trim().length > 20) {
//             var temp = CurrentSlideDom.text();
//             var swithText = temp.trim().substr(0, 20) + "...";
//             CurrentSlideDom.text(swithText);
//         }


//     });



try {

    var $slider = $('.productSlider');

    if ($slider.length) {
        var currentSlide;
        var slidesCount;
        var sliderCounter = document.createElement('div');
        var sliderCounterDiv = document.createElement('div');
        sliderCounter.classList.add('slider__counter');
        sliderCounterDiv.classList.add('slider__counter_div');
        var sliderSpan = document.createElement('span');
        var sliderSpanTotal = document.createElement('span');
        sliderCounter.appendChild(sliderCounterDiv).appendChild(sliderSpan);
        sliderCounter.appendChild(sliderCounterDiv).appendChild(sliderSpanTotal);
        sliderSpan.classList.add('slider__counter_span');
        sliderSpanTotal.classList.add('slider__counter_total');


        var updateSliderCounter = function(slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;

            if (currentSlide < 10) {
                $(sliderSpan).text('0' + currentSlide);
            } else {
                $(sliderSpan).text(currentSlide);

            }
            if (slidesCount < 10) {
                $(sliderSpanTotal).text('/0' + slidesCount);
            } else {
                $(sliderSpanTotal).text('/' + slidesCount);

            }
        };

        $slider.on('init', function(event, slick) {
            $slider.append(sliderCounter);
            updateSliderCounter(slick);
        });

        $slider.on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });

        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            dots: false,
            autoplaySpeed: 5000,
            pauseOnFocus: false,
            pauseOnHover: false,
        });
    }
} catch (error) {

}

try {

    var $slider = $('.slider_item');

    if ($slider.length) {
        var currentSlide;
        var slidesCount;
        var sliderCounter = document.createElement('div');
        var sliderCounterDiv = document.createElement('div');
        sliderCounter.classList.add('slider__counter');
        sliderCounterDiv.classList.add('slider__counter_div');
        var sliderSpan = document.createElement('span');
        var sliderSpanTotal = document.createElement('span');
        sliderCounter.appendChild(sliderCounterDiv).appendChild(sliderSpan);
        sliderCounter.appendChild(sliderCounterDiv).appendChild(sliderSpanTotal);
        sliderSpan.classList.add('slider__counter_span');
        sliderSpanTotal.classList.add('slider__counter_total');


        var updateSliderCounter = function(slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;

            if (currentSlide < 10) {
                $(sliderSpan).text('0' + currentSlide);
            } else {
                $(sliderSpan).text(currentSlide);

            }
            if (slidesCount < 10) {
                $(sliderSpanTotal).text('/0' + slidesCount);
            } else {
                $(sliderSpanTotal).text('/' + slidesCount);

            }
        };

        $slider.on('init', function(event, slick) {
            $slider.append(sliderCounter);
            updateSliderCounter(slick);
        });

        $slider.on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });

        $slider.slick();
    }
} catch (error) {

}

try {



    function setWidth() {
        let proBox = document.querySelector(".productDetail_box");
        let vw;
        vw = proBox.offsetWidth;

        let win;
        win = window.innerWidth;

        let rl;
        rl = proBox.offsetLeft;

        let rt;
        if (win < vw) {
            rt = vw - (win / vw) * 200;

        } else {
            rt = vw + rl - 220;
        }


        console.log(rt);
        document.documentElement.style.setProperty('--vw', `${vw}px`);
        document.documentElement.style.setProperty('--greyvw', `${rt}px`);
        document.documentElement.style.setProperty('--rl', `${rl}px`);
    }

    // 2.初期化
    setWidth();

    // 3.ブラウザのサイズが変更された時・画面の向きを変えた時に再計算する
    window.addEventListener('resize', setWidth);
} catch (error) {

}

jQuery(document).ready(function($) {
    'use strict';
    try {
        $.Scrollax();

    } catch (error) {

    }
});


function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}


$(".productDetail_box_downloadAnchor a").on('click', function(event) {
    console.log("click00");
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});