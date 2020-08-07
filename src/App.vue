<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #312E38;
  color: #F4EDE8;
  -webkit-font-smoothing: antialiased;
}

body,
input,
button {
  font-size: 16px;
  font-family: 'Roboto Slab', serif;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}
button {
  cursor: pointer;
}
</style>
