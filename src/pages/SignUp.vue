<template>
  <div class="container">

    <div class="content">
      <img src="@/assets/logo.svg" alt="GoBarber Logo">

      <form>
        <h1>Faça o seu logon</h1>

        <input type="email" placeholder="E-mail">
        <input type="password" placeholder="Password">

        <!-- <button type="submit">Entrar</button> -->
        <ButtonApp title="Entrar"></ButtonApp>

        <a href="#">Esqueci minha senha</a>
      </form>

      <a href="#">
        <log-in-icon size="1.5x" />
        Criar conta
      </a>
    </div>

    <div class="background">
    </div>

  </div>
</template>

<script>
import { LogInIcon } from 'vue-feather-icons'
import ButtonApp from '@/components/ButtonApp.vue'

export default {
  name: 'SignUp',
  components: {
    LogInIcon,
    ButtonApp
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

    input {
      width: 100%;
      padding: 16px;
      margin-top: 24px;

      background: #232129;
      color: #F4EDE8;

      border: 2px solid #232129;
      border-radius: 10px;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    /* button {
      background: #FF9000;
      width: 100%;
      border: 2px solid #FF9000;
      color: #312E38;
      font-weight: 500;
      border-radius: 10px;
      padding: 16px 0;
      margin: 24px 0;
      transition: background 0.2s;

      &:hover {
        background: #e98400;
      }
    } */

    a {
      color: #F4EDE8;

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

    color: #FF9000;

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
