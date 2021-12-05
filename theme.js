/*/
 * -------------------------------------------
 * sonokai/andromeda theme for blink.sh (ios).
 * -------------------------------------------
/*/

cursor		= 'rgba(55, 117, 168, 0.375)'
background	= '#2b2d3a';
foreground	= '#e1e3e4';

black		= '#181a1c';
red		= '#fb617e';
green		= '#9ed06c';
yellow		= '#edc763';
blue		= '#6dcae8';
magenta		= '#bb97ee';
cyan		= '#f89860';
white		= '#e1e3e4';

lightBlack	= '#131517';
lightRed	= '#f65c79';
lightGreen	= '#99cb67';
lightYellow	= '#e8c25e';
lightBlue	= '#68c5e3';
lightMagenta	= '#b692e9';
lightCyan	= '#f3925b';
lightWhite	= '#dcdedf';

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

t.prefs_.set('cursor-color',		cursor);
t.prefs_.set('foreground-color',	foreground);
t.prefs_.set('background-color',	background);
