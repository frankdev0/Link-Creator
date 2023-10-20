interface ApexChartOptions {
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
    responsive: {
      breakpoint: number;
      options: {
        legend: {
          position: string;
          offsetX: number;
          offsetY: number;
        };
      };
    }[];
    plotOptions: {
      bar: {
        horizontal: boolean;
        borderRadius: number;
        columnWidth: string;
        endingShape: string;
        dataLabels: {
            position: string;
          total: {
            enabled: boolean;
            style: {
              fontSize: string;
              fontWeight: number;
            };
          };
        };
      };
    };
    colors: ['#471C8F', '#E17396'],
    xaxis: {
        type: "datetime", // Set the type to "category"
        categories: [
            '01/01/2011 GMT',
        '01/02/2011 GMT',
        '01/03/2011 GMT',
        '01/04/2011 GMT',
        '01/05/2011 GMT',
        '01/06/2011 GMT',
        ],
      },
    legend: {
        position: "right", // Set the position to "bottom"
        offsetY: 40,
    };
    fill: {
      opacity: number;
    };
   
  }
  
  
  interface ApexPieInterface {
    
        chart: {
          id: 'apexchart-example',
        },
        labels: ['Gossip', 'Sport', 'Finance'],
        legend: {
          position: string, 
        },
     
  }