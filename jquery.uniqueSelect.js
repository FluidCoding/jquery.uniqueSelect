(function($){
	$.fn.uniqueOptions = function(Options){
		var udElms = this;
			udElms.on('change', function(e) { updateUniquely(e.target); });
		var values = {};
		for(var i = 0; i<udElms.length; i++)
			udElms[i].value == '' ? values[''] = '' : updateUniquely(udElms[i]);

		function updateUniquely(e){
			var ev = e.value;
			var ei = e.id || e.name;
			for(var i = 0; i < udElms.length; i++){
				for(var j = 0; j < udElms[i].length; j++){
					if(udElms[i][j].value == ev && ei !== udElms[i].id){
						for(var k in values){
							if(values[k] == ei && ev !== k){
								values[k] = '';
								$(udElms).find(' option[value="'+k+'"]').removeAttr('disabled');
							}
						}
						if(ev !== '') $(udElms[i][j]).attr('disabled', true);
					}
				}
			}
			if(ev !== '') values[ev] = ei;
		}
	};
})(jQuery);
// Init Example:
// $('.uniqueA').uniqueOptions();
// - Each Element in set needs an id or name attribute