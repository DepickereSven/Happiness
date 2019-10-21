<template>
    <v-app id="inspire">
        <v-app-bar app color="indigo" dark>
            <v-toolbar-title>Happiness Indicator</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon @click="$router.push({name: 'vote'})" v-on="on">
                        <v-icon>mdi-vote</v-icon>
                    </v-btn>
                </template>
                <span>Vote</span>
            </v-tooltip>
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon @click="$router.push({name: 'stats'})" v-on="on">
                        <v-icon>mdi-chart-areaspline-variant</v-icon>
                    </v-btn>
                </template>
                <span>Stats</span>
            </v-tooltip>
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon @click="$router.push({name: 'login'})" v-on="on">
                        <v-icon>mdi-login-variant</v-icon>
                    </v-btn>
                </template>
                <span>Login</span>
            </v-tooltip>
        </v-app-bar>

        <v-content>
            <slot></slot>
        </v-content>

        <v-footer color="indigo" class="justify-center" app>
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>