var jq = $.noConflict();

// ADD CORNERS AND ROUND OBJECTS (IE 8 ONLY)
jq(function(){
  jq(".mini-menu").find(".btn-remove").corner("10px");
  jq(".cart-table").find(".btn-remove").corner("15px");
  jq("#free-delivery-outline").corner("6px");
  jq("#free-delivery-inside").corner("6px");
  jq(".qty-control").corner("15px");
});

// FIX NAV AND SEARCH ON MEDIA WIDTH CHANGE
jq(function(){
      jq(".top-account>.textLink").removeAttr("href").css("cursor","pointer");
      jq(".top-link-cart").removeAttr("href");
});

// FIXED NAV ON SCROLL
jq(function() {
  jq(window).scroll(function () {  
    if (jq(window).width()> 900){
    if (jq(window).scrollTop() > 75) {
      jq('header').addClass('nav-fixed');
      jq('.form-search-mini').addClass('form-search').removeClass('form-search-mini');
    }
    else {
      jq('header').removeClass('nav-fixed');
      jq('.form-search-mini').addClass('form-search').removeClass('form-search-mini');

    }
  }

  else{
    if (jq(window).scrollTop() > 75) {
      if(jq(window).width()> 625) jq('.form-search').addClass('form-search-mini').removeClass('form-search');
      jq('header').addClass('nav-fixed');
    }
    else {
      jq('header').removeClass('nav-fixed');
      jq('.form-search-mini').addClass('form-search').removeClass('form-search-mini');
    }
  }
});
});

// MINI MENU
jq(function () {
    jq(".top-account>.textLink, .top-account-a").click(function (e) {
        jq('#mini-menu-account').toggle();
        jq('#mini-menu-cart').hide();
        jq(".form-search").removeClass("search-visible");
    });

      jq('.top-link-cart').click(function (e) {
        jq('#mini-menu-cart').toggle();
        jq('#mini-menu-account').hide();
        jq(".form-search").removeClass("search-visible");
    });

});

// IPAD MENU HIDE
jq(function(){
  jq("#navClose").click(function(e){
    jq('.offcanvas').removeClass("offcanvas");
  });
});


jq(function(){
  jq("#navMenuButton").click(function (e) {
        jq('nav').addClass("offcanvas");
        jq("li.level0 > a").removeAttr("href"); 
        jq('#mini-menu-account').hide();
        jq('#mini-menu-cart').hide();
        jq(".form-search").removeClass("search-visible");

        jq('.offcanvas').find('ul > li').click(function(){
          if (jq(this).is(".level0") ){
            jq("nav > ul > li").removeClass("nav-element-opened");
            jq(this).toggleClass("nav-element-opened");
            }
        });
      });
});

// IPAD SHOW SEARCH
jq(function(){
jq(".searchMiniIcon").click(function (e) {
  if(jq(window).scrollTop() < 75 && jq(window).width()<900 && jq(window).width()>625){
    jq(".form-search").toggleClass("search-visible");
    jq('#mini-menu-account').hide();
    jq('#mini-menu-cart').hide();
  }

  if(jq(window).width()<625){
    jq('.form-search-mini').addClass('form-search').removeClass('form-search-mini');
    jq(".form-search").toggleClass("search-visible");
    jq('#mini-menu-account').hide();
    jq('#mini-menu-cart').hide();
  }
  });
});

// IPHONE FOOTER LINKS
jq(function(){
        jq('footer').find('.grid4').click(function(){
            jq("footer").find(".footer-visible").toggleClass("footer-visible");
            jq(this).find(".block-title").toggleClass("footer-visible");
        });
});

// SHOW FILTERS
jq(function(){
        jq('#showFilters').click(function(){
            jq(this).toggleClass("open-close-filters");
            jq(".filterList").toggleClass("filters-visible");
        });

        jq('#narrow-by-list').find("dt").click(function(){
            jq(this).toggleClass("open-close-filters");
            jq(this).next("dd").toggleClass("filter-group-visible");
        });
});

// HIDE ON OFF-CLICK
jq(function(){
        jq('.main-container').click(function(){
          jq(".form-search").removeClass("search-visible");
          jq('#mini-menu-account').hide();
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

// RESPONSIVE TABLE
jq(function(){
  if (!jq("body").hasClass("page-print")) {
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
  }
});