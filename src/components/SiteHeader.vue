<template>
    <div>
        <span>
            <router-link :to="{path: '/'}">
                <img id="logo" src="../assets/logo.png" alt="Company logo"/>
            </router-link>
        </span>
        <span id="whatsapp" name="whatsapp">
            <a href="https://web.whatsapp.com/send?l=es&phone=34681121612" target="_blank">
                <span>WhatsApp</span>
                <img src="../assets/whatsapp.svg" alt="WhatsApp icon">
            </a>
        </span>
        <span>Área de Clientes</span>
        <span>Idioma</span>
        <img id="animated-car" src="../assets/car.svg" alt="Animated car moving left to right">
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  mounted () {
    const whatsapp = document.getElementsByName('whatsapp')[0]
    const whatsappLogo = whatsapp.getElementsByTagName('img')[0]

    // Whatsapp Button
    $(whatsapp).on({
      mouseenter () {
        $(whatsappLogo).addClass('animated')
      },
      mouseleave () {
        $(whatsappLogo).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function () {
            $(this).removeClass('animated')
          })
      }
    })

    // Car position
    const car = $('#animated-car')
    car.on('load', function () {
      const height = car.parent().outerHeight(true) - car.outerHeight(true) + 4 + 'px'
      car.css({ top: height })
    })
  }
}
</script>

<style scoped lang="scss">
div {
    padding: 1em 1em;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: right;

    background: linear-gradient(90deg, var(--main-color), var(--secondary-color));
    background-size: 600% 600%;

    -webkit-animation: gradient 10s ease infinite;
    -moz-animation: gradient 10s ease infinite;
    animation: gradient 10s ease infinite;

    > span {
        padding: 0 1em;

        &:first-child {
            padding: 0;
            margin-right: auto;
            transition: 0.25s ease-out;

            &:hover {
                background-color: var(--secondary-color);
            }
        }

        span {
            transition: 0.75s ease;
        }
    }
}

#whatsapp {
    a {
        display: flex;
        align-items: center;

        img {
            height: 1.5em;
            margin-left: 0.5em;
            position: relative;
        }

        &:hover > {
            span {
                font-size: 125%;
            }
        }
    }
}

.animated {
    animation: bounce 0.75s;
    animation-iteration-count: 1;
}

#animated-car {
    position: absolute;
    width: 1.5em;
    padding: 0;
    margin: 0;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);

    animation: car 30s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

#logo {
    height: 3em;
}

@keyframes bounce {
    0% {top: 0px;}
    50% {top: -0.5em;}
    100% {top: 0px;}
}

@keyframes car {
    0% {left: -1.5em}
    100% {left: 100%}
}

</style>
