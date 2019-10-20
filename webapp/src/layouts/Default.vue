<template>
    <v-app id="inspire">
        <v-app-bar app color="indigo" dark>
            <v-toolbar-title>Happiness Indicator</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <slot></slot>
        </v-content>

        <v-footer color="indigo" app>
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>