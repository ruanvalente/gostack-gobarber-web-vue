<template>
  <div class="container">
    <div class="background"></div>
    <div class="content">
      <img src="@/assets/logo.svg" alt="GoBarber Logo" />

      <form @submit.prevent="checkedForm">
        <InputApp
          :style="!isError ? '' : 'border-color: #c53030'"
          v-model="signUp.user"
          name="user"
          type="text"
          placeholder="Nome"
        />
        <InputApp
          :style="!isError ? '' : 'border-color: #c53030'"
          v-model="signUp.email"
          name="email"
          type="text"
          placeholder="E-mail"
        />
        <InputApp
          :style="!isError ? '' : 'border-color: #c53030'"
          v-model="signUp.password"
          name="password"
          type="password"
          placeholder="Senha"
        />

        <ButtonApp title="Cadastrar"></ButtonApp>

        <a @click.prevent="goBack" href="/">
          <arrow-left-icon size="1.5x" class="custom-class"></arrow-left-icon>Voltar para o login
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
  data () {
    return {
      signUp: {
        user: '',
        email: '',
        password: ''
      },
      isError: false,
      erros: [
        {
          user: {
            messager: ''
          },
          email: {
            messager: ''
          },
          password: {
            messager: ''
          }
        }
      ],
      emailRegex: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    }
  },
  components: {
    ButtonApp,
    InputApp,
    ArrowLeftIcon
  },
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    saveInStore () {
      this.isError = true
      this.$store.commit('SAVE_USER', this.signUp)
    },
    checkedEmailPass (email, regex) {
      return regex.test(email)
    },
    checkedForm () {
      if (this.signUp.user && this.signUp.email && this.signUp.password) {
        this.saveInStore()
      }
      if (!this.signUp.user) {
        this.isError = true
        alert('O nome é obrigatório')
      }

      if (!this.signUp.email) {
        this.isError = true
        alert('O e-mail é obrigatório')
      } else {
        const resultMatch = this.checkedEmailPass(
          this.signUp.email,
          this.emailRegex
        )

        if (!resultMatch) {
          this.isError = true
          alert('Entre com um e-mail válido')
        }
        this.checkedEmailPass(this.signUp.email, this.emailRegex)
      }

      if (!this.signUp.password) {
        this.isError = true
        alert('A senha é obrigatória')
      }
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

      color: #f4ede8;

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
