function createRadar(id , obj , title){
	$('#'+id).highcharts({
	    chart: {
	        polar: true,
	        type: 'areaspline'
	    },

	    credits:{
			enabled : false
		},
	    title: {
	        text: title,
	       // x: -20 //center
	    },

	    pane: {
	    	size: '80%'
	    },

	    xAxis: {
	        categories: obj.skills,
	        tickmarkPlacement: 'on',
	        lineWidth: 0,
	    },

	    yAxis: {
            gridLineInterpolation: 'polygon',
	        lineWidth: 0,
	        min: 0,
	        max:10,
	    },

	    tooltip: {
	    	shared: true,
	      	//pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
	    },

	    legend: {
			//layout: 'vertical',
			//align: 'right',
			//verticalAlign: 'middle',
			//borderWidth: 0,
			borderRadius: 5,
           	borderWidth: 1,
           	enabled: false
		},
	    series: [{
	        name: 'Rank',
	        data: obj.rates,
	        //pointPlacement: 'on'
	    }]

	});
}
function createLine(id , obj , title){
	$('#'+id).highcharts({
 		chart: {
            type: 'bar'
        },
        title: {
            text: title,
            color:'#b9b9b9',
        },
        xAxis: {
            categories: obj.skills,
            color:'#b9b9b9',
            title: {
                text: null,
                align: 'high'
            }
        },
        yAxis: {
        	 title: {
                text: null,
                align: 'high'
            },
            color:'#b9b9b9', 
            min: 0,
            max: 10,
        },
        tooltip: {
           shared: true,
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {            
           enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Rank',
            color: '#BF7B89',
            data: obj.rates,
        }]
    });
}