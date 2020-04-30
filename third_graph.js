var ctx = document.getElementById("myChart1");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Time to Run", "Operations (status)", "SSD: DetectorBusy", "PauseAndResetError", "IHCStatus", "dcsSorComand"],
        datasets: [{
            label: '# Count the number of events',
            data: [75, 26, 45, 79, 35, 100],
            backgroundColor: [
                'rgba(255,99,132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 0, 0, 1)'
                
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 3
        }]
		
		
		
    },
	
	
	
	
    options: { 
	
	     
	
        scales: {
		
            yAxes: [{
                ticks: {

                    beginAtZero:false
                }
            }]
        }
    }
});
