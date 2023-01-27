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