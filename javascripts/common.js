/* common.js */


// ---------------------------------------------------------
$(document).ready(function () {
	$('a').click(function(){
		if( $(this).hasClass('noscroll') ) return false;

		var $target = this.hash;
		if( ($($target).size()) && ($target.indexOf("#") == 0) ) {
			$.scrollTo($target, 200);
			return false;
		} else if ( $target == '#' ) {
			return false;
		}
	});
	// -------------------------------------------------------

	(function () {
		function HeaderMenu(options) {
			this.menu = $('.sp-group.sp-header-menu-group');
			this.menuBody = this.menu.find('>ul');
			this.menuBody.hide();
			this.speed = 250;
			$.extend(this, options || {});
		}

		HeaderMenu.prototype._toggle = function($el, type, speed) {
			var that = this;
			$el.toggleClass('enabled');
			if (type === 'opacity') {
				if (this.running) return;
				if ($el.hasClass('enabled')) {
					this.menu.attr('style', 'display:block;');
				} else {
					this.running = true;
					setTimeout(function() {
						that.menu.attr('style', 'display:none;');
						that.running = false;
					}, 300);
				}
			}
			if (type === 'height') {
				$el.stop().animate({height: 'toggle'}, speed || this.speed);
			}
		};

		HeaderMenu.prototype.toggle = function() {
			this._toggle(this.menu, 'opacity');
			this._toggle(this.menuBody, 'height');
			this.menu.height($(document).height());
			return false;
		};

		HeaderMenu.prototype.toggleSlave = function(e) {
			var li = $(e.currentTarget).parent();
			li.toggleClass('open');
			var slave = li.find('.slave');
			this._toggle(slave, 'height');
			return false;
		};

		var menu = new HeaderMenu();

		$('.icon.sp-menu').on('click', $.proxy(menu.toggle, menu));
		$('.sp-group.sp-header-menu-group').on('click', function(e) {
			if ($(e.target).hasClass('sp-header-menu-group')) {
				menu.toggle();
				return false;
			}
		});
		$('.sp-header-menu-group .master').on('click', $.proxy(menu.toggleSlave, menu));
		var $w = $(window);
		$w.on('resize', function() {
			var w = $w.width();
			if (w > 640) {
				$('.sp-group.sp-header-menu-group').hide();
			}
		})
	}());

	$(window).resize(function(){
		$('.blog .pager-group span.in-group').autoHeight();
	}).trigger('resize');

	// video
//	var video = $("#mainvisual-video").get(0);
//	fakeClick(function() {
//		video.play();
//	});
});


// video
function fakeClick(fn) {
	var $a = $('<a href="#" id="fakeClick"></a>');
	$a.bind("click", function(e) {
		e.preventDefault();
		fn();
	});

	$("body").append($a);
	var evt,
		el = $("#fakeClick").get(0);
	if (document.createEvent) {
		evt = document.createEvent("MouseEvents");
		if (evt.initMouseEvent) {
			evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			el.dispatchEvent(evt);
		}
	}

	$(el).remove();
}
