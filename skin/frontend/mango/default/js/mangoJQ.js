
var jq = $.noConflict();

// FIX NAV AND SEARCH ON MEDIA WIDTH CHANGE

jq(function(){
      jq('<span class="mobile-opened-closed"> &nbsp;</span>').prependTo("header nav ul .level0 > a");
        jq(".top-account>.top-account").removeAttr("href").css("cursor","pointer"); // temp fix - remove href on load
  jq(".top-link-cart").removeAttr("href"); // temp fix
});

// FIXED NAV ON SCROLL


  jq(window).scroll(function () {  
   
      if (jq(window).scrollTop() > 75) {
        
        jq('header').addClass('nav-fixed');
      }
      else {
        jq('header').removeClass('nav-fixed');
      }
    });

/*
  else if (jq(window).width()>= 625 &&  jq(window).width() < 900){
    if (jq(window).scrollTop() > 75) {
            jq("#header_wrapper").css("padding-top","5px");
      jq('.form-search').addClass('form-search-mini').removeClass('form-search');
      jq('header').addClass('nav-fixed');
      jq('.links>li:first-child').hide();
      jq('#mini-menu-account').css("top","60px");
      jq('#mini-menu-cart').css("top","60px");
      jq('.main-container').css("margin-top","80px"); 
      jq('.form-search').css("border","2px solid #474444").show();
      jq('.logo').hide();
      jq('.searchMiniIcon').hide();
      jq('.search-wrapper').css("display","inline-block").css("width","55%");
      jq('.form-search-mini').show();
      jq('.form-search').show();
      jq('.search-wrapper').css('display','inline-block').css("width","50%").css("float","none");
      jq('#search_mini_form').css("width","100%").css("display","inline-block").css("float","none");  
    }
    else {
      jq("header .form-search").css("top","60px");
      jq("header .links .first").css("display","inline-block");
      jq('header').removeClass('nav-fixed');
      jq('.links>li:first-child').show();
      jq('#mini-menu-account').css("top","100px");
      jq('#mini-menu-cart').css("top","100px");
      jq('.form-search').css("border","2px solid #474444");
      jq('.main-container').css("margin-top","0px");
      jq('.logo').show();
      jq('.searchMiniIcon').show();
      jq('.search-wrapper').css("display","inline-block");
      jq('.search-wrapper').css("display","inline-block").css("width","auto");
      jq('#search_mini_form').css("width","");
      jq('.form-search-mini').addClass('form-search').removeClass('form-search-mini');
      jq('.search-wrapper').css("float","left");
      jq('.form-search').hide();
      jq('.search-wrapper').css('display','inline-block').css("width","auto").css("float","left");
      jq('#search_mini_form').css("width","100%").css("display","inline-block").css("float","none"); 
    }
  }

  else{

          jq('.searchMiniIcon').show();
      jq('.search-wrapper').css("display","inline-block");
      jq('.search-wrapper').css("display","inline-block").css("width","auto");
      jq('#search_mini_form').css("width","");
      jq('.form-search-mini').addClass('form-search').removeClass('form-search-mini');
      jq('.search-wrapper').css("float","left");
      jq('.search-wrapper').css('display','inline-block').css("width","auto").css("float","left");
      jq('#search_mini_form').css("width","100%").css("display","inline-block").css("float","none"); 

        if (jq(window).scrollTop() > 75) {
          jq(".smartphoneLogo").hide();
          jq('header').addClass('nav-fixed');
          jq('#mini-menu-account').css("top","60px");
          jq('#mini-menu-cart').css("top","60px");
          jq('.main-container').css("margin-top","120px");
                jq("header .form-search").css("top","50px");

        }
          else{
                  jq("header .form-search").css("top","60px");
              jq(".smartphoneLogo").show();
              jq(".smartphoneLogo h1").show();
              jq(".smartphoneLogo h1 a").show();
              jq(".smartphoneLogo h1 a img").show();
              jq('header').removeClass('nav-fixed');
              jq("header #header_wrapper").css("padding","10px 5px 5px");    
              jq('#mini-menu-account').css("top","150px");
              jq('#mini-menu-cart').css("top","150px");   
              jq('.main-container').css("margin-top","50px");  
              jq('.searchMiniIcon').show();

            }
  }
});
});
*/

// MINI MENU
jq(function () {
    jq(".top-account>.top-account,#mini-menu-account,.top-account-a").click(function (e) {
        jq('#mini-menu-cart').hide();
        jq('#mini-menu-account').slideDown(250,'swing');
        e.stopPropagation();
    });
    jq(document).click(function (e) {
        jq('#mini-menu-account').hide();
    });
      jq('.top-link-cart,#mini-menu-cart').click(function (e) {
        jq('#mini-menu-account').hide();
        jq('#mini-menu-cart').slideDown(250,'swing');
        e.stopPropagation();
    });
    jq(document).click(function (e) {
        jq('#mini-menu-cart').hide();
    });
});

// CART PRICE
jq(function(){
    jq('#cart-free-delivery').show();
    var price = jq('.subtotal > .price').text();
    if(price!=0){
      price = price.substring(0, price.length - 3);
      price = price.split(",");
      priceFree  = jq('#free-delivery-value').text();
      priceFree = priceFree.split(",");
      var diff =  parseFloat(priceFree) - parseFloat(price);
      
      if (diff<0){
        diff=0;
        percent=100;
      }

      else{
      var percent = (parseFloat(price)/parseFloat(priceFree))*100;
      percent = percent.toFixed();
      }
      jq('#free-delivery-diff').text(diff);
      jq('#free-delivery-inside').css('width',percent+"%");
    }
    else{
      jq('#cart-free-delivery').hide();
    }

});

// INCREMENT AND DECREMENT QUANTITY

function incrementQty(){document.getElementById('qty').value=parseInt(document.getElementById('qty').value)+1;}

function decrementQty(){
  if(parseInt(document.getElementById('qty').value)>0) document.getElementById('qty').value=parseInt(document.getElementById('qty').value)-1;
}

// MESSAGES SHOW AND HIDE
jq(function(){
  if(jq(".messages").is(":visible")) {
  jq(".messages").hide();
  jq(".messages").slideDown().delay(3000).slideUp(function(){
        jq(".subtext-message").slideDown();
      });
  }
});


// IPAD SHOW NAV AND HIDE

jq(window).on('resize', function(){
      jq(".offcanvas>ul>li>ul").hide();
    jq('nav').removeClass("offcanvas");
});

jq(function(){
    jq(".navClose>span").click(function(e){
      if(jq(document).width()<900){
    jq('nav').removeClass("offcanvas");
    e.stopPropagation();
  }
    });
  jq("#navMenuButton, #header_wrapper > nav:nth-child(7) > ul:nth-child(1)").click(function (e) {
        if(jq(document).width()<900){
        jq('nav').addClass("offcanvas");
        jq("li.level0 > a").removeAttr("href"); 
        e.stopPropagation();
      }
      });
  jq(document).click(function (e) {
          if(jq(document).width()<900){
      }
    });
});

// IPAD SHOW SEARCH

function toggle_search() {
 var e = document.getElementById("search_toggle");
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }

// IPAD CATEGORIES ON CLICK (DROPDOWN)
jq(function(){
    jq('nav').find('ul > li').click(function(){
      if (jq(window).width() < 900 && jq(this).is(".level0") ){
        jq("ul > li").find("a").removeClass("nav-element-opened");
        jq("ul > li > a").find(".mobile-opened-closed").html(" &nbsp;");
          jq("nav > ul > li > ul").slideUp(250,'swing');
          if(jq(this).find('ul').is(':visible')){
            jq(this).find('ul').slideUp(250,'swing');
            jq(this).find("a").first().removeClass("nav-element-opened");
            jq("ul > li > a").find(".mobile-opened-closed").html(" &nbsp;");
          }
          else
          {
            jq(this).find('ul').slideDown(250,'swing');
            jq(this).find("a").first().addClass("nav-element-opened");
            jq(this).find(".mobile-opened-closed").html(" &nbsp;");
          }
        }
    });
});

// SMARTPHONE FOOTER LINKS
jq (function(){ 
jq(".grid4-wrapper").find(".block-title").click(function(){
    if (jq(this).find('.footer-mango-icon:contains("")').length > 0){
  jq(this).find(".footer-mango-icon").html(" &nbsp;");}
  else jq(this).find(".footer-mango-icon").html(" &nbsp;");
});

jq("#faq_block").find(".block-title").click(function(){if(jq(window).width()<625){jq("#faq_block").find("ul").slideToggle();}});
jq("#aboutUs_block").find(".block-title").click(function(){if(jq(window).width()<625){jq("#aboutUs_block").find("ul").slideToggle();}});
jq("#locations_block").find(".block-title").click(function(){if(jq(window).width()<625){jq("#locations_block").find("ul").slideToggle();}});
jq("#social_block").find(".block-title").click(function(){if(jq(window).width()<625){jq("#social_block").find("ul").slideToggle();}});
});

// SMARTPHONE SHOW FILTERS

jq(function(){
  jq("#showFilters").click(function(){
if(jq(window).width()<625){
  jq(".filterList").slideToggle();
      if (jq(this).find('span:contains("")').length > 0){
  jq(this).find("span").html(" &nbsp;");}
  else jq(this).find("span").html(" &nbsp;");
}
  });

jq(function(){
    jq('.filterList').find('dl > dt').click(function(){
            if (jq(this).find(':contains("")').length > 0){
  jq(this).find("span").html(" &nbsp;");}
  else jq(this).find("span").html(" &nbsp;");
      if (jq(window).width()< 625){
        jq(this).nextUntil('dt').slideToggle();
        }
    });
});
});

/* RESPONSIVE TABLE */
jq(function(){
  if (jq(".data-table").length ){
    var headertext = [],
    headers = document.querySelectorAll(".data-table th"),
    tablebody = document.querySelector(".data-table tbody");

    for(var i = 0; i < headers.length; i++) {
      var current = headers[i];
      headertext.push(current.textContent.replace(/\r?\n|\r/,""));
    } 
    for (var i = 0, row; row = tablebody.rows[i]; i++) {
      for (var j = 0, col; col = row.cells[j]; j++) {
        col.setAttribute("data-th", headertext[j]);
      } 
    }
  }
});

