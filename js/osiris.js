$("document").ready(function(){
  $( "#menus" ).submit(function( event ) {
  event.preventDefault();

  var favorite = 0;
  var names = [];
            $.each($("input[name='food']:checked"), function(){
              var amount = parseInt($(this).val());
                favorite = favorite + amount;

                if (amount === 50) {
                  names.push('Changaa')
                } else if (amount === 75) {
                  names.push('Busaa')
                } else if (amount === 100) {
                names.push('Managu')
                }
                else if (amount === 125) {
                  names.push('Njahi')
                }
                else if (amount === 150) {
                  names.push('Rice')
                }
                else if (amount === 175) {
                  names.push('Ugali')
                }
                else if (amount === 200){
                  names.push('Liver')
                }
            });
            
            $("#amount").text(favorite);
            $("#food").text(names.toString());
            $("#price").show();
});
})
