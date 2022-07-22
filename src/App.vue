<template>
  <header>
    <site-header color="blue"/>
  </header>
  <nav-bar/>
  <main>
    <router-view/>
  </main>
  <footer>
    <site-footer/>
  </footer>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    NavBar
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  /* Color variables */
  --main-color: #FF0000 ;
  --secondary-color: #FFCC00;
  --tertiary-color: #000000 ;
  --hover: rgb(161, 158, 158);

}

* {
  padding: 0;
  margin: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: var(--tertiary-color);
}

body {
  background-color: white;
}

main {
  width: 65%;
  margin: auto;
}

a {
  text-decoration: none;
}

a:hover, a:visited{
  color: var(--main-color);
}

/* Animations */
@-webkit-keyframes gradient {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes gradient {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes gradient {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

</style>
