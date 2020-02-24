var generateChart = function(){
    var wDom = document.querySelector("#writing_progress");
    var margin = {top: 20, right: 20, bottom: 70, left: 40},
        width = wDom.clientWidth - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    // Parse the date / time
    var parseDate = d3.time.format("%Y-%m").parse;
    var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .tickFormat(d3.time.format("%b %Y"));

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

    //d3.select("#writing_skills_chart").remove();

    var svg = d3.select("#writing_skills_chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

    d3.json("./javascripts/writing_skills.json", function(data) {
        // console.log(data);
        data.forEach(function(d) {
            d.date = parseDate(d.date);
            d.score = +d.score;
        });
       
      x.domain(data.map(function(d) { return d.date; }));
      y.domain([0, d3.max(data, function(d) { return d.score; })]);

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
        .selectAll("text")
          .style("text-anchor", "end")
          .attr("dx", "-.8em")
          .attr("dy", "-.55em")
          .attr("transform", "rotate(-90)" );

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Score");

    var Tooltip = d3.select("#writing_skills_chart")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("display", "none")

    var mouseover = function(d) {
        Tooltip.html('<div id="thumbnail">'
        + '<div class="ttitle">' + d.article + '</div>'
        + '<span><small>score</small>' + d.score + '</span>'
        + '<span><small>readibility</small>' + d.readibility + '</span>'
        + '</div>')
              .style("left", (d3.mouse(this)[0] + 0) + "px")
              .style("top", (y(d.score) -10) + "px")
              .style("opacity", 1)
              .style("display", "block")
              .style("opacity", 1)
    };

    var mouseout = function(d) {
        Tooltip.style("opacity", 0);
    };

    svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.score); })
      .attr("height", function(d) { return height - y(d.score); })
      .on("mouseover", mouseover)
      .on("mouseout", mouseout)
      //.on("mouseleave", mouseout)
    });

};

window.onload = function(evt) {
    generateChart();
}
window.onresize = function(evt) {
    d3.select("#writing_skills_chart").html('');
    generateChart();
}
