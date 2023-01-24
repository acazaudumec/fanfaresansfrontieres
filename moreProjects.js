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

//$( document ).ready(function() {
//    console.log('ready');
//    $('.olds > div').slice(10).addClass('hidden');
//});
$('#lessProjects').click(function(){
    $('.olds > div').slice(10).addClass('hidden');
    $('#moreProjects').removeClass('hidden');
    $('#lessProjects').addClass('hidden');
});
$('#moreProjects').click(function(){
    $('.olds > div').removeClass('hidden');
    $('#lessProjects').removeClass('hidden');
    $('#moreProjects').addClass('hidden');
});

}
/*
     FILE ARCHIVED ON 13:45:08 Nov 09, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:53:43 Jan 18, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 397.546
  exclusion.robots: 0.102
  exclusion.robots.policy: 0.093
  RedisCDXSource: 49.998
  esindex: 0.014
  LoadShardBlock: 325.257 (3)
  PetaboxLoader3.resolve: 660.46 (4)
  PetaboxLoader3.datanode: 73.735 (5)
  CDXLines.iter: 19.525 (3)
  load_resource: 460.019 (2)
*/