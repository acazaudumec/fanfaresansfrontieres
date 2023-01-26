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
/*
     FILE ARCHIVED ON 23:48:43 Nov 19, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:05:26 Jan 18, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 84.52
  exclusion.robots: 0.084
  exclusion.robots.policy: 0.075
  RedisCDXSource: 0.996
  esindex: 0.009
  LoadShardBlock: 62.861 (3)
  PetaboxLoader3.datanode: 91.899 (5)
  CDXLines.iter: 17.432 (3)
  load_resource: 195.462 (2)
  PetaboxLoader3.resolve: 121.351 (2)
*/