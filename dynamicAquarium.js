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

    $('.dynamic-aquarium .bulle').click(function(){
        $('.dynamic-aquarium .bulle a > div')
                .scrollTop(0);
        if($(this).hasClass( 'shrinked-bulle' )) {
            $(this.parentElement.getElementsByClassName('expanded-bulle'))
                .removeClass('expanded-bulle')
                .addClass('shrinked-bulle');
            $(this)
                .removeClass('shrinked-bulle')
                .addClass('expanded-bulle');
            $(document.getElementById("description_" + this.id))
                .removeClass('hidden');  
        }
        else if($(this).hasClass( 'expanded-bulle' )) {
            $('.dynamic-aquarium .bulle')
                .removeClass('expanded-bulle')
                .removeClass('shrinked-bulle');
            $('.dynamic-aquarium')
                .removeClass('shrinked-aquarium');
        }
        else {
            $(this.parentElement)
                .addClass('shrinked-aquarium');
            $(this.parentElement.getElementsByClassName('bulle'))
                .addClass('shrinked-bulle');
            
            $(this)
                .removeClass('shrinked-bulle')
                .addClass('expanded-bulle');
            $(document.getElementById("description_" + this.id))
                .removeClass('hidden'); 
        }
    })
   
    $('.ecran').click(function(){
//        console.log('ccc');
        $('.dynamic-aquarium .bulle a > div')
            .scrollTop(0);
        $('.dynamic-aquarium .bulle')
            .removeClass('expanded-bulle')
            .addClass('normal-bulle')
            .removeClass('shrinked-bulle');
        $('.dynamic-aquarium')
            .removeClass('shrinked-aquarium');
    })

    
    

}
/*
     FILE ARCHIVED ON 22:31:42 Nov 19, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:31:45 Jan 23, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 686.385
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.061
  cdx.remote: 0.06
  esindex: 0.009
  LoadShardBlock: 165.381 (3)
  PetaboxLoader3.datanode: 186.428 (5)
  CDXLines.iter: 13.8 (3)
  load_resource: 227.373 (2)
  PetaboxLoader3.resolve: 191.554 (2)
*/