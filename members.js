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

function activateMember(i){
        $('#members .member-summary').fadeOut('normal');
        $('#members .member-summary#' + i).delay( 400 ).fadeIn('normal');
        if(i != 0){
            $('#members #next, #members #previous').delay( 400 ).fadeIn('normal');
            $('#members .bulle > a').addClass('darken');
            $('#members .bulle#' + i + " > a").removeClass('darken');
        }
        else{
            $('#members .bulle > a').removeClass('darken');
            $('#members #next, #members #previous').fadeOut('normal');
        }
    }
    $('#members .bulle > a').click(function(){
        if($(this).hasClass('darken') ||
           $('.member-summary#0').css('display') != 'none'){
            activateMember($(this).parent().attr('id'));
        }
        else{
            activateMember("0");
        }
    });
    $('#members .box > a').click(function(){
        var id = $('#members .bulle > a:not(.darken)').first().parent().attr('id');
        var targetId = 1;
        if($(this).attr('id') == 'next'){ //NEXT
            id = String(parseInt(id) + 1);
        }
        else{ // PREVIOUS
            id  = String(parseInt(id) - 1);
            targetId = $('#members .bulle').last().attr('id'); //On prend la dernière ID si ça marche pas
        }
        //On teste si l'id calculé est bonne, sinon on prend la target
        if ($('#members .bulle#' + id).length != 0){
            activateMember(id);
        }
        else{
            activateMember(targetId);
        }
    });

}
/*
     FILE ARCHIVED ON 19:47:54 Nov 19, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:31:47 Jan 23, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 136.025
  exclusion.robots: 0.118
  exclusion.robots.policy: 0.106
  cdx.remote: 0.152
  esindex: 0.017
  LoadShardBlock: 101.57 (3)
  PetaboxLoader3.datanode: 158.284 (5)
  CDXLines.iter: 20.85 (3)
  PetaboxLoader3.resolve: 167.098 (3)
  load_resource: 228.941 (2)
*/