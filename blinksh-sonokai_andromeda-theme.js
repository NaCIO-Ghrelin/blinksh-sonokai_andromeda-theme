cursor				= 'rgba(55, 117, 168, 0.375)'
background		= '#2b2d3a';
foreground		= '#e1e3e4';

black					= '#181a1c';
red						= '#fb617e';
green					= '#9ed06c';
yellow				= '#edc763';
blue					= '#6dcae8';
magenta				= '#bb97ee';
cyan					= '#f89860';
white					= '#e1e3e4';

lightBlack		= '#7e8294';
lightRed			= '#fb617e';
lightGreen		= '#9ed06c';
lightYellow		= '#edc763';
lightBlue			= '#6dcae8';
lightMagenta	= '#bb97ee';
lightCyan			= '#f89860';
lightWhite		= '#e1e3e4';

t.prefs_.set('color-palette-overrides',
	[
		black,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white,
	
		lightBlack, 
		lightRed, 
		lightGreen, 
		lightYellow,
		lightBlue, 
		lightMagenta, 
		lightCyan, 
		lightWhite
	]
);

t.prefs_.set('cursor-color',			cursor);
t.prefs_.set('foreground-color',	foreground);
t.prefs_.set('background-color',	background);
