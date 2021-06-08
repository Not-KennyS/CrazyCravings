function regular_map() {
   var var_location = new google.maps.LatLng(28.365697692208848, -82.18840973912813);

   var var_mapoptions = {
     center: var_location,
     zoom: 14
   };

   var var_map = new google.maps.Map(document.getElementById("map-container"), var_mapoptions);

   var var_marker = new google.maps.Marker({
     position: var_location,
     map: var_map,
     title: "Dade City"
   });
 }
 google.maps.event.addDomListener(window, 'load', regular_map);


 $('.nav-link').on('click',function() {
   $('.navbar-collapse').collapse('hide');
 });


 $('.collapse').on('shown.bs.collapse', function(e) {
   var $card = $(this).closest('.accordion-item');
   var $open = $($(this).data('parent')).find('.collapse.show');

   var additionalOffset = 0;
   if($card.prevAll().filter($open.closest('.accordion-item')).length !== 0)
   {
         additionalOffset =  $open.height();
   }
   $('html,body').animate({
     scrollTop: $card.offset().top - additionalOffset
   }, 100);
 });
