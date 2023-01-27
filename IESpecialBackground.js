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

function IESpecialBackground(srcNotIE,  classe, position){
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
    {
        document.write('<img class="' + classe + '" src="/Laughing-Jazzbox/web/img/covers/Random/smallCover-'+ Math.round((Math.random()*4)+1)+ '.jpg\" style="position:' + position + '; top:0px;"/>');

    }
    else  // If another browser, return 0
    {
        document.write('<img class="NB-light ' + classe + '" src=' + srcNotIE + ' style="position:' + position + '; top:0px;"/>');
    }
}

}
/*
     FILE ARCHIVED ON 19:53:22 Nov 19, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:30:42 Jan 23, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 468.843
  exclusion.robots: 0.093
  exclusion.robots.policy: 0.084
  cdx.remote: 0.073
  esindex: 0.009
  LoadShardBlock: 435.537 (3)
  PetaboxLoader3.datanode: 96.073 (5)
  CDXLines.iter: 19.258 (3)
  PetaboxLoader3.resolve: 567.193 (3)
  load_resource: 247.423 (2)
*/