$(document).ready(function(){
      
      // rearrange order of flags on load
      var flags = $('.flag');
      for(var i = 0; i < flags.length; i++){
          var target = Math.floor(Math.random() * flags.length -1) + 1;
          var target2 = Math.floor(Math.random() * flags.length -1) +1;
          flags.eq(target).before(flags.eq(target2));
      }

});