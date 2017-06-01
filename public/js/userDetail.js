$(document).ready(function(){
	$('.show1').click(function(){
		var div=$(this).parent().parent().parent();
		div.hide();
		div.next().show();
	})
	$('.close1').click(function(){
		var div=$(this).parent().parent().parent();
		div.hide();
		div.prev().show();
	})

	$('.submit1').click(function(){
		var div=$(this).parent().parent().parent();
		var input=div.find('input');
		var span=input.next();
		var name=input.val();
		var id=$("#userid").val();
	    $.post("/username",
	    {
	        name:name,
	        id:id
	    },
	        function(data,status){
	        	console.log(data.success)
	        	console.log(span)
	        	span.show();
	    });
	});
})