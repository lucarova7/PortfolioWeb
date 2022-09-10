jQuery(document).ready(function(){
    $('#name').mousemove(function(e){
      var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
      var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
      $('#name').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(17,170,104,.8), '+rYP/8+'px '+rXP/60+'px rgba(0,0,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
    });
 })