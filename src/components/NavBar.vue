<template>
    <nav>
      <nav-bar-button path="/" title="Quiénes somos"/>
      <nav-bar-button path="/servicios" title="Servicios"/>
      <nav-bar-button path="/como-importar" title="Cómo Importar"/>
      <nav-bar-button path="/calculadora-de-costes" title="Calculadora de gastos"/>
      <nav-bar-button path="/blog" title="Blog"/>
      <nav-bar-button path="/contacto" title="Contacto"/>
      <nav-bar-button path="/contratar-servicio" title="Contratar servicio"/>
    </nav>
</template>

<script>
import NavBarButton from './NavBarButton.vue'

export default {
  name: 'NavBar',
  components: {
    NavBarButton
  }
}

</script>

<style>
nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1em;

  background: linear-gradient(
        90deg,
        var(--main-bg) 0%,
        var(--secondary-bg) 80%
        );
}

</style>
