<template>
  <div :style="{borderColor: borderInput}">
    <template v-if="name === 'email'">
      <mail-icon :style="{color: colorInput}" size="1.5x"></mail-icon>
    </template>

    <template v-if="name === 'password'">
      <lock-icon :style="{color: colorInput }" size="1.5x"></lock-icon>
    </template>

    <template v-if="name === 'user'">
      <user-icon :style="{color: colorInput}" size="1.5x" class="custom-class"></user-icon>
    </template>
    <input
      @input="$emit('input', $event.target.value)"
      @focus="setFocused('#ff9000')"
      @blur="removeFocused('#ff9000')"
      ref="inputRef"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="value"
    />
  </div>
</template>

<script>
import { MailIcon, LockIcon, UserIcon } from 'vue-feather-icons'

export default {
  name: 'InputApp',
  props: ['name', 'type', 'placeholder', 'value'],
  data () {
    return {
      borderInput: '',
      colorInput: ''
    }
  },
  components: {
    MailIcon,
    LockIcon,
    UserIcon
  },
  methods: {
    setFocused (color) {
      this.borderInput = color
    },
    removeFocused (color) {
      if (this.$refs.inputRef.value.length > 0) {
        this.colorInput = color
      }
      this.borderInput = ''
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;

  width: 100%;
  height: 56px;
  padding: 0 16px;

  border-radius: 10px;
  border: 2px solid #232129;

  background: #232129;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;

    color: #f4ede8;
    background: transparent;

    border: none;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }

  &:focus-within {
    color: #ff9000;
  }
}
</style>
