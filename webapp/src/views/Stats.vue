<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>

            <div id="wrapper" v-if="weekOrMonth">
                <div id="chart-line">
                    <apexchart type=line height=160 :options="chartOptionsLine1" :series="happy"/>
                </div>

                <div id="chart-line2">
                    <apexchart type=line height=160 :options="chartOptionsLine2" :series="ok"/>
                </div>

                <div id="chart-line3">
                    <apexchart type=line height=160 :options="chartOptionsLine3" :series="sad"/>
                </div>
            </div>

            

        </v-layout>
    </v-container>
</template>

<script>

    import handle from "../assets/js/Vue/Stats/handle"

    export default {
        created: async function () {
            await handle.init(this);
        },
        data: () => ({
            weekOrMonth: false,
            happy: [{
                name: "Happy",
                data: []
            }],
            ok: [{
                name: "Ok",
                data: []
            }],
            sad: [{
                name: "Sad",
                data: []
            }],
            chartOptionsLine1: {
                chart: {
                    id: 'fb',
                    group: 'social',
                },
                colors: ['#008FFB'],
            },
            chartOptionsLine2: {
                chart: {
                    id: 'tw',
                    group: 'social',
                },
                colors: ['#546E7A'],
            },
            chartOptionsLine3: {
                chart: {
                    id: 'yt',
                    group: 'social',
                },
                colors: ['#00E396'],
            },
            otherOptions: {
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                toolbar: {
                    tools: {
                        selection: false
                    }
                },
                markers: {
                    size: 6,
                    hover: {
                        size: 10
                    }
                },
                tooltip: {
                    followCursor: false,
                    theme: 'dark',
                    x: {
                        show: false
                    },
                    marker: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: (seriesName) => seriesName,
                        }
                    }
                },
                grid: {
                    clipMarkers: false
                },
                yaxis: {
                    tickAmount: 2,
                    labels: {
                        minWidth: 0,
                        maxWidth: 160,
                    }
                },
                xaxis: {
                    type: 'datetime'
                }
            }
        }),
        computed: {}
    }
</script>

<style scoped>

</style>