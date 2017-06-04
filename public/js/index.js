$("body").on('change','.img',function(){
	var objUrl = getObjectURL(this.files[0]) ;
	console.log(objUrl)
	if (objUrl) {
		$(this).prev().attr('src',objUrl);
		$(this).parent().removeClass("input-box").addClass("img-box");
		var html='<div class="input-box"><img class="cover"><input type="file" name="img" class="img"><span class="glyphicon glyphicon-plus"></span></div>'
		$(this).parent().parent().append(html);
	}
}) ;
//建立一個可存取到該file的url
function getObjectURL(file) {
	var url = null ; 
	if (window.createObjectURL!=undefined) { // basic
		url = window.createObjectURL(file) ;
	} else if (window.URL!=undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file) ;
	} else if (window.webkitURL!=undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file) ;
	}
	return url ;
}


$(".photo-close").click(function(){
	$(".photo-wrap").hide();
})

$(".photo-wrap-show").click(function(){
	$(".photo-wrap").show();
})

$('.weibo-img').click(function(){
	console.log($(this).css('width'))
	if($(this).css('width')!='487px')
		$(this).parent().children().css('width','100%');
	else
		$(this).parent().children().css('width','150px');
})