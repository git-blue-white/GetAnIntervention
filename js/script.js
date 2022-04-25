$('.header__burger').click(function(event){
  $('.header__burger, .header_menu').toggleClass('active');
});
var tempWidth = 2000;
$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    dots:true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 15000000000000,
    easing: 'ease',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000000000000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    waitForAnimate: true,
    variableWidth: true,
  });
  $(".form-outline .form-control").focusout(function (evt) {
    const list = this.classList;
    if ( this.value != '' )
      list.add("edited");
    else
      list.remove("edited");
  });
  $("#subBtn").click(function(){
    var inputvals = $('.form-outline .form-control');
    let i;
    for (i = 0; i<inputvals.length-1; i++)
    {
      str = '#form1'+(i+1);
      $(str).parent().removeClass('tooltipdanger');
      $(str).parent().find('span').remove();
      $(str).css('border-color', 'silver');
      $(str).next().css('color', 'silver');
    }
    for (i = 0; i<inputvals.length-1; i++)
    {
      if(inputvals[i].value === "")
      {
        str = '#form1'+(i+1);
        $(str).parent().addClass('tooltipdanger');
        $(str).parent().append("<span class='tooltiptext'>This field can't be empty. Please fill it in.</span>");
        $(str).css('border-color', '#ff7777');
        $(str).next().css('color', '#ff7777');
        break;
      }
    }
    if(i === inputvals.length-1)
      window.location.replace("Thank you.html");
  });
  $(".form-outline .form-control").focusin(function () {
    data = $(this);
    data.parent().removeClass('tooltipdanger');
    data.parent().find('span').remove();
    data.css('border-color', 'silver');
    data.next().css('color', 'silver');
  });

  var resizefinishevent;
  window.addEventListener("resize", function()
  {
    
    $('body .header').css('background-position', 'right 0');
    lWidth = $(window).width();
    if(lWidth>1232)
    {
      val1 = 128-(1440-lWidth)/2;
      ote = '0px ' + val1 + 'px ';
      ote1 = '100px ' + val1 + 'px ';
      otep = '38px ' + val1 + 'px ';
      val2 = 110-(1440-lWidth)/2;
      oozp = '20px ' + val2 + 'px ';
      //128px
      $('.header .bar_title_form').css('margin', ote);
      $('.main .second_div').css('margin', ote);
      $('.main .third_div').css('margin', ote1);
      $('.left_block h2').css('padding-left', val1 + 'px');
      $('.left_block ul').css('padding-left', val1 + 'px');
      $('.footer p').css('padding', otep);
      $('.footer .right_title ul').css('padding', otep);
      //110px
      $('.main .first_div').css('padding', oozp);
      $('.main .fourth_div').css('margin-left', val2);
      $('.main .fourth_div').css('margin-right', val2);
    }
    
    if(lWidth < 1101)
    {
      $('#myVideo1').css('width', lWidth);
      mLeft = (-514+(1100-lWidth)*124/250) + 'px';
      toppx = (lWidth-1100)/3.7 + 'px';
      $('#myVideo1').css('margin-left', mLeft);
      $('#myVideo1').css('top', toppx);
      
      if(lWidth>480)
      {
        titop = 480-(1100-lWidth)/1.7 + 'px';
        $('.right_block .title').css('top', titop);
      }
      ftop = 767-(1100-lWidth)*3/5 + 'px';
      $('.footer').css('top', ftop);
    }
    if(lWidth < 1084)
    {
      if(lWidth>580)
        $('body .header').css('background-position', '-1320px -20px');
    }
    if(lWidth < 476)
    {
      titop = 110-(475-lWidth)*2/5 + 'px !important';
      $('.right_block .title').css('top', titop);
    }
    
    
    //$('.child_container_two_section .desc_child_two_section').css('width', 675-(1440-lWidth)/6);
    
    //if(lWidth>1550)
    // $('.child_container_two_section').css('margin-left', 50-(1440-lWidth)/50 + '%');
    //$('.child_container_two_section').css('margin-left', 50-(1440-lWidth)/85 + '%');
    $('.fifth_div .right_block .fullscreen-bg_video').css('margin-left', -400-(1440-lWidth)/2);
    $('.right_block .title').css('left', 493-(1440-lWidth)/2);
    $('.right_block .content').css('margin-left', 50-(1440-lWidth)/24 + '%');
    otttt = '0px '+ (85-(580-lWidth)) +'px !important';
    if(lWidth<581)
      $('.second_div .main_container_two_section div.card_cont').css('margin', otttt);
    
    clearTimeout(resizefinishevent);
    resizefinishevent = setTimeout(reloadEvent(), 250);
    if(lWidth<300)
     $('body').css('resize', 'none');


    //Control Layout of SlideShow
    if(lWidth<1220)
    {
      if(lWidth>1100)
        $('.main_container_two_section .child_container_two_section').css('margin-left', (50-(1220-lWidth)*3.5/120) + '%');
      else if(lWidth>900)
        $('.main_container_two_section .child_container_two_section').css('margin-left', (50-(1100-lWidth)*9/200) + '%');
      else if(lWidth>790)
        $('.main_container_two_section .child_container_two_section').css('margin-left', (48-(900-lWidth)*3/50) + '%');
      else if(lWidth>700)
        $('.main_container_two_section .child_container_two_section').css('margin-left', (48-(790-lWidth)/15) + '%');
      else if(lWidth>640)
        $('.main_container_two_section .child_container_two_section').css('margin-left', (45-(700-lWidth)/20) + '%');
      else if(lWidth>540)
        $('.main_container_two_section .child_container_two_section').css('margin-left', (42-(640-lWidth)*2/25) + '%');
      else if(lWidth>470)
        $('.main_container_two_section .child_container_two_section').css('margin-left', (38-(540-lWidth)/14) + '%');
      else if(lWidth>410)
        $('.main_container_two_section .child_container_two_section').css('margin-left', (41-(470-lWidth)/10) + '%');
      else if(lWidth>359)
        $('.main_container_two_section .child_container_two_section').css('margin-left', (37-(410-lWidth)*9/50) + '%');
      else if(lWidth>300)
        $('.main_container_two_section .child_container_two_section').css('margin-left', (33-(360-lWidth)*11/60) + '%');
    }
    reloadEvent();
  });
});
reloadEvent();
function reloadEvent()
{
  lWidth = $(window).width();
  if(lWidth>1232)
  {
    val1 = 128-(1440-lWidth)/2;
    ote = '0px ' + val1 + 'px ';
    ote1 = '100px ' + val1 + 'px ';
    otep = '38px ' + val1 + 'px ';
    val2 = 110-(1440-lWidth)/2;
    oozp = '20px ' + val2 + 'px ';
    //128px
    $('.header .bar_title_form').css('margin', ote);
    $('.main .second_div').css('margin', ote);
    $('.main .third_div').css('margin', ote1);
    $('.left_block h2').css('padding-left', val1 + 'px');
    $('.left_block ul').css('padding-left', val1 + 'px');
    $('.footer p').css('padding', otep);
    $('.footer .right_title ul').css('padding', otep);
    //110px
    $('.main .first_div').css('padding', oozp);
    $('.main .fourth_div').css('margin-left', val2);
    $('.main .fourth_div').css('margin-right', val2);
  }
  else 
  {
    val1 = 24;
    ote = '0px ' + val1 + 'px ';
    ote1 = '100px ' + val1 + 'px ';
    otep = '38px ' + val1 + 'px ';
    val2 = 6;
    oozp = '20px ' + val2 + 'px ';
    //128px
    $('.header .bar_title_form').css('margin', ote);
    $('.main .second_div').css('margin', ote);
    $('.main .third_div').css('margin', ote1);
    $('.left_block h2').css('padding-left', val1 + 'px');
    $('.left_block ul').css('padding-left', val1 + 'px');
    $('.footer p').css('padding', otep);
    $('.footer .right_title ul').css('padding', otep);
    //110px
    $('.main .first_div').css('padding', oozp);
    $('.main .fourth_div').css('margin-left', val2);
    $('.main .fourth_div').css('margin-right', val2);
  }
  if(lWidth < 1101)
  {
    $('#myVideo1').css('width', lWidth);
    mLeft = (-514+(1100-lWidth)*124/250) + 'px';
    toppx = (lWidth-1100)/3.7 + 'px';
    $('#myVideo1').css('margin-left', mLeft);
    $('#myVideo1').css('top', toppx);
    
    if(lWidth>480)
    {
      titop = 480-(1100-lWidth)/1.7 + 'px';
      $('.right_block .title').css('top', titop);
    }
    ftop = 767-(1100-lWidth)*3/5 + 'px';
    $('.footer').css('top', ftop);
  }
  if(lWidth < 1084)
  {
    if(lWidth>580)
      $('body .header').css('background-position', '-1320px -20px');
  }
  if(lWidth>480)
  {
    titop = 480-(1100-lWidth)/1.7 + 'px';
    $('.right_block .title').css('top', titop);
  }

  //$('.child_container_two_section .desc_child_two_section').css('width', 675-(1440-lWidth)/6);
  
  //if(lWidth>1550)
  //  $('.child_container_two_section').css('margin-left', 50-(1440-lWidth)/50 + '%');
  //$('.child_container_two_section').css('margin-left', 50-(1440-lWidth)/85 + '%');
  $('#myVideo').css('margin-left', -400-(1440-lWidth)/2);
  $('.right_block .title').css('left', 493-(1440-lWidth)/2);
  $('.right_block .content').css('margin-left', 50-(1440-lWidth)/24 + '%');
  otttt = '0px '+ (85-(580-lWidth)) +'px !important';
  if(lWidth<581)
    $('.second_div .main_container_two_section div.card_cont').css('margin', otttt);
  
  
  if(lWidth<1220)
  {
    if(lWidth>1100)
      $('.main_container_two_section .child_container_two_section').css('margin-left', (50-(1220-lWidth)*3.5/120) + '%');
    else if(lWidth>900)
      $('.main_container_two_section .child_container_two_section').css('margin-left', (50-(1100-lWidth)*9/200) + '%');
    else if(lWidth>790)
      $('.main_container_two_section .child_container_two_section').css('margin-left', (48-(900-lWidth)*3/50) + '%');
    else if(lWidth>700)
      $('.main_container_two_section .child_container_two_section').css('margin-left', (48-(790-lWidth)/15) + '%');
    else if(lWidth>640)
      $('.main_container_two_section .child_container_two_section').css('margin-left', (45-(700-lWidth)/20) + '%');
    else if(lWidth>540)
      $('.main_container_two_section .child_container_two_section').css('margin-left', (42-(640-lWidth)*2/25) + '%');
    else if(lWidth>470)
      $('.main_container_two_section .child_container_two_section').css('margin-left', (38-(540-lWidth)/14) + '%');
    else if(lWidth>410)
      $('.main_container_two_section .child_container_two_section').css('margin-left', (41-(470-lWidth)/10) + '%');
    else if(lWidth>359)
      $('.main_container_two_section .child_container_two_section').css('margin-left', (37-(410-lWidth)*9/50) + '%');
    else if(lWidth>300)
      $('.main_container_two_section .child_container_two_section').css('margin-left', (33-(360-lWidth)*11/60) + '%');
  }
}

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

var video1 = document.getElementById("myVideo1");
var btn1 = document.getElementById("myBtn1");
function playButton() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "<i class='fas fa-pause'></i>";
    } else {
        video.pause();
        btn.innerHTML = "<i class='fas fa-play'>";
    }
    if (video1.paused) {
      video1.play();
      btn1.innerHTML = "<i class='fas fa-pause'></i>";
  } else {
      video1.pause();
      btn1.innerHTML = "<i class='fas fa-play'>";
  }
}

(function($){
  var $canvas,
      fnInitWaves,
      fnDrawWave,
      tmrResize;
  
  fnDrawWave = function(canvas){
    var $this = $(canvas), $outer, iWidth, iHeight, iMidWidth, iQuartWidth, iLineWidth, iFillLineWidth, ctx, ctx1;
      
      $outer = $this.parent();
      
      iWidth = $outer.outerWidth();
      iHeight = 105;
      iMidWidth = 720;
      
      iLineWidth = 6;
      iFillLineWidth = 1;

      $this.attr({width: iWidth, height: 105});
      
      ctx = canvas.getContext('2d');
	    ctx1 = canvas.getContext('2d');
	  
      // Wave init
      //ctx.lineWidth = iLineWidth;
      ctx.strokeStyle = '#f5f5f5';
      ctx.fillStyle = '#f5f5f5';
      ctx.globalAlpha = 0.3;
      //ctx.fillRect(0,0,iWidth,iHeight);
      ctx.beginPath();
      ctx.moveTo(0, iHeight/2);
	 
      // Wave peak
      ctx.quadraticCurveTo(iMidWidth/3, -50, iMidWidth, iHeight/2);
      ctx.quadraticCurveTo((iMidWidth*5)/3, iHeight+30, iWidth, iHeight*2/3);
      ctx.lineTo(iWidth, iHeight);
      ctx.lineTo(0, iHeight);
      ctx.lineTo(0, iHeight/2);
	  
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
	 	  
	    // Wave init
      ctx1.strokeStyle = '#f5f5f5';
      if($(window).width()>360)
        ctx1.fillStyle = "#f5f5f5";
      else
        ctx1.fillStyle = "#ffffff";
      ctx1.globalAlpha = 1.0;
      ctx1.beginPath();
      ctx1.moveTo(0, iHeight/2+11);
	 
      // Wave peak
      ctx1.quadraticCurveTo(iMidWidth/3, -28, iMidWidth, iHeight/2+11);
      ctx1.quadraticCurveTo((iMidWidth*5)/3, iHeight+30, iWidth, iHeight*2/3+11);
      ctx1.lineTo(iWidth, iHeight);
      ctx1.lineTo(0, iHeight);
      ctx1.lineTo(0, iHeight/2);
	  
      ctx1.stroke();
      ctx1.fill();
      ctx1.closePath();
  };
  
  fnInitWaves = function(){    
    $canvas.each(function(i, el){
      fnDrawWave(el);
    });
  };
  
  $(function(){
    $canvas = $('canvas.wave');
    fnInitWaves.apply(undefined);
  });
  
  $(window).on('resize', function(){
    clearTimeout(tmrResize);
    tmrResize = setTimeout(fnInitWaves, 10);
  });
})(jQuery);

(function($){
  var $canvas,
      fnInitWaves,
      fnDrawWave,
      tmrResize;
  
  fnDrawWave = function(canvas){
    var $this = $(canvas), iWidth, iHeight, iLineWidth, iFillLineWidth, ctx;
      iWidth = 70;
      iHeight = 650;
      iLineWidth = 6;
      iFillLineWidth = 1;

      $this.attr({width: 70, height: 650});
      
      ctx = canvas.getContext('2d');
      
      var grd = ctx.createLinearGradient(0, 0, 0, iHeight);
      
      grd.addColorStop(0, '#305d52');
      grd.addColorStop(1, '#153f38');
      // Wave init
      //ctx.lineWidth = iLineWidth;
      ctx.strokeStyle = '#5bc8fa';
      ctx.fillStyle = grd;
      //ctx.fillRect(0,0,iWidth,iHeight);
      ctx.beginPath();
      ctx.moveTo(35, 0);
	 
      // Wave peak
      ctx.quadraticCurveTo(-20, iHeight/4, iWidth*2/3, iHeight/2);
      ctx.quadraticCurveTo(100, iHeight*3/4, 35, iHeight);
      ctx.lineTo(0, iHeight);
      ctx.lineTo(0, 0);
      ctx.lineTo(35, 0);
	  
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
  };
  
  fnInitWaves = function(){    
    $canvas.each(function(i, el){
      fnDrawWave(el);
    });
  };
  
  $(function(){
    $canvas = $('canvas.wave2');
    fnInitWaves.apply(undefined);
  });
  
  $(window).on('resize', function(){
    clearTimeout(tmrResize);
    tmrResize = setTimeout(fnInitWaves, 10);
  });
})(jQuery);

(function($){
  var $canvas,
      fnInitWaves,
      fnDrawWave,
      tmrResize;
  
  fnDrawWave = function(canvas){
    var $this = $(canvas), iWidth, iHeight, iLineWidth, iFillLineWidth, ctx;
      iWidth = 118;
      iHeight = 650;
      iLineWidth = 6;
      iFillLineWidth = 1;

      $this.attr({width: 118, height: 650});
      
      ctx = canvas.getContext('2d');
      
      // Wave init
      //ctx.lineWidth = iLineWidth;
      ctx.strokeStyle = '#ffffff';
      ctx.fillStyle = '#ffffff';
      ctx.globalAlpha = 0.2;
      //ctx.fillRect(0,0,iWidth,iHeight);
      ctx.beginPath();
      ctx.moveTo(59, 0);
	 
      // Wave peak
      ctx.quadraticCurveTo(4, iHeight/4, 75, iHeight/2);
      ctx.quadraticCurveTo(124, iHeight*3/4, 59, iHeight);
      ctx.lineTo(0, iHeight);
      ctx.lineTo(0, 0);
      ctx.lineTo(59, 0);
	  
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
  };
  
  fnInitWaves = function(){    
    $canvas.each(function(i, el){
      fnDrawWave(el);
    });
  };
  
  $(function(){
    $canvas = $('canvas.wave3');
    fnInitWaves.apply(undefined);
  });
  
  $(window).on('resize', function(){
    clearTimeout(tmrResize);
    tmrResize = setTimeout(fnInitWaves, 10);
  });
})(jQuery);


(function($){
  var $canvas,
      fnInitWaves,
      fnDrawWave,
      tmrResize;
  
  fnDrawWave = function(canvas){
    var $this = $(canvas), iWidth, iHeight, iLineWidth, iFillLineWidth, ctx, ctx1;
    rWidth = $this.parent().outerWidth();
      iWidth = rWidth;
      iHeight = 150;
      iLineWidth = 6;
      iFillLineWidth = 1;
      $this.attr({width: rWidth, height: 150});
      
      ctx = canvas.getContext('2d');
      ctx1 = canvas.getContext('2d');
    
      ctx1.strokeStyle = '#ffffff';
      ctx1.fillStyle = '#ffffff';
      ctx1.globalAlpha = 0.2;
      //ctx.fillRect(0,0,iWidth,iHeight);
      ctx1.beginPath();
      ctx1.moveTo(0, 75);
	 
      // Wave peak
      ctx1.quadraticCurveTo(iWidth/4, 125, iWidth/2, 75);
      ctx1.quadraticCurveTo(iWidth*3/4, 25, iWidth, 75);
      ctx1.lineTo(iWidth, 0);
      ctx1.lineTo(0, 0);
      ctx1.lineTo(0, 75);
	  
      ctx1.stroke();
      ctx1.fill();
      ctx1.closePath();

      // Wave init
      //ctx.lineWidth = iLineWidth;
      ctx.strokeStyle = '#153f38';
      ctx.fillStyle = '#153f38';
      ctx.globalAlpha = 1;
      //ctx.fillRect(0,0,iWidth,iHeight);
      ctx.beginPath();
      ctx.moveTo(0, 50);
	 
      // Wave peak
      ctx.quadraticCurveTo(iWidth/4, 100, iWidth/2, 50);
      ctx.quadraticCurveTo(iWidth*3/4, 0, iWidth, 50);
      ctx.lineTo(iWidth, 0);
      ctx.lineTo(0, 0);
      ctx.lineTo(0, 50);
	  
      ctx.stroke();
      ctx.fill();
      ctx.closePath();

  };
  
  fnInitWaves = function(){    
    $canvas.each(function(i, el){
      fnDrawWave(el);
    });
  };
  
  $(function(){
    $canvas = $('canvas.wave4');
    fnInitWaves.apply(undefined);
  });
  
  $(window).on('resize', function(){
    clearTimeout(tmrResize);
    tmrResize = setTimeout(fnInitWaves, 10);
  });
})(jQuery);

