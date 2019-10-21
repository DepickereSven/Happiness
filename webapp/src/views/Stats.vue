<template>
    <v-container fluid fill-height class="column-elements">

        <v-container>
            <v-row cols="12" sm="6" class="justify-space-evenly">
                <div class="text-center" v-for="item in differentGraphTypes">
                    <div class="my-2">
                        <v-btn x-large color="success" dark @click="changeChart(item.name)">
                            <v-icon left>{{item.icon}}</v-icon>
                            {{item.name}}
                        </v-btn>
                    </div>
                </div>
            </v-row>
        </v-container>

        <v-layout align-center justify-center>
            <v-container v-if="error">
                <v-card class="mx-auto" max-width="620">
                    <v-img :src="selectedEmptyPic.src" :aspect-ratio="16/9">
                        <v-container fill-height fuild pa-2>
                            <v-layout fill-height>
                                <v-flex xs12 text-xs-right>
                                    <div v-html="selectedEmptyPic.location"></div>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title>
                        <div class="display-1 mb-2">No data yet...</div>
                        <div class="title font-weight-regular grey--text">Looks like you're to fast, come back later or switch graph</div>
                    </v-card-title>

                    <v-divider class="mt-6 mx-4"></v-divider>

                </v-card>
            </v-container>

            <v-container v-else>

                <div id="wrapper" v-if="weekOrMonth" >
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

                <div v-else>

                </div>

            </v-container>
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
            error: false,
            weekOrMonth: false,
            differentGraphTypes: [
                {
                    name: "Day",
                    icon: "mdi-calendar-today"
                },
                {
                    name: "Week",
                    icon: "mdi-calendar-range"
                },
                {
                    name: "Month",
                    icon: "mdi-calendar-month"
                }
            ],
            selectedEmptyPic: {
                src: null,
                location: null
            },
            emptyPic: [
                {
                    src: require('../assets/images/empty1.jpg'),
                    location: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@philberndt?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Philipp Berndt"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span></a>',
                },
                {
                    src: require('../assets/images/empty2.jpg'),
                    location: "<a style=\"background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px\" href=\"https://unsplash.com/@jonasjacobsson?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Download free do whatever you want high-resolution photos from Jonas Jacobsson\"><span style=\"display:inline-block;padding:2px 3px\"><svg xmlns=\"http://www.w3.org/2000/svg\" style=\"height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white\" viewBox=\"0 0 32 32\"><title>unsplash-logo</title><path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path></svg></span></a>"
                },
                {
                    src: require('../assets/images/empty3.jpg'),
                    location: "<a style=\"background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px\" href=\"https://unsplash.com/@patrickschoepflin?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Download free do whatever you want high-resolution photos from Patrick Schöpflin\"><span style=\"display:inline-block;padding:2px 3px\"><svg xmlns=\"http://www.w3.org/2000/svg\" style=\"height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white\" viewBox=\"0 0 32 32\"><title>unsplash-logo</title><path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path></svg></span></a>"
                }
            ],


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
        methods: {
            changeChart: async function (chartName) {
                await handle.generateChartData(this, chartName)
            }
        }
    }
</script>

<style scoped>

    .column-elements {
        flex-direction: column;
    }

    .container.fill-height > .layout {
        height: auto;
        width: 100%;
    }

    .justify-space-evenly{
        justify-content: space-evenly;
    }

</style>