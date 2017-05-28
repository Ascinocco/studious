<template>
    <div class="row studious-tabContainer">
        <div class="col col-12">
            <nav class="tabs" data-component="tabs">
                <ul>
                    <router-link tag="li" to="/" exact><a>Classes</a></router-link>
                    <router-link tag="li" to="/homework" exact><a>Homework</a></router-link>
                    <router-link tag="li" to="/settings" exact><a>Settings</a></router-link>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>