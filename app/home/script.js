let slideWidth = $("#slide").width()
$('#slides').css("margin-left", "-100%")

$('#slide:last-child').prependTo("#slides");

let slideduration = 1000;

$('#left-btn').click(
    function(){
        $('#slides').animate({
            left:slideWidth

        },slideduration,
            function(){
                $('#slide:last-child').prependTo("#slides")
                $("#slides").css("left","")
            }
        )
    }
)

$('#right-btn').click(
    function(){
        $('#slides').animate({
            right:slideWidth

        },slideduration,
            function(){
                $('#slide:first-child').appendTo("#slides")
                $("#slides").css("right","")
            }
        )
    }
)