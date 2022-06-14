$(document).ready(function() {

    var count = 0;

    $(".awards_content .part").click(function() {

        var slideno = $(this).data("id");

        var $slider = $('.awards_slider');

        if (count == 0) {
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
                $slider.slick('slickGoTo', slideno - 1);

            }
        } else {
            $slider.slick('slickGoTo', slideno - 1);

        }
        count++;

        $(".js__p_start").simplePopup();

    });


})