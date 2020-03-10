$.fancybox.defaults.animationDuration = 300;

$( '[data-fancybox="media"]' ).fancybox({
    caption : function( instance, item ) {
        var caption = $(this).data('caption') || '';

        if ( item.type === 'image' ) {
            caption = (caption.length ? caption + '<br />' : '') + '<small>{{copyright line goes here}}</small>' ;
        }

        return caption;
    }
});