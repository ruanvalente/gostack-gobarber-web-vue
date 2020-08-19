<template>
  <div class="container">
    <div class="content">
      <img src="@/assets/logo.svg" alt="GoBarber Logo" />

      <form @submit.prevent="doSignIn">
        <h1>Faça o seu logon</h1>

        <InputApp v-model="signIn.email" name="email" type="text" placeholder="E-mail" />

        <InputApp v-model="signIn.password" name="password" type="password" placeholder="Password" />

        <ButtonApp title="Entrar"></ButtonApp>

        <a href="#">Esqueci minha senha</a>
      </form>

      <a href="#">
        <log-in-icon size="1.5x" />Criar conta
      </a>
    </div>

    <div class="background"></div>
  </div>
</template>

<script>
import ButtonApp from '@/components/ButtonApp.vue'
import InputApp from '@/components/InputApp.vue'

import { LogInIcon } from 'vue-feather-icons'

export default {
  name: 'SignIn',
  data: () => ({
    signIn: {
      email: '',
      password: ''
    }
  }),
  components: {
    ButtonApp,
    InputApp,
    LogInIcon
  },
  methods: {
    doSignIn () {
      this.$router.push('/sign-up')
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

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;

      text-decoration: none;

      transition: color 0.2s;

      &:hover {
        color: #dfdad7;
      }
    }
  }

  > a {
    display: flex;

    justify-content: center;
    align-items: center;

    color: #ff9000;

    text-decoration: none;

    transition: color 0.2s;

    &:hover {
      color: #e98400;
    }

    svg {
      margin-right: 16px;
    }
  }
}

.background {
  flex: 1;

  background: url('../assets/sign-in-background.png') no-repeat center;
  background-size: cover;
}
</style>
