<template>
    <div class="ui vertical inverted sidebar menu">
        <div class="item">
            <div class="header">App</div>
            <div class="menu">
                <router-link to="/" class="item">Dashboard</router-link>
                <router-link to="/classes" class="item">Classes</router-link>
                <router-link to="/homework" class="item">Homework</router-link>
                <router-link to="/settings" class="item">Settings</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
</style>