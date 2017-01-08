var currentDate =  new Date();

/*
	Should append the year and prefix to select content
*/
var appendYearToContent = function(selector, date, prefix) {
	prefix = prefix || '';
	if(selector && date){
		var element = document.querySelector(selector);
		element.innerHtml = element.innerHtml + prefix + date.getFullYear();
	}
}

var footerSelector = "#footer-year";


document.addEventListener("DOMContentLoaded", function(event) { 
	appendYearToContent(footerSelector, currentDate, ' - ');
});

