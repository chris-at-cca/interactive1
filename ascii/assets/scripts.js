$(document).ready(function(){
      
      var objDate = new Date();
      var hours = objDate.getHours();
      if(hours >= 7 && hours <= 19){
            $('body').addClass('day');
      }
      else{
            $('body').addClass('night');
      }
      if(hours == 6 || hours == 18){
            $('body').addClass('dusk');
      }

      // rearrange order of houses on load
      var houses = $('.house');
      for(var i = 0; i < houses.length; i++){
          var target = Math.floor(Math.random() * houses.length -1) + 1;
          var target2 = Math.floor(Math.random() * houses.length -1) +1;
          houses.eq(target).before(houses.eq(target2));
      }

      // fit houses together
      $('#town').packery({
        itemSelector: '.house',
        gutter: 20
      });
});