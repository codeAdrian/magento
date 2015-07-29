var jq = $.noConflict();

// FIX NAV AND SEARCH ON MEDIA WIDTH CHANGE

jq(function(){
      jq('<span class="mobile-opened-closed"> &nbsp;</span>').prependTo("header nav ul .level0 > a");
});

jq(window).on('resize', function(){
      if (jq(window).width()> 900){
      jq('#search_mini_form').css("width","auto").css("display","block").css("float","left");
      jq('.form-search>button').css("display","none");
      jq('nav').show();
      jq("nav ul li ul").hide();
      jq('.form-search').show();

      if (jq(window).scrollTop() > 75){
      jq('#search').css("width","13em");
     
      jq('#search_mini_form').css("width","auto");
      jq('.form-search>button').css("display","none");
      jq('.form-search').css("border","0px");
      jq('nav').show();
      jq("nav ul li ul").hide();
      jq('.form-search').show();
      }
  }

  else{
          if (jq(window).scrollTop() > 75){
                  jq('.form-search').show();
                  jq('#search_mini_form').css("width","90%").css("display","block").css("float","none");   
          }
  }
});
// FIXED NAV ON SCROLL

jq(function() {
  jq(".top-account>.textLink").removeAttr("href").css("cursor","pointer"); // temp fix - remove href on load
  jq(".top-link-cart").removeAttr("href"); // temp fix
  jq(window).scroll(function () {  
    //console.log(jq(window).scrollTop())
    if (jq(window).width()> 900){
    if (jq(window).scrollTop() > 75) {
      jq('#search').css("width","13em");
      jq('header').addClass('nav-fixed');
      jq('.logo').hide();
      jq('.links>li:first-child').hide();
      jq('.form-search').css("border","0px");
      jq('.main-container').css("margin-top","123px");
      jq('.form-search-mini').addClass('form-search').removeClass('form-search-mini');
      jq('.form-search').show();
    }
    else {
      jq('#search').css("width","15em");
      jq('header').removeClass('nav-fixed');
      jq('.logo').show();
      jq('.links>li:first-child').show();
      jq('.form-search').css("border","2px solid #474444");
      jq('.main-container').css("margin-top","0px");
      jq('.form-search-mini').addClass('form-search').removeClass('form-search-mini');
      jq('#search_mini_form').css("width","auto");

    }
  }

  else{
    if (jq(window).scrollTop() > 75) {
      jq('.form-search').addClass('form-search-mini').removeClass('form-search');
      jq('header').addClass('nav-fixed');
      jq('.links>li:first-child').hide();
      jq('.main-container').css("margin-top","120px"); 
      jq('.form-search').css("border","2px solid #474444").show();
      jq('.logo').hide();
      //jq('.searchMiniIcon').hide();
      /*jq('#search_mini_form').css("width","100%");*/
      //jq('.form-search-mini').show();
      jq('.form-search').show();
      jq('#search_mini_form').css("width","100%").css("display","inlineblock").css("float","none");  
    }
    else {
      jq("header .links .first").css("display","inline-block");
      jq('header').removeClass('nav-fixed');
      jq('.links>li:first-child').show();
      jq('.form-search').css("border","2px solid #474444");
      jq('.main-container').css("margin-top","0px");
      jq('.logo').show();
      //jq('.searchMiniIcon').show();
      jq('.search-wrapper').css("display","inline-block");
      jq('.search-wrapper').css("display","inline-block").css("width","auto");
      jq('#search_mini_form').css("width","");
      jq('.form-search-mini').addClass('form-search').removeClass('form-search-mini');
      jq('#search_mini_form').css("width","100%").css("display","inline-block").css("float","none"); 
    }
  }
});
});


// MINI MENU

jq(function () {
    jq(".top-account>.textLink,#mini-menu-account,.top-account-a").click(function (e) {
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

// DROPDOWN

jq(function(){
  jq('nav').find('ul > li > ul').hide(); // hide all dropdown menus on page load
    jq('nav').find('ul > li').hover(function(){
      if (jq(window).width()> 900){
        jq(this).find('ul')
        .removeClass('dropdown')
        .stop(true, true).slideToggle('fast');
        }
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


// IPAD SHOW NAV
jq(function(){
  jq(".navClose").click(function(e){
    jq('.nav').hide();
    e.stopPropagation();
  });

  jq("#navMenuButton, #header_wrapper > nav:nth-child(7) > ul:nth-child(1)").click(function (e) {
        jq('nav').show();
        jq("li.level0 > a").removeAttr("href"); 
        e.stopPropagation();
      });
});

// IPAD SHOW SEARCH
jq(function(){
  if(jq(window).scrollTop() < 75 && jq(window).width()<900){
    jq(".searchMiniIcon, .form-search").click(function (e) {
    jq(".form-search").toggle();
    e.stopPropagation();
      });
  }


});

// IPAD CATEGORIES ON CLICK (DROPDOWN)
jq(function(){
    if(jq(window).width()<900){
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
  }
});


// IPAD MENU HIDE
jq(function(){
    if(jq(window).width()<900){
  jq(".navClose>span").click(function(e){
    jq("nav").hide();
    e.stopPropagation();
  });
}
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
