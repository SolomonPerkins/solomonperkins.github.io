	var w = 500,
		h = 500;

	var colorscale = d3.scale.category10();

	//Legend titles
	var LegendOptions = ['Professional', 'Personal'];

	//Data
	var d = [
			  [
				{axis:"Linux & Open Source",value:0.9},
				{axis:"Quality Assurance",value:0.8},
				{axis:"Performance Testing",value:0.7},
				{axis:"Continious Integrations",value:0.65},
				{axis:"Project Management",value:0.50},
				{axis:"Unit Testing",value:0.80},
				{axis:"Agile Development",value:0.76},
				{axis:"Salesforce",value:0.70},
				{axis:"PHP Frameworks",value:0.70},
				{axis:"C#",value:0.38},
				{axis:"JavaScript",value:0.60},
				{axis:"Algorithms",value:0.78},
				{axis:"Artifical Intelligence",value:0.35},
				{axis:"Raspberry Pi",value:0.10},
				{axis:"Spiritual Well Being",value:0.14},
				{axis:"Agriculture",value:0.01},
				{axis:"Reading",value:0.70},
				{axis:"Blogging",value:0.02},
				{axis:"Politics",value:0.07},
				{axis:"Renewable Energy",value:0.0},
				{axis:"Sustainable Living",value:0.0},
				{axis:"Mentorship",value:0.37},
				{axis:"Family",value:0.30}
			  ],[
			
				{axis:"Linux & Open Source",value:0.9},
				{axis:"Quality Assurance",value:0.18},
				{axis:"Performance Testing",value:0.08},
				{axis:"Continious Integrations",value:0.48},
				{axis:"Project Management",value:0.0},
				{axis:"Unit Testing",value:0.0},
				{axis:"Agile Development",value:0.70},
				{axis:"Salesforce",value:0.0},
				{axis:"PHP Frameworks",value:0.0},
				{axis:"C#",value:0.0},
				{axis:"JavaScript",value:0.6},
				{axis:"Algorithms",value:0.60},
				{axis:"Artifical Intelligence",value:0.59},
				{axis:"Raspberry Pi",value:0.85},
				{axis:"Spiritual Well Being",value:1},
				{axis:"Agriculture",value:0.9},
				{axis:"Reading",value:0.60},
				{axis:"Blogging",value:0.62},
				{axis:"Politics",value:0.00},
				{axis:"Renewable Energy",value:0.68},
				{axis:"Sustainable Living",value:1},
				{axis:"Mentorship",value:0.78},
				{axis:"Family",value:1}
			  ]
			];

	//Options for the Radar chart, other than default
	var mycfg = {
	  w: w,
	  h: h,
	  maxValue: 0.6,
	  levels: 6,
	  ExtraWidthX: 300
	}

	//Call function to draw the Radar chart
	//Will expect that data is in %'s
	var rdar = RadarChart.draw("#chart", d, mycfg);

	////////////////////////////////////////////
	/////////// Initiate legend ////////////////
	////////////////////////////////////////////

	var svg = d3.select('#body')
		.selectAll('svg')
		.append('svg')
		.attr("width", w+300)
		.attr("height", h)

	//Create the title for the legend
	var text = svg.append("text")
		.attr("class", "title")
		.attr('transform', 'translate(90,0)') 
		.attr("x", w - 70)
		.attr("y", 10)
		.attr("font-size", "12px")
		.attr("fill", "#404040")
		.text("My interests");
			
	//Initiate Legend	
	var legend = svg.append("g")
		.attr("class", "legend")
		.attr("height", 100)
		.attr("width", 200)
		.attr('transform', 'translate(90,20)') 
		;
		//Create colour squares
		legend.selectAll('rect')
		  .data(LegendOptions)
		  .enter()
		  .append("rect")
		  .attr("x", w - 65)
		  .attr("y", function(d, i){ return i * 20;})
		  .attr("width", 10)
		  .attr("height", 10)
		  .style("fill", function(d, i){ return colorscale(i);})
		  ;
		//Create text next to squares
		legend.selectAll('text')
		  .data(LegendOptions)
		  .enter()
		  .append("text")
		  .attr("x", w - 52)
		  .attr("y", function(d, i){ return i * 20 + 9;})
		  .attr("font-size", "11px")
		  .attr("fill", "#737373")
		  .text(function(d) { return d; })
		  ;	