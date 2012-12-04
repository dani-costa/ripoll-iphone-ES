	$('#page100').live( 'pageinit',function(event){
	  var player = $('audio').get(0);
	  if (player!=null) player.play();
	});
	$('#page100').live('pagehide',function(event){
	  pararPlayer($('audio'));
	});
	$('#centre-benvinguda').live( 'pageinit',function(event){
	  var player = $('audio').get(0);
	  if (player!=null) player.play();
	});
	$('#centre-benvinguda').live('pagehide',function(event){
	  pararPlayer($('audio'));
	});
	function pararPlayer(obj) {
		audioElement = obj.get(0);
		if (audioElement!=null) {
			audioElement.pause();
			audioElement.currentTime=0;
		}
	};