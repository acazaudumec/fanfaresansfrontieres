var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$( document ).ready(function() {
    $('.olds > div').delay( 4000 ).slice(12).addClass('phantom');
});
$('#lessSupports').click(function(){
    $('.olds > div').slice(12).addClass('phantom');
    $('#moreSupports').removeClass('hidden');
    $('#lessSupports').addClass('hidden');
});
$('#moreSupports').click(function(){
    $('.olds > div').removeClass('phantom');
    $('#lessSupports').removeClass('hidden');
    $('#moreSupports').addClass('hidden');
});

}