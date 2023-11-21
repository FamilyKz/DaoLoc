jQuery(document).ready(function(){

    $("#to_BF img").mouseenter(function(){
        $(this).css({ 
            "transform": "scale(0.8)",
            "transition": "transform 0.3s",
        });
        setTimeout(() => {
            $(this).css({ 
                "transform": "scale(1)",
                "transition": "transform 0.3s",
            });
        },300)
        setTimeout(() => {
            $(this).css({ 
                "transform": "scale(0.8)",
                "transition": "transform 0.3s",
            });
        },500)
        setTimeout(() => {
            $(this).css({ 
                "transform": "scale(1)",
                "transition": "transform 0.3s",
            });
        },800) 

    }).mousedown(function(){   
        $(this).css({
            "transform": "scale(0.8)",
            "transition": "transform 0.3s",
        }); 
        setTimeout(() => {           
            $(this).css({ 
                "transform": "scale(1)",
                "transition": "transform 0.3s",
            });
        },300)   
        setTimeout(() => {           
            window.open('https://familykz.github.io/BuiNgocAnh.','_blank');  
        },600)                 
           
    }).mouseleave(function(){
        $(this).css({ 
            '-webkit-transition' : '-webkit-filter 0.3s linear',
        });
    })


//  
    var control_view_about = false;
    $("#view_about img").mouseenter(function(){
        $(this).css({
            "transform": "rotate(60deg)",
            "transform": "scale(0.8)",
            "transition": "transform 0.5s",
        });
        setTimeout(() => {
            $(this).css({ 
                "transform": "rotate(90deg)",
            });
        },300)   
        setTimeout(() => {
            $(this).css({ 
                "transform": "rotate(180deg)",
            });
        },600)
       
    }).mousedown(function(){    
        $(this).css({
            "transform": "scale(0.8)",
            "transition": "transform 0.3s",
        }); 
        setTimeout(() => {
            $(this).css({ 
                "transform": "scale(1)",
                "transition": "transform 0.3s",
            });
        },300)

        if(!control_view_about){
            $("#view_about img").attr("src","dev/image/rhombus_in.png");
            $('#Info,#Avatar').fadeOut(300);
            $('#clock').fadeIn(300)
            control_view_about = true;
        }
        else{
            $("#view_about img").attr("src","dev/image/rhombus.png");
            $('#Info,#Avatar').fadeIn(300);
            $('#clock').fadeOut(300)
            control_view_about = false;
        }

    }).mouseleave(function(){
        $(this).css({ 
            "transform": "scale(1)",
            "transition": "transform 0.3s",
        });
    });

// 
    $("#button_to_facebook").mouseenter(function(){
        $(this).css({
            "background-color":"white",
            "transition":"background-color 0.3s ease",
            'width':'59%;',
        });
        $('#Info #button_to_facebook img:nth-child(3)').show(500)
        $('#button_to_facebook p').css({
            'padding': '0px 8.335px 0px 8.335px',
            'transition': '0.3s all ease',
        });
                
    }).mousedown(function(){
        $(this).css({
            "transform": "scale(0.9)",
            "transition": "transform 0.3s",
        }); 
        setTimeout(() => {           
            $(this).css({ 
                "transform": "scale(1)",
                "transition": "transform 0.3s",
            });
        },300)   
        setTimeout(() => {           
            window.open('https://www.facebook.com/Leaves.kz/','_blank');  
        },600)    
    }).mouseleave(function(){
        $(this).css({ 
            "background-color":"unset",
            "transition":"background-color 0.3s ease",
        });
        $('#Info #button_to_facebook img:nth-child(3)').hide(500)
        $('#button_to_facebook p').css({
            'padding': '0px 16.67px 0px 5.556px',
            'transition': '0.3s all ease',
        });
    });


// 
    var control_music_click = false;
    $(document).one("click", function(e){
        if (e.target.id != '#button_control_music' && $(e.target).parents('#button_control_music').length == 0) {
            $("#button_control_music img").fadeOut(301);
            control_music_click = true;
            setTimeout(() => { 
                $("#button_control_music p").text("On");
                $("#button_control_music img").attr("src","dev/image/music.png").fadeIn(301);
                $("audio")[0].play();                
            },300);      
        }
    });

    $("#button_control_music").mouseenter(function(){
        $(this).css({
            "background-color":"white",
            "transition":"background-color 0.3s ease",
        });
        $("#button_control_music img").css({
            "transition": "transform 0.5s",
            "transition":"background-color 0.3s ease",
            "filter": "brightness(0) saturate(100%) invert(0%) sepia(100%) saturate(9%) hue-rotate(221deg) brightness(99%) contrast(104%)",
        });
        $("#button_control_music p").show(500);
        

    }).mousedown(function(){
        $(this).css({
            "transform": "scale(0.9)",
            "transition": "transform 0.3s",
        }); 
        setTimeout(() => {           
            $(this).css({ 
                "transform": "scale(1)",
                "transition": "transform 0.3s",
            });
            $("#button_control_music img").fadeOut(301);
        },300); 

        setTimeout(() => {           
            if(!control_music_click){
                $("#button_control_music p").text("On");
                $("#button_control_music img").attr("src","dev/image/music.png").fadeIn(301);
                $("audio")[0].play();     
                control_music_click = true;
            }
            else {                
                $("#button_control_music p").text("Off")
                $("#button_control_music img").attr("src","dev/image/music_off.png").fadeIn(301);    
                $("audio")[0].pause();
                control_music_click = false;
            }  
        },600) 

    }).mouseleave(function(){
        $("#button_control_music p").hide(500);
        $(this).css({
            "background-color":"unset",
            "transition":"background-color 0.3s ease",
        });
        $("#button_control_music img").css({
            "transition": "transform 0.5s",
            "transition":"background-color 0.3s ease",
            "filter": "brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(16%) hue-rotate(206deg) brightness(107%) contrast(100%)",
        });
    });

    ramdom_music = Math.floor(Math.random()*20);
    $("audio").attr("src","dev/album/"+ramdom_music+".mp3");

    $("audio").on('ended', function() {
        $("audio")[0].pause();      
        setTimeout(() => { 
            ramdom_music = Math.floor(Math.random()*20);
            $("audio").attr("src","dev/album/"+ramdom_music+".mp3");
            $("audio")[0].play();                
        },23000); 
    });






//    
    var dot = false;
    setInterval(function () {
        
        if(!dot){
            $("#clock div:nth-child(2)").text(".");
            dot = true;
        }
        else{
            $("#clock div:nth-child(2)").text(":");
            dot = false;
        }
        var hour = new Date().getUTCHours() + 7;
        var minimute = new Date().getUTCMinutes();

        if(hour > 24){
            hour = hour - 24
        }

        if(hour < 10){
            $("#clock div:nth-child(1)").text('0'+ hour);
        } 
        else{
            $("#clock div:nth-child(1)").text(hour);
        }

        if(minimute < 10){
            $("#clock div:nth-child(3)").text('0'+ minimute);
        }
        else{
            $("#clock div:nth-child(3)").text(minimute);
        }
    }, 1000);



})
    