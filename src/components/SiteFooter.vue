<template>
    <div>
        <span><img src="../assets/logo.png" alt=""></span>
        <span>This is a header</span>
        <span>Whatsapp</span>
        <span>Área de Clientes</span>
        <span>Idioma</span>
    </div>
</template>

<style scoped>
div {
    padding: 1em 1em;
    display: flex;
    align-items: center;
    justify-content: right;
}

div > span {
    padding: 0 1em;
}

div > span:first-child {
    padding: 0;
    margin-right: auto;
    transition: 0.25s ease-out;
}

div > span:first-child:hover {
    background-color: red;
}

img {
    height: 3em;
}

</style>
