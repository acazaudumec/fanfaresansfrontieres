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