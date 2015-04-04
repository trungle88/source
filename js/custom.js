jQuery(document).ready(function(){
	jQuery('.menu-total').append('<ul></ul>');
	jQuery('#header .menu-left ul li').each(function(){
		jQuery('.menu-total ul').append(jQuery(this).clone());
	});
	jQuery('#header .menu-right ul li').each(function(){
		jQuery('.menu-total ul').append(jQuery(this).clone());
	});
	jQuery('.toggle-menu a').click(function(even){
		even.preventDefault();
		jQuery('.menu-total ul').stop(true,false).toggle();
	});

	jQuery('html').click(function(event){
		if(jQuery(event.target).closest('.menu-total').length == 0){
			jQuery('.menu-total ul').stop(true,false).hide();
		}
	});
});

jQuery(window).resize(function(){

});