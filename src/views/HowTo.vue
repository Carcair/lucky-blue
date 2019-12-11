<template>
    <div>
        <Header />
        <h3>How to play</h3>
        <ul>
            <li>At the start of the game, you will have 2 minutes to get tickets.</li>
            <li>After clicking at Get Ticket button, you can choose 7 numbers which will be your ticket numbers.</li>
            <li>There will be 7 rounds, after each, game will pick a random number</li>
            <li>After the 7th round, you'll rerouted to the result screen</li>
            <li>Result can be none, one or more winning tickets depending on correct numbers</li>
        </ul>
    </div>
</template>

<script>
import Header from './../components/layout/Header';

export default {
    name: 'HowTo',
    components: {
        Header
    }
}
</script>

<style scoped>

</style>