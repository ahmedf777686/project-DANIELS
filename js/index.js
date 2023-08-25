


let aboutscroll=$('#About').offset().top


$(window).scroll(function(){
    let scrollwindow = $(window).scrollTop()
    if(scrollwindow>aboutscroll){
        $('.navbar').css('backgroundColor','#09c')
        $('.btnscroll').show(500)
    }else{
        $('.navbar').css('backgroundColor',' transparent')
        $('.btnscroll').hide(500)
    }
   
})
let Services=$('#Services').offset().top
$(window).scroll(function(){

    let scrollwindow = $(window).scrollTop()
if(scrollwindow>Services){
    $('.item-services').css('backgroundColor','rgb(0,0,0,0.3)')
}else{
    $('.item-services').css('backgroundColor','white')
}
})


$('a[href^="#"]').click(function(e){
let x =$(e.target).attr('href')

let Servicesscroll=$(x).offset().top
    $('body').animate({scrollTop:Servicesscroll},2000 ) 
})

$('.btnscroll').click(function(){
    $('body').animate({scrollTop:0},2000)
})

$(document).ready(function(){
    $('.skitter-large').skitter({
        auto_play:false
    });
    $('.sk-folding-cube').slideUp(1000,function(){
        $('#spinner').hide(1000,function(){
            $('body').css('overflow','auto')
            $('#spinner').remove()
        })
    })
})