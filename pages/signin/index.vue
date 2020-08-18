<template>
  <div class="wrap">
    <SignInForm :is-sending="isSending" @submit="signIn" />
    <BaseButton to="/" class="mts" is-txt>戻る</BaseButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSending: false,
    }
  },
  methods: {
    signIn({ email, password }) {
      // this.isSending を true にする
      console.log(email, password)
      // email, password を使ってサーバーにリクエスト
      // this.isSending を false にする
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  padding: 2.5rem 1rem 0;
}
</style>
