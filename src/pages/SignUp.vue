<template>
  <div class="container">
    <div class="background">
    </div>
    <div class="content">
      <img src="@/assets/logo.svg" alt="GoBarber Logo">

      <form>
        <InputApp name="user" type="text" placeholder="Nome"/>
        <InputApp name="email" type="text" placeholder="E-mail"/>
        <InputApp name="password" type="password" placeholder="Senha"/>

        <ButtonApp title="Cadastrar"></ButtonApp>

        <a @click.prevent="goBack" href="/">
          <arrow-left-icon size="1.5x" class="custom-class"></arrow-left-icon>
          Voltar para o login
        </a>
      </form>
    </div>
  </div>
</template>

<script>
import ButtonApp from '@/components/ButtonApp.vue'
import InputApp from '@/components/InputApp.vue'

import { ArrowLeftIcon } from 'vue-feather-icons'

export default {
  name: 'SignUp',
  components: {
    ButtonApp,
    InputApp,
    ArrowLeftIcon
  },
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>

.container {
  height: 100vh;

  display: flex;
  align-items: stretch;
}

.content {
  display: flex;
  flex-direction: column;

  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;

    text-align: center;

    a {
      display: flex;

      place-content: center;

      color: #F4EDE8;

      text-decoration: none;

      transition: color 0.2s;

      &:hover {
        color: #dfdad7;
      }
    }
  }
  svg {
    margin-right: 16px;
  }
}
.background {
  flex: 1;

  background: url('../assets/sign-up-background.png') no-repeat center;
  background-size: cover;
}

</style>
