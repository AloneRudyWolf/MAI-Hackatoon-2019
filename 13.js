

var ctx = document.getElementById('13').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2011', '2012', '2013', '2014', '2015', '2016','2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'WT Average Wages',
            data: [63798, 68956, 72485, 74561, 76801, 78949, 79965, 82247, 86521, 89652, 91567, 93861, 97123],
            backgroundColor: [
                'rgba(0, 0, 255, 0.7)',//11
                'rgba(0, 40 , 255, 0.7)',//12
                'rgba(0, 80, 255, 0.7)',//13
                'rgba(0, 120, 255, 0.7)',//14
                'rgba(0, 160, 255, 0.7)',//15
                'rgba(0, 200, 255, 0.7)',//16
                'rgba(0, 240, 255, 0.7)',//17
                'rgba(0, 255, 255, 0.7)',//18
                'rgba(0, 255, 0, 0.4)',//19
                'rgba(0, 255, 0, 0.5)',//20
                'rgba(0, 255, 0, 0.6)',//21
                'rgba(0, 255, 0, 0.7)',//22
                'rgba(0, 255, 0, 0.8)'//23
                
            ],
            
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});