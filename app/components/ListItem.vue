<template>
  <FlexboxLayout flexDirection="column" alignItems="center" class="list">
    <Image
      :src="avatar"
      class="list__img"
    />
    <Label :text="name" />
    <Label :text="bio" textWrap class="" />
    <Button class="list__btn" @tap="show">
      <Span>Ver Perfil</Span>
    </Button>
  </FlexboxLayout>
</template>

<script>
import Stars from '@/containers/Stars'

export default {
  props: ["avatar", "name", "bio", "id"],
  methods: {
    show() {
      this.$navigateTo(Stars, { props: { id: this.id } })
    }
  }
}
</script>


<style lang="scss" scoped>
.list {
  &__img {
    width: 50;
    height: 50;
    border-radius: 50%;
  }

  &__btn {
    font-size: 12;
    margin: 0;
    padding: 0;
  }
}
</style>
