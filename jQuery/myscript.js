$(function(){

//menu 1
// $(".main > li").hover(function(){
//     $(this).find(".sub").stop().slideDown();
// }, function(){
//     $(this).find(".sub").stop().slideUp();
// })//

//menu 2
$(".main > li").mouseover(function(){
    $(this).find(".sub").stop().slideDown();
})
$(".main > li").mouseout(function(){
    $(this).find(".sub").stop().slideUp();

})

//slide 
// 이미지가 아닌 백그라운드로 넣으면 animate-css 하는 방법 안됨
var n =0;
setInterval(l_move , 3000);
function l_move(){
    if(n == 2){
                n=0;
            }else{
                n++;
            }
            var pos = n * (-100) + "%" ;
            console.log(pos)
    $(".left_move").animate({left:pos},500);
    }//


//pop
$(".layer, .pop").hide();
$(".p_click").click(function(){
    $(".layer, .pop").show();
})
$(".close").click(function(){
    $(".layer, .pop").hide();
})





})//jquery