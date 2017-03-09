(function($) {
	$.fn.extend({
		Parallax: function(options) {
			var defaults = {
				container: $(this),
				//主容器
				floatitem: ".PD-Para-item",
				//视差对象
				range: 50
				//视差值（值越小效果越明显）
			};
			var para = $.extend(defaults, options),
				containerW = para.container.width() / 2,
				containerH = para.container.height() / 2,
				ua = navigator.userAgent.toLowerCase(),
				isIE = ua.indexOf("msie") > -1;
			para.container.bind("mousemove", function(ev) {
				var moveE = ev || event,
					moveL = moveE.clientX,
					moveR = moveE.clientY;
				if (isIE) {
					$(para.floatitem).css({
						"margin-left": (moveL - containerW) / para.range + "px"
					})
				} else {
					$(para.floatitem).css({
						"margin-left": (moveL - containerW) / para.range + "px",
						"margin-top": "-" + (moveL - containerH) / para.range + "px"
					})
				}
			})
		}
	})
})(jQuery);