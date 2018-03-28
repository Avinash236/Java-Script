$(document).ready(function () {
    var speed = 400;
    var autoswitch = true;
    var autoswitchspeed = 4000



    $('.slide').first().addClass('active');

    $('.slide').hide();

    $('.active').show();


    //for next slide

    $('#next').on('click',function () {
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
        $('.slide').first().addclass('active');
        }
        else{
            $('.oldActive').next().addClass('active');
        }


        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);



    });


    //for previous slide
    $('#prev').on('click',function () {
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addclass('active');
        }
        else{
            $('.oldActive').prev().addClass('active');
        }


        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);

    });


    //For auto-switching of slides

    if(autoswitch == true){
        setInterval(function () {
            $('.active').removeClass('active').addClass('oldActive');
            if($('.oldActive').is(':last-child')){
                $('.slide').first().addclass('active');
            }
            else{
                $('.oldActive').next().addClass('active');
            }


            $('.oldActive').removeClass('oldActive');
            $('.slide').fadeOut(speed);
            $('.active').fadeIn(speed);




        },autoswitchspeed);
    }



});