<template>
    <v-app id="inspire">
        <v-app-bar app color="indigo" dark>
            <v-toolbar-title>Happiness Indicator</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="$router.push({name: 'stats'})">
                <v-icon>mdi-chart-areaspline-variant</v-icon>
            </v-btn>
            <v-btn icon @click="$router.push({name: 'login'})">
                <v-icon>mdi-login-variant</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <slot></slot>
        </v-content>

        <v-footer color="indigo" class="justify-center" app>
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>