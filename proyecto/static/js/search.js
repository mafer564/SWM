 var $ = window.jQuery
 var $main = $('body').find('.main-container');

 $(document).on("keypress", ":input:not(textarea)", function(event) {
     if (event.keyCode == 13) {
         event.preventDefault();
     }
   })

  $main.find('#search').change(function(){
    alert('cambió');
  })
