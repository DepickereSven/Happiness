<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>

            <template v-if="!voted">
                <v-card class="mx-auto" max-width="620">
                    <v-img :src="selectedHappyPic.src" :aspect-ratio="16/9">
                        <v-container fill-height fuild pa-2>
                            <v-layout fill-height>
                                <v-flex xs12 text-xs-right>
                                    <div v-html="selectedHappyPic.location"></div>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title>
                        <div class="display-1 mb-2">Your day is done...</div>
                        <div class="title font-weight-regular grey--text">{{date}}, how would you rate your day?</div>
                    </v-card-title>

                    <v-divider class="mt-6 mx-4"></v-divider>

                    <v-card-text class="chips-centering">
                        <v-chip class="mr-2" color="green" text-color="white" @click="rate(ratings.happy)">
                            <v-icon left>mdi-emoticon-excited-outline</v-icon>
                            {{ratings.happy}}
                        </v-chip>
                        <v-chip class="mr-2" @click="rate(ratings.ok)">
                            <v-icon left>mdi-emoticon-neutral-outline</v-icon>
                            {{ratings.ok}}
                        </v-chip>
                        <v-chip class="mr-2" color="red" text-color="white" @click="rate(ratings.sad)">
                            <v-icon left>mdi-emoticon-sad-outline</v-icon>
                            {{ratings.sad}}
                        </v-chip>
                    </v-card-text>
                </v-card>
            </template>

            <template v-else>
                <v-card class="mx-auto" max-width="620">
                    <v-img :src="selectedTomorrowPic.src" :aspect-ratio="16/9">
                        <v-container fill-height fuild pa-2>
                            <v-layout fill-height>
                                <v-flex xs12 text-xs-right>
                                    <div v-html="selectedTomorrowPic.location"></div>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title>
                        <div class="display-1 mb-2">See you tomorrow</div>
                        <div class="title font-weight-regular grey--text">No mather how your day went, just relax and enjoy the time left!</div>
                    </v-card-title>

                    <v-divider class="mt-6 mx-4"></v-divider>

                </v-card>
            </template>


        </v-layout>
    </v-container>
</template>

<script>

    import handle from "../assets/js/Vue/Vote/handle"

    export default {
        created: function () {
            handle.init(this);
        },
        data: () => ({
            voted: null,
            date: null,
            selectedHappyPic: {
                src: null,
                location: null
            },
            selectedTomorrowPic: {
                src: null,
                location: null
            },
            happinessPic: [
                {
                    src: require('../assets/images/happiness1.jpg'),
                    location: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@jblesly?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Lesly Juarez"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span></a>'
                },
                {
                    src: require('../assets/images/happiness2.jpg'),
                    location: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@lephunghia?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Nghia Le"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span></a>'
                },
                {
                    src: require('../assets/images/happiness3.jpg'),
                    location: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@priscilladupreez?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Priscilla Du Preez"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span></a>'
                },
                {
                    src: require('../assets/images/happiness4.jpg'),
                    location: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@jfelise?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Josh Felise"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span></a>'
                }
            ],
            tomorrowPic: [
                {
                    src: require('../assets/images/tomorrow1.jpg'),
                    location: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@jannerboy62?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Nick Fewings"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span></a>'
                },
                {
                    src: require('../assets/images/tomorrow2.jpg'),
                    location: '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@timmossholder?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Tim Mossholder"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span></a>'
                }
            ],
            ratings: {
                happy: "Happy",
                ok: "Ok",
                sad: "Sad"
            }
        }),
        methods: {
            rate: async function (arg) {
                await handle.voteRequest(this, arg)
            }
        }

    }
</script>

<style scoped>

    .chips-centering {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

</style>