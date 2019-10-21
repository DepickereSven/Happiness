<template>
    <v-container fluid fill-height>
        <v-layout align-center class="column-elements">

            <Label class="display-4">Error 404</Label>

            <v-btn x-large color="success" dark @click="$router.push({name: 'vote'})">Go Back</v-btn>

        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "404"
    }
</script>

<style scoped>

    .column-elements {
        justify-content: space-evenly;
    }


</style>