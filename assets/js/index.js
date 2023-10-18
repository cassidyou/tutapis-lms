function index() {
	'use strict'


	/*LIne-Chart */
	var ctx = document.getElementById("revenue-sale").getContext('2d');
	var myChart = new Chart(ctx, {

		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			datasets: [{
				label: 'Revenue',
				data: [100, 210, 180, 454, 454, 1000, 230, 656, 656, 350, 350, 210],
				borderWidth: 3,
				backgroundColor: 'transparent',
				borderColor: '#153c21',
				pointBackgroundColor: '#ffffff',
				pointRadius: 0,
				type: 'line',
			},
			{

				label: 'Sale',
				data: [200, 530, 110, 110, 480, 820, 780, 435, 475, 738, 454, 454],
				borderWidth: 3,
				backgroundColor: 'transparent',
				borderColor: 'rgb(183, 179, 220,0.5)',
				pointBackgroundColor: '#ffffff',
				pointRadius: 0,
				borderColor: '#15343c',
				type: 'line',
				borderDash: [1],

			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				enabled: true,
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				xAxes: [{
					ticks: {
						fontColor: "#c8ccdb",
					},
					barPercentage: 0.7,
					display: true,
					gridLines: {
						color: 'rgba(119, 119, 142, 0.2)',
						zeroLineColor: 'rgba(119, 119, 142, 0.2)',
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#77778e",
					},
					display: true,
					gridLines: {
						color: 'rgba(119, 119, 142, 0.2)',
						zeroLineColor: 'rgba(119, 119, 142, 0.2)',
					},
					ticks: {
						min: 0,
						max: 1000,
						stepSize: 200
					},
					scaleLabel: {
						display: true,
						labelString: 'Thousands',
						fontColor: 'transparent'
					}
				}]
			},
			legend: {
				display: true,
				width: 30,
				height: 30,
				borderRadius: 50,
				labels: {
					fontColor: "#77778e"
				},
			},
		}
	});
}

/* Peity charts */

$('.peity-donut').peity('donut');


/*Bar-Chart */

Chart.elements.Rectangle.prototype.draw = function () {
	var ctx = this._chart.ctx;
	var vm = this._view;
	var left, right, top, bottom, signX, signY, borderSkipped, radius;
	var borderWidth = vm.borderWidth;
	var cornerRadius = 4;

	if (!vm.horizontal) {
		// bar
		left = vm.x - vm.width / 1;
		right = vm.x + vm.width / 1;
		top = vm.y;
		bottom = vm.base;
		signX = 1;
		signY = bottom > top ? 1 : -1;
		borderSkipped = vm.borderSkipped || 'bottom';
	} else {
		// horizontal bar
		left = vm.base;
		right = vm.x;
		top = vm.y - vm.height / 1;
		bottom = vm.y + vm.height / 1;
		signX = right > left ? 1 : -1;
		signY = 1;
		borderSkipped = vm.borderSkipped || 'left';
	}
	ctx.beginPath();
	ctx.fillStyle = vm.backgroundColor;
	ctx.strokeStyle = vm.borderColor;
	ctx.lineWidth = borderWidth;

	// Corner points, from bottom-left to bottom-right clockwise
	// | 1 2 |
	// | 0 3 |
	var corners = [
		[left, bottom],
		[left, top],
		[right, top],
		[right, bottom]
	];

	// Find first (starting) corner with fallback to 'bottom'
	var borders = ['bottom', 'left', 'top', 'right'];
	var startCorner = borders.indexOf(borderSkipped, 0);
	if (startCorner === -1) {
		startCorner = 0;
	}

	function cornerAt(index) {
		return corners[(startCorner + index) % 2];
	}

	// Draw rectangle from 'startCorner'
	var corner = cornerAt(0);
	ctx.moveTo(corner[0], corner[1]);

	for (var i = 1; i < 2; i++) {
		corner = cornerAt(i);
		nextCornerId = i + 1;
		if (nextCornerId == 2) {
			nextCornerId = 0
		}

		nextCorner = cornerAt(nextCornerId);

		width = corners[2][0] - corners[1][0];
		height = corners[0][1] - corners[1][1];
		x = corners[1][0];
		y = corners[1][1];

		var radius = cornerRadius;

		// Fix radius being too large
		if (radius > height / 2) {
			radius = height / 2;
		} if (radius > width / 2) {
			radius = width / 2;
		}

		ctx.moveTo(x + radius, y);
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		ctx.lineTo(x + width, y + height - radius);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		ctx.lineTo(x + radius, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);

	}

	ctx.fill();
	if (borderWidth) {
		ctx.stroke();
	}
};

function barchart() {
	'use strict'
	var ctx = document.getElementById('bar-chart').getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
			datasets: [{
				label: 'Total Project',
				backgroundColor: myVarVal,
				borderColor: myVarVal,
				data: [89, 59, 76, 56, 58, 73, 59, 87, 45, 54, 59, 76, 56,],
			}, {
				label: 'On Going',
				backgroundColor: "rgba(204, 204, 204,0.2)",
				borderColor: "rgba(204, 204, 204,0.2)",
				data: [66, 59, 76, 56, 58, 65, 59, 85, 23, 32, 59, 76, 56,],
			}
			],
		},
		options: {
			tooltips: {
				displayColors: true,
			},
			barValueSpacing: 3,        // doesn't work; find another way
			barDatasetSpacing: 3,
			scales: {
				xAxes: [{
					barThickness: 3,
					categoryPercentage: 4,
					barPercentage: 4,
					stacked: true,
					display: false,
					gridLines: {
						display: false,
					}
				}],
				yAxes: [{
					stacked: true,
					ticks: {
						beginAtZero: false,
					},
					display: false,
					gridLines: {
						display: false,
					},
					type: 'linear',
					display: false,
				}]
			},
			responsive: true,
			maintainAspectRatio: false,
			legend: { position: 'bottom', display: false, },
		}
	});
}

$('.peity-donut').peity('donut');

function vectormap() {
	/*-- Jvector Map -- */
	document.querySelector('#world-map-markers').innerHTML = ""
	$('#world-map-markers').vectorMap({
		map: 'world_mill_en',
		scaleColors: [myVarVal, '#f0f0ff'],
		normalizeFunction: 'polynomial',
		hoverOpacity: 0.7,
		hoverColor: true,
		regionStyle: {
			initial: {
				fill: '#86c789a3'
			}
		},
		markerStyle: {
			initial: {
				r: 6,
				'fill': '#1cbe55',
				'fill-opacity': 0.9,
				'stroke': '#fff',
				'stroke-width': 2.5,
			},

			hover: {
				'stroke': '#ffff',
				'fill-opacity': 1,
				'stroke-width': 5,
				
			}
		},
		backgroundColor: 'whitesmoke',
		markers: [{
			latLng: [-23.533773, -46.625290],
			name: 'Brazil'
		}, {
			latLng: [55.751244, 37.618423],
			name: 'Russia'
		}, {
			latLng: [52.237049, 21.017532],
			name: 'Poland'
		}, {
			latLng: [51.213890, -110.005470],
			name: 'Canada'
		}, {
			latLng: [20.5937, 78.9629],
			name: 'India'
		}]
	});
	/*-- End Jvector Map -- */
}



/* Carousel */
jQuery(document).ready(function () {

	jQuery('.owl-carousel').owlCarousel({
	  loop: true,
	  autoplay: true,
	  slideTransition: 'linear',
	  autoplaySpeed: 6000,
	  smartSpeed: 6000,
	  center: true,
	  margin: 22,
	  dots: false,
	  responsive: {
		0: {
		  items: 1,
		  nav: true
		},
		600: {
		  items: 2,
		  nav: true
		},
		992: {
		  items: 3,
		  nav: true
		},
		1300: {
		  items: 4,
		  nav: true
		},
		1500: {
		  items: 4,
		  nav: true
		},
	  }
	});
	jQuery('.owl-carousel').trigger('play.owl.autoplay', [2000]);
	function setSpeed() {
	  jQuery('.owl-carousel').trigger('play.owl.autoplay', [6000]);
	}
	$('.owl-nav').css('display', 'none');
	setTimeout(setSpeed, 1000);
  });



  



