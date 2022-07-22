<template>
    <span class="animatedLink">
        <router-link class="link" :to="path">{{ title }}</router-link>
    </span>
</template>

<script>
export default {
  name: 'NavBarButton',
  props: [
    'path',
    'title'
  ]
}
</script>

<style lang="scss">
.animatedLink {
    padding: 1em 2em;
    display: inline-block;
    transition: 0.25s ease-out;
    position: relative;

    &:hover {
      background-color: var(--hover);
    }

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 5%;
      bottom: 0;
      left: 0;
      background-color: var(--main-color);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    .link, .link:visited {
      color: inherit;
      text-decoration: none;
    }
}

</style>
