<template>
    <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
        :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { inject } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    setup() {
        const chartStadistics = inject('chartStadistics');
        return { chartStadistics };
    },mounted(){
        console.log(this.chartStadistics);
    },
    name: 'BarChart',
    components: { Bar },
    props: {
        //    aditionalInfo:Array,
        chartId: {
            type: String,
            default: 'bar-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 700
        },
        height: {
            type: Number,
            default: 300
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Object,
            default: () => { }
        }
    },
    data() {
        return {
            chartData: {
                labels: [
                    'hp',
                    'attack',
                    'defense',
                    'special attack',
                    'special defense',
                    'speed'
                ],
                datasets: [{
                    backgroundColor: (ctx) => {
                        const canvas = ctx.chart.ctx;
                        const gradient = canvas.createLinearGradient(150, 90, 700, 90);

                        gradient.addColorStop(0, '#E63946');
                        gradient.addColorStop(.5, '#A8DADC');
                        gradient.addColorStop(1, '#1D3557');

                        return gradient;
                    },
                    data: [this.chartStadistics[0].base_stat, 
                    this.chartStadistics[1].base_stat, 
                    this.chartStadistics[2].base_stat, 
                    this.chartStadistics[3].base_stat, 
                    this.chartStadistics[4].base_stat, 
                    this.chartStadistics[5].base_stat]
                }]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        }
                    },
                },
                plugins: {
                    legend: {
                        display: false
                    }, title: {
                        display: true,
                        text: 'Pokemon Stats',
                    },
                }
            }
        }
    }
}
</script>