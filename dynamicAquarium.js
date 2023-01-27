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