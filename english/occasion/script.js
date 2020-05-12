window.addEventListener('DOMContentLoaded', (event) => {
    $(document).ready(function(){


        function showWindow(){
            $('#pop-up').fadeToggle(2000,'linear');

            $('html body').css('overflow', 'hidden');
            setTimeout(hideWindow, 4000);
            
        }


        
        function hideWindow(){
            $('#pop-up').fadeToggle(2000, 'linear');
            $('html body').css('overflow', 'scroll');
        }
        
        setTimeout(showWindow, 1000);
    })

});
