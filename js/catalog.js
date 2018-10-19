/**
 * 根据HTML文档中的h1~h6生成目录
 */
(function() {

	// 获取屏幕宽度，大于等于960时才显示悬浮目录
	var w = document.documentElement.clientWidth;
	if(w < 960) {
		return false;
	}

	// 获取页面原来的顶部目录
	var ul = $("div.main-container ul.list-unstyled");
	// 如果原来有目录才生成悬浮的左侧目录
	if(ul[0]) {

		var f = new Array();
		for(var i = 1; i <= 6; i++) {
			var t = $("div.main-container").find("h" + i + "[id]");
			if(t[0]) {
				f.push(t[0].tagName.toUpperCase());
			}
		}

		// 获取全部标题元素
		var titles = $("div.main-container").find("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");

		if(titles.length > 0) {
			var catalogWrapper = $("<div></div>").addClass("catalog-wrapper");
			// 关闭按钮
			var closeDiv = $("<div></div>").addClass("catalog-close-wrapper");
			var close = $("<span></span>").html("&otimes;");
			close.click(function() {
				$(this).parent().parent().css("display", "none");
				if(!$("div.catalog-btn")[0]) {
					var btn = $("<div>目录</div>").addClass("catalog-btn");
					var share = $("div.bdshare-slide-button-box");
					var shareBtn = $("a.bdshare-slide-button");
					var shareHeight = share.height();
					var shareTop = parseInt(share.css("top").replace("px",""));
					var shareBtnHeight = shareBtn.height();
					var shareBtnTop = parseInt(shareBtn.css("top").replace("px",""));
					var top = shareBtnHeight + shareBtnTop + shareTop + 5;
					btn.click(function() {
						$(this).css("display", "none");
						$("div.catalog-wrapper").css("display", "block");
					});
					$("body").append(btn.css({"display": "block", "top": top}));
				} else {
					$("div.catalog-btn").css("display", "block");
				}
			});
			catalogWrapper.append(closeDiv.append(close));

			// 存放目录项
			var catalogDiv = $("<div>目录<br /></div>").addClass("catalog-div");

			$.each(titles, function(i, t) {
				var htype = t.tagName;
				var index = $.inArray(htype.toUpperCase(), f);
				if(index > -1) {
					var span = $("<span></span>");
					span.html(printBefore(index));
					var itemContent = $(t).text().replace(/\s/g, "");
					var item = $("<a></a>").html(itemContent).attr("href", "#" + t.id);
					catalogDiv.append(span).append(item).append($("<br />"));
				}
			});
			$("body").append(catalogWrapper.append(catalogDiv));
		}
	}

	/**
	 * 生成缩进
	 */
	function printBefore(index) {
		var str = "";
		for(var i = 0; i < index; i++) {
			str += "&emsp;";
		}
		// str += "&bull;&nbsp;";
		return str;
	}
})(jQuery);
