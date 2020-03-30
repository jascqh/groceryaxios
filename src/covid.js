import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          labels:[],
          datasets: [
            {
              label: 'Number of cases in the US',
               data:[],
              borderWidth:0.5,
              borderColor:"orange",
              backgroundColor:'orange',
              fill:false
            }
          ]
          
        },
        options: {
           
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://covid19.soficoop.com/country/us').then(response=>{
        this.results=response.data.snapshots
        for(let entry in this.results){
            this.chartdata.datasets[0].data.push(this.results[entry].cases)
            this.chartdata.labels.push(this.results[entry].timestamp)
            
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
        this.fetchData()
        
     }

    
    
    
}