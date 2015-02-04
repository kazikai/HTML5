$( function () {
    // body...
    $( ".gnb>button" ).on( "click", function(){
        var $this = $( this );
        $this.next().slideToggle(200);
    }), $( ".gnb>ul>li>a" ).on( "mouseover focus", function() {
        $( this ).parent().addClass( "active" ).siblings().removeClass( "active" );
    });
});