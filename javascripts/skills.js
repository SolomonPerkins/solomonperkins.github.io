document.addEventListener("DOMContentLoaded", function(event) { 
	//Setting variables
	var skills_data = "skills_metrics.json";
	var skills_url = "/javascripts/" + skills_data;
	var wrapper_id = 'skills-list';
	var row;

	//Handle the callback on file load by looping through the json array
	var process = function( data ){
		for(var i=0; i < data.length; i++){
			row = data[i];
			build(row);
		}
	}

	//Build the DOM elements + attributes using the data given
	var build = function( row ) {
		if(!row['skill'] || row['skill'].trim() == "") {
			return;
		}

		var parent = document.getElementById(wrapper_id);
		var item = document.createElement('li');
		item.setAttribute('class','skill-list-item');

		var title = document.createElement('span');
		title.setAttribute('class', 'skill-name');
		title.innerHTML = row['skill'];

		var val = parseFloat(row['value']);
		var max = parseFloat(row['maximum']);
		var id = row['id'];
		var strength = ( val / max )* 100;
		var progress = document.createElement('span');
		progress.setAttribute('id', 'skill-bar-' + id );
		// progress.setAttribute('width', strength + '%');

		try{
			document.styleSheets[0].insertRule( '#skill-bar-' + id + ':before { width: ' + strength + '%;} ', 1)
			progress.setAttribute('class', 'skill-bar');

		} catch(exception){
			progress.setAttribute('class', 'skill-bar quirk');
			progress.innerHTML = " <span class='spacer'> &#8226; </span> " + strength + " %";
			console.error(" Fail to generate graph (exception): ", exception);

		}

		item.appendChild(title);
		item.appendChild(progress);
		
		parent.appendChild(item);
	}

	//Load the JSON file with custom XHR request.
	var loadJSON = function(url, callback) {
		var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open('GET', url, true);

		xobj.onreadystatechange = function(argument) {
			if( xobj.readyState == 4 && xobj.status == 200 ) {
				var data = JSON.parse(xobj.responseText);
				callback(data);
			}
		};

		xobj.send(null);
	}

	loadJSON( skills_url, process);
})