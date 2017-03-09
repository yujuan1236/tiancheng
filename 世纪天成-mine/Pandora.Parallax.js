(function($) {
	$.fn.extend({
		Parallax: function(options) {
			var defaults = {
				container: $(this),
				//������
				floatitem: ".PD-Para-item",
				//�Ӳ����
				range: 50
				//�Ӳ�ֵ��ֵԽСЧ��Խ���ԣ�
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