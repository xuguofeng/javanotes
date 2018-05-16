$(function(){
	$(".nav li").click(function(){$(this).addClass("active").siblings().removeClass("active");});

	$(window || 'body').on('scroll', function(){
		var top = $(window).scrollTop();
		if(top >= 50)
			$("#CfloatBtn").css({'display':'block'});
		else
			$("#CfloatBtn").css({'display':'none'});
	});

	$("a[style]").each(function() {
		var html = this.innerHTML;
		if(html.indexOf("第") > -1)
			this.target = "_blank";
	});

	// 添加"jQuery插件开发"菜单
	$("#navbar-nav .navbar-nav .dropdown").eq(0).find("ul.dropdown-menu")
		.append($("<li></li>")
			.append($("<a></a>").attr("href", "http://5ijy01.duapp.com/jq-ui/index.html").html("jQuery插件开发")));

	// 添加"JAVA Web"菜单
	$("<li></li>")
		.append($("<a></a>").attr("href", "/it/javaweb/index.html").html("JAVA WEB"))
		.insertAfter($("#navbar-nav .navbar-nav .dropdown").eq(0).find("ul.dropdown-menu").find("li").eq(1));

	// 添加分享
	$("body").append($("<script>window._bd_share_config={\"common\":{\"bdSnsKey\":{},\"bdText\":\"\",\"bdMini\":\"2\",\"bdMiniList\":false,\"bdPic\":\"\",\"bdStyle\":\"0\",\"bdSize\":\"16\"},\"slide\":{\"type\":\"slide\",\"bdImg\":\"5\",\"bdPos\":\"right\",\"bdTop\":\"100\"},\"image\":{\"viewList\":[\"qzone\",\"tsina\",\"tqq\",\"renren\",\"weixin\"],\"viewText\":\"分享到：\",\"viewSize\":\"16\"},\"selectShare\":{\"bdContainerClass\":null,\"bdSelectMiniList\":[\"qzone\",\"tsina\",\"tqq\",\"renren\",\"weixin\"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>"));

	// 页面高度自适应
	setTimeout(function() {
		// 页面高度自适应
		var h = document.documentElement.clientHeight;
		// var docHeight = document.body.clientHeight;
		var mainHeight = $(".main-container")[0].offsetHeight;
		if (mainHeight + 118 < h) {
			$(".main-container").height(h - 118);
		}
	}, 10);
});