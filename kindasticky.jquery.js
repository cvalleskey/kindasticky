(function ($) {
	defaults = {
		useOuterHeight: true
	}
	var methods = {
		init: function (options) {
			var o = $.extend(defaults, options);
			return this.each(function () {
                
                var that = this;
                
                that.func = $(window).bind('scroll', function(e) {
                   console.log($(that).css('top'));
                    var old_x = $(that).data('last_x') || 0;
                    var cur_x = $(this).scrollTop();
                    var height = $(that).outerHeight();
                    var top = parseInt($(that).css('top'));
                    
                    var d = (old_x - cur_x);
                    var n = top + d;
                    
                    if(n < height * -1) {
                        n = height * -1;
                    } else if(n > 0) {
                        n = 0;
                    }
                    
                    $(that).css('top', n);        
                    $(that).data('last_x', cur_x);
                });
			});
		},
		destroy: function (options) {
			var o = $.extend(defaults, options);

			return this.each(function () {
				//$(this).parent().find("canvas").remove();
			});
		}
	};
	$.fn.kindasticky = function (method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.kindasticky');
		}
	};
})(jQuery);