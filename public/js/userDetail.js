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
		var name=input.val();
		var id=$("#userid").val();
	    $.post("/username",
	    {
	        name:name,
	        id:id
	    },
	        function(data,status){
	        alert("数据: \n" + data + "\n状态: " + status);
	    });
	});
})