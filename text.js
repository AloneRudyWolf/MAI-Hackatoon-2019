var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ["LHC(1)", "SSD(2)", "OPERATIONS(1)", "MCH(1)", "TOF(1)", "AD(0)"],
        datasets: [{
            label: '# The number of events of a certain person',
            data: [3, 2, 13, 1, 11, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
