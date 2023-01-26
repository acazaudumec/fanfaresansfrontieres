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
        
        var Min = 275;
        var Max = $("#members").height();
    
        var Height = 0;
        $('#members .member-summary').each(function(){
            var h = $(this).children().first().height() + $(this).children('.scroll-summary').first().height();
            Height = Math.max(h, Height);
        });
        console.log(Min);
        console.log(Max -70);
        console.log(Height);
        Height = Math.max(Math.min(Height, Max - 110), Min);
        console.log(Height);
        $("#members .summaries > .box").height(Height);
        $('#associations .item').addClass('active');
        $('#members .member-summary').css('display', 'block');
        $('.member-summary').each(function() {
            var pad = $(this).attr('id') ? 40 : 15; 
            var h = $(this).height() - $(this).children().first().height() - pad;
            $(this).children('.scroll-summary').height(h);
        });
        $('#associations .item').removeClass('active');
        $('#associations .item').first().addClass('active');
        $('#members .member-summary').css('display', 'none');
            console.log('ok');
        $('#members .member-summary').first().css('display', 'block');
            
    
    });
    

}
/*
     FILE ARCHIVED ON 21:43:07 Nov 19, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:05:30 Jan 18, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 212.598
  exclusion.robots: 0.087
  exclusion.robots.policy: 0.078
  RedisCDXSource: 136.329
  esindex: 0.013
  LoadShardBlock: 50.97 (3)
  PetaboxLoader3.datanode: 72.365 (5)
  CDXLines.iter: 22.452 (3)
  load_resource: 1804.064 (2)
  PetaboxLoader3.resolve: 1716.446 (2)
*/