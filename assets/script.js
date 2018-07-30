
$.fn.dummyRAWData = function() {
	function randomNumber() {
	    var x = Math.floor((Math.random() * 10) + 1);
	    return x - 1
	}
	var wew = $(this)
	var arr = ['00', '10', '30', '61', '62', '63', '68', '69', '71', '72', '73']
	setInterval(function(){
		wew.append(new Date() + ' 0.00196 01530 0.00000 0.21100 0.00000 -00006 000120 ' + arr[randomNumber()] + "\r\n")
	    wew.scrollTop(wew[0].scrollHeight);
	}, 1000)
}

$.fn.chartTemperature = function() {
    Highcharts.chart('container-temperature', {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: 'Temperature'
        },
        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 200,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: '℃'
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B' // green
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D' // yellow
            }, {
                from: 160,
                to: 200,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Temperature',
            data: [80],
            tooltip: {
                valueSuffix: ' ℃'
            }
        }]

    },
    // Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 20);

                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);

            }, 3000);
        }
    });
}

$.fn.chartHumidity = function() {
    Highcharts.chart('container-humidity', {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Humidity'
        },
        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 100,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: '%'
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B' // green
            }, {
                from: 20,
                to: 60,
                color: '#DDDF0D' // yellow
            }, {
                from: 60,
                to: 100,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Humidity',
            data: [80],
            tooltip: {
                valueSuffix: ' %'
            }
        }]
    },
    // Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 20);

                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);

            }, 3000);
        }
    });
}

$.fn.chartPressure = function() {
	Highcharts.setOptions({
	    global: {
	        useUTC: false
	    }
	});

	Highcharts.chart('container-pressure', {
	    chart: {
	        type: 'spline',
	        animation: Highcharts.svg, // don't animate in old IE
	        marginRight: 10,
	        events: {
	            load: function () {

	                // set up the updating of the chart each second
	                var series = this.series[0];
	                var arr = [1000,1002,1004,1003,1004.5,1008]
	                setInterval(function () {
	                    var x = (new Date()).getTime(), // current time
	                        y = arr[Math.floor((Math.random() * 5) + 1)]
	                    series.addPoint([x, y], true, true);
	                }, 1000);
	            }
	        }
	    },
	    title: {
	        text: 'Air Pressure'
	    },
	    xAxis: {
	        type: 'datetime',
	        tickPixelInterval: 150
	    },
	    yAxis: {
	        title: {
	            text: 'Value'
	        },
	        plotLines: [{
	            value: 0,
	            width: 1,
	            color: '#808080'
	        }]
	    },
	    tooltip: {
	        formatter: function () {
	            return '<b>' + this.series.name + '</b><br/>' +
	                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
	                Highcharts.numberFormat(this.y, 2);
	        }
	    },
	    legend: {
	        enabled: false
	    },
	    exporting: {
	        enabled: true
	    },
	    series: [{
	        name: 'Random data',
	        data: (function () {
	            // generate an array of random data
	            var data = [],
	                time = (new Date()).getTime(),
	                i;

	            for (i = -19; i <= 0; i += 1) {
	                data.push({
	                    x: time + i * 1000,
	                    y: Math.random()
	                });
	            }
	            return data;
	        }())
	    }]
	});
}

$.fn.chartAir = function() {
    var gaugeOptions = {

        chart: {
            type: 'solidgauge',
            marginTop: -700
        },
        title: null,
        pane: {
            center: ['50%', '85%'],
            size: '105%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    var gaugeOptions2 = {
        chart: {
            type: 'solidgauge'
        },

        title: null,
        pane: {
            center: ['50%', '50%'],
            size: '100%',
            startAngle: 0,
            endAngle: 360,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };
    // The speed gauge
    var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 200
        },
        title: {
            text: 'Wind Speed'
        },
        credits: {
            enabled: true
        },
        series: [{
            name: 'Speed',
            data: [80],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">knot</span></div>'
            },
            tooltip: {
                valueSuffix: ' knot'
            }
        }]

    }));

    // The RPM gauge
    var chartRpm = Highcharts.chart('container-rpm', Highcharts.merge(gaugeOptions2, {
        yAxis: {
            min: 0,
            max: 360
        },
        title: {
            text: 'Wind Direction'
        },
        series: [{
            name: 'Direction',
            data: [100],
            dataLabels: {
                format: '<div style="text-align:center;margin-top:-30px!important"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">* degrees</span></div>'
            },
            tooltip: {
                valueSuffix: ' degrees'
            }
        }]

    }));

    // Bring life to the dials
    setInterval(function () {
        // Speed
        var point,
            newVal,
            inc;

        if (chartSpeed) {
            point = chartSpeed.series[0].points[0];
            inc = Math.round((Math.random() - 0.5) * 100);
            newVal = point.y + inc;

            if (newVal < 0 || newVal > 200) {
                newVal = point.y - inc;
            }

            point.update(newVal);
        }

        // RPM
        if (chartRpm) {
            point = chartRpm.series[0].points[0];
            inc = Math.random() - 0.5;
            newVal = point.y + inc + 70;

            if (newVal < 0 || newVal > 5) {
                newVal = point.y - inc;
            }
            point.update(newVal);
        }
    }, 2000);

    $('#container-rpm .highcharts-axis-labels > text').next().html('0')
}

$.fn.slideShow = function() {
	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  var dots = document.getElementsByClassName("dot");
	  if (n > slides.length) {slideIndex = 1}    
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";  
	  }
	  for (i = 0; i < dots.length; i++) {
	      dots[i].className = dots[i].className.replace(" active", "");
	  }
	  slides[slideIndex-1].style.display = "block";  
	  dots[slideIndex-1].className += " active";
	}

	$('a.prev').click(function(){
		plusSlides(-1)
	})
	$('a.next').click(function(){
		plusSlides(1)
	})
	
	setInterval(function(){
		$('a.next').click()
	}, 3000);

	$('.dot').click(function(){
		currentSlide($(this).attr('data-id'))
	})
	
	if (slideIndex > 3) {
		slideIndex = 1
	}
};

function startTime() {
	var arrDay = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
	var arrMonth = ['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    var today = new Date();
    var day = today.getDay();
    var d = today.getDate();
    var mn = today.getMonth();
    var y = today.getFullYear();
    var h = today.getHours();
    h = h < 10 ? '0'+h : h;
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
	var utc = new Date(today.setHours(today.getHours() - 7));

    var uh = utc.getHours();
    uh = uh < 10 ? '0'+uh : uh;
    var um = utc.getMinutes();
    var us = utc.getSeconds();
    um = checkTime(um);
    us = checkTime(us);

    $('.digital-time').html("<div class='clock-left'>"+arrDay[day] + " " + d + ", " + arrMonth[mn] + " " + y + "</div><div class='clock-right'>STANDARD WAKTU INDONESIA <span class='hour'>" + h + ":" + m + ":" + s + " WIB / " + uh + ":" + um + ":" + us + " UTC</span></div>");
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
