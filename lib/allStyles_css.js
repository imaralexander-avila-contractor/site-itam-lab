		.ps-container .ps-scrollbar-x-rail {
			position: absolute; /* please don't change 'position' */
			bottom: 3px; /* there must be 'bottom' for ps-scrollbar-x-rail */
			height: 8px;
			-webkit-border-radius: 4px;
			-moz-border-radius: 4px;
			border-radius: 4px;
			opacity: 0;
			filter: alpha(opacity = 0);
			-o-transition: background-color .2s linear, opacity .2s linear;
			-webkit-transition: background-color.2s linear, opacity .2s linear;
			-moz-transition: background-color .2s linear, opacity .2s linear;
			transition: background-color .2s linear, opacity .2s linear;
		}

		.ps-container:hover .ps-scrollbar-x-rail,
		.ps-container.hover .ps-scrollbar-x-rail {
			opacity: 0.6;
			filter: alpha(opacity = 60);
		}

		.ps-container .ps-scrollbar-x-rail:hover,
		.ps-container .ps-scrollbar-x-rail.hover {
			background-color: #eee;
			opacity: 0.9;
			filter: alpha(opacity = 90);
		}

		.ps-container .ps-scrollbar-x-rail.in-scrolling {
			opacity: 0.9;
			filter: alpha(opacity = 90);
		}

		.ps-container .ps-scrollbar-y-rail {
			position: absolute; /* please don't change 'position' */
			right: 3px; /* there must be 'right' for ps-scrollbar-y-rail */
			width: 8px;
			-webkit-border-radius: 4px;
			-moz-border-radius: 4px;
			border-radius: 4px;
			opacity: 1;
			filter: alpha(opacity = 100);
			-o-transition: background-color .2s linear, opacity .2s linear;
			-webkit-transition: background-color.2s linear, opacity .2s linear;
			-moz-transition: background-color .2s linear, opacity .2s linear;
			transition: background-color .2s linear, opacity .2s linear;
		}

		.ps-container:hover .ps-scrollbar-y-rail,
		.ps-container.hover .ps-scrollbar-y-rail {
			opacity: 1;
			filter: alpha(opacity = 100);
		}

		.ps-container .ps-scrollbar-y-rail:hover,
		.ps-container .ps-scrollbar-y-rail.hover {
			background-color: #eee;
			opacity: 1;
			filter: alpha(opacity = 100);
		}

		.ps-container .ps-scrollbar-y-rail.in-scrolling {
			opacity: 0.9;
			filter: alpha(opacity = 90);
		}

		.ps-container .ps-scrollbar-x {
			position: absolute; /* please don't change 'position' */
			bottom: 0; /* there must be 'bottom' for ps-scrollbar-x */
			height: 8px;
			background-color: #aaa;
			-webkit-border-radius: 4px;
			-moz-border-radius: 4px;
			border-radius: 4px;
			-o-transition: background-color .2s linear;
			-webkit-transition: background-color.2s linear;
			-moz-transition: background-color .2s linear;
			transition: background-color .2s linear;
		}

		.ps-container.ie6 .ps-scrollbar-x {
			font-size: 0; /* fixed scrollbar height in xp sp3 ie6 */
		}

		.ps-container .ps-scrollbar-x-rail:hover .ps-scrollbar-x,
		.ps-container .ps-scrollbar-x-rail.hover .ps-scrollbar-x {
			background-color: #999;
		}

		.ps-container .ps-scrollbar-y {
			position: absolute; /* please don't change 'position' */
			right: 0; /* there must be 'right' for ps-scrollbar-y */
			width: 8px;
			background-color: #aaa;
			-webkit-border-radius: 4px;
			-moz-border-radius: 4px;
			border-radius: 4px;
			-o-transition: background-color .2s linear;
			-webkit-transition: background-color.2s linear;
			-moz-transition: background-color .2s linear;
			transition: background-color .2s linear;
		}

		.ps-container.ie .ps-scrollbar-y {
			font-size: 0; /* fixed scrollbar height in xp sp3 ie6 */
		}

		.ps-container .ps-scrollbar-y-rail:hover .ps-scrollbar-y,
		.ps-container .ps-scrollbar-y-rail.hover .ps-scrollbar-y {
			background-color: #999;
		}
		/*
		Colorbox Core Style:
		The following CSS is consistent between example themes and should not be altered.
		*/
		#colorbox, #cboxOverlay, #cboxWrapper{position:absolute; top:0; left:0; z-index:9999; overflow:hidden;}
		#cboxWrapper {max-width:none;}
		#cboxOverlay{position:fixed; width:100%; height:100%;}
		#cboxMiddleLeft, #cboxBottomLeft{clear:left;}
		#cboxContent{position:relative;}
		#cboxLoadedContent{overflow:auto; -webkit-overflow-scrolling: touch;}
		#cboxTitle{margin:0;}
		#cboxLoadingOverlay, #cboxLoadingGraphic{position:absolute; top:0; left:0; width:100%; height:100%;}
		#cboxPrevious, #cboxNext, #cboxClose, #cboxSlideshow{cursor:pointer;}
		.cboxPhoto{float:left; margin:auto; border:0; display:block; max-width:none; -ms-interpolation-mode:bicubic;}
		.cboxIframe{width:100%; height:100%; display:block; border:0;}
		#colorbox, #cboxContent, #cboxLoadedContent{box-sizing:content-box; -moz-box-sizing:content-box; -webkit-box-sizing:content-box;}

		/* 
			User Style:
			Change the following styles to modify the appearance of Colorbox.  They are
			ordered & tabbed in a way that represents the nesting of the generated HTML.
		*/
		#cboxOverlay{background:#000;}
		#colorbox{outline:0;}
		#cboxContent{margin-top:20px;background:#000;}
		.cboxIframe{background:#fff;}
		#cboxError{padding:50px; border:1px solid #ccc;}
		#cboxLoadedContent{border:5px solid #000; background:#fff;}
		#cboxTitle{position:absolute; top:-20px; left:0; color:#ccc;}
		#cboxCurrent{position:absolute; top:-20px; right:0px; color:#ccc;}
		#cboxLoadingGraphic{background:url('https://sites.google.com/a/bbva.com/it-am-lab/files/loadingcbx.gif') no-repeat center center;}

		/* these elements are buttons, and may need to have additional styles reset to avoid unwanted base styles */
		#cboxPrevious, #cboxNext, #cboxSlideshow, #cboxClose {border:0; padding:0; margin:0; overflow:visible; width:auto; background:none; }
		
		/* avoid outlines on :active (mouseclick), but preserve outlines on :focus (tabbed navigating) */
		#cboxPrevious:active, #cboxNext:active, #cboxSlideshow:active, #cboxClose:active {outline:0;}
		
		#cboxSlideshow{position:absolute; top:-20px; right:90px; color:#fff;}
		#cboxPrevious{position:absolute; top:50%; left:5px; margin-top:-32px; background:url('https://sites.google.com/a/bbva.com/it-am-lab/files/controlscbx.png') no-repeat top left; width:28px; height:65px; text-indent:-9999px;}
		#cboxPrevious:hover{background-position:bottom left;}
		#cboxNext{position:absolute; top:50%; right:5px; margin-top:-32px; background:url('https://sites.google.com/a/bbva.com/it-am-lab/files/controlscbx.png') no-repeat top right; width:28px; height:65px; text-indent:-9999px;}
		#cboxNext:hover{background-position:bottom right;}
		#cboxClose{position:absolute; top:5px; right:5px; display:block; background:url('https://sites.google.com/a/bbva.com/it-am-lab/files/controlscbx.png') no-repeat top center; width:38px; height:19px; text-indent:-9999px;}
		#cboxClose:hover{background-position:bottom center;}
	.header_hide_style {
		display: none;
	}
	.header_style {
		height: 35px;
		background-color: #009EE5;
		border-right: 0.5px solid #FFFFFF;
		color: white;
		font-weight: bold;
		text-align: center;
	}
	.filtros_style {
		color: #094FA4;
		font-family: Arial, sans-serif;
		font-weight: bold;
		font-size: 13px;
	}
	.cell_style {
		height: 35px;
		border-bottom: 1px solid #D9D9D9;
		background-color: #FFFFFF;
		text-align: center;
	}
	.cell_left_style {
		height: 35px;
		border-bottom: 1px solid #D9D9D9;
		background-color: #FFFFFF;
		text-align: left;
	}
	.cell_warning_style {
		height: 35px;
		border-bottom: 1px solid #D9D9D9;
		background-color: #dd7e6b;
		text-align: center;     
		color: #000000;
	}
	.cell_warning_info_style {
		height: 35px;
		border-bottom: 1px solid #D9D9D9;
		background-color: #FFD966;
		text-align: center;     
		color: #000000;
	}
	.cell_width_200 {
		width: 200px;
	}
	.cell_width_180 {
		width: 200px;
	}
	.cell_width_120 {
		width: 120px;
	}
	.cell_width_100 {
		width: 100px;
	}
	.cell_width_85 {
		width: 85px;
	}
	.cell_width_70 {
		width: 70px;
	}
	.cell_width_60 {
		width: 60px;
	}
	.bold_style {
		font-weight: bold;
	}
