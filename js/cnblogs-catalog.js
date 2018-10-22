/**
 * 根据HTML文档中的h1~h6生成目录
 */
(function() {

	// 获取屏幕宽度，大于等于960时才显示悬浮目录
	var w = document.documentElement.clientWidth;
	if(w < 960) {
		return false;
	}

	// 获取顶部的高度
	var top = $("#header").height() + 10;

	// 回顶部按钮
	var topBtn = $("<div>顶部</div>").addClass("catalog-btn").css("top", top + 80);
	topBtn.click(function() {
		$('html,body').animate({'scrollTop': '0'}, 100);
	});
	$("body").append(topBtn.css("display", "block"));

	// github
	var $github = $("<a></a>").addClass("git-link").attr("target", "_blank").attr("href", "https://github.com/xuguofeng?tab=repositories");
	$("body").append($github);

	// 用于判断目录层次
	var f = new Array();
	for(var i = 1; i <= 6; i++) {
		var t = $("#cnblogs_post_body").find("h" + i);
		if(t[0]) {
			f.push(t[0].tagName.toUpperCase());
		}
	}
	// 获取全部标题元素
	var titles = $("#cnblogs_post_body").find("h1, h2, h3, h4, h5, h6");

	if(titles.length > 0) {
		var catalogWrapper = $("<div></div>").addClass("catalog-wrapper").css("top", top);
		// 关闭按钮
		var closeDiv = $("<div></div>").addClass("catalog-close-wrapper");
		var close = $("<span></span>").html("&otimes;");
		close.click(function() {
			$(this).parent().parent().css("display", "none");
			if(!$("#catalog-btn")[0]) {
				var btn = $("<div>目录</div>").addClass("catalog-btn").attr("id", "catalog-btn");
				btn.click(function() {
					$(this).css("display", "none");
					$("div.catalog-wrapper").css("display", "block");
				});
				$("body").append(btn.css("display", "block").css("top", top));
			} else {
				$("#catalog-btn").css("display", "block");
			}
		});
		catalogWrapper.append(closeDiv.append(close));

		// 存放目录项
		var catalogDiv = $("<div>目录<br /></div>").addClass("catalog-div");

		$.each(titles, function(i, t) {

			var id = "catalog-" + i;

			t.id = id;

			var htype = t.tagName;
			var index = $.inArray(htype.toUpperCase(), f);
			if(index > -1) {
				var span = $("<span></span>");
					span.html(printBefore(index));
					var itemContent = $(t).text().replace(/\s/g, "");
					var item = $("<a></a>").html(itemContent).attr("href", "#" + id).addClass("catalog-item");
					catalogDiv.append(span).append(item).append($("<br />"));
			}
		});
		$("body").append(catalogWrapper.append(catalogDiv).css("display", "block"));
	}
	/**
	 * 生成缩进
	 */
	function printBefore(index) {
		var str = "";
		for(var i = 0; i < index; i++) {
			str += "&emsp;";
		}
		return str;
	}
})(jQuery);
