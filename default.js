$( function () {
    // body...
    $( ".gnb>button" ).on( "click", function(){
        var $this = $( this );
        $this.next().slideToggle(200);
    })
});