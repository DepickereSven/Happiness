<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Happiness Indicator</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field label="Login" name="login" prepend-icon="mdi-account" type="text" v-model="userName"></v-text-field>
                                    <v-text-field label="Password" name="password" prepend-icon="mdi-lock" type="password" v-model="password"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn v-on:click="login" color="primary">Login</v-btn>
                            </v-card-actions>
                            <v-progress-linear color="primary" :indeterminate="true" height="10" v-show="isLoading"></v-progress-linear>
                        </v-card>
                        <v-alert v-model="alert.status" dismissible type="error" transition="scale-transition">
                            {{alert.message}}
                        </v-alert>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>


<script>
    import handle from "../assets/js/Vue/Login/handle"

    export default {
        data: () => ({
            userName: '',
            password: '',
            isLoading: false,
            alert: {
                status: false,
                message: ''
            }
        }),
        methods: {
            login: async function () {
                await handle.login(this);
            }
        }
    }
</script>

<style scoped>
</style>