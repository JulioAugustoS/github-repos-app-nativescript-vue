<template>
  <FlexboxLayout>
    <TextField
      hint="Adicionar usuário"
      class="input"
      v-model="user"
    />
    <Button class="button" @tap="save">
      <Span class="fas" text.decode="&#xf067;" />
    </Button>
  </FlexboxLayout>
</template>

<script>
export default {
  data(){
    return {
      user: ""
    }
  },
  methods: {
    save(){
      this.$store.dispatch('User/loadUsers', this.user)
      this.user = "";
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  background: #eee;
  border-radius: 4px;
  border-width: 1;
  border-color: #eee;
  padding: 0 15;
  height: 40;
  width: 100%;
}
</style>
