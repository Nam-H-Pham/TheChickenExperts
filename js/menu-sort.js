function filterMenu(selector) {
    if (selector == 'All'){
        $( '#menu dish' ).show(1000);
    } else {
        $( '#menu dish' ).filter( "#"+selector ).show(800);
        $( '#menu dish' ).not( "#"+selector ).hide(500);
    }
    
}