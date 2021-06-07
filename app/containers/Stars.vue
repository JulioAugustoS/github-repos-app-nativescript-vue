<template>
  <Page>
    <ActionBar title="Repositórios" />

    <StackLayout>
      <FlexboxLayout class="profile" justifyContent="center" alignItems="center" flexDirection="column">
        <Image :src="me.avatar_url" class="profile__img" borderRadius="100" />
        <Label :text="me.name" class="profile__name" />
        <Label :text="me.bio" textWrap class="profile__bio" />
      </FlexboxLayout>

      <Label text="Repositórios curtidos" class="title" />

      <ListView for="item in getRepos" class="list">
        <v-template>
          <FlexboxLayout flexDirection="column" justifyContent="center" class="repos">
            <Image :src="item.owner.avatar_url" class="repos__img" />
            <Label :text="item.name" class="repos__label-title text-center" />
            <Label :text="item.description" class="repos__label-description text-center" textWrap />
            <Button @tap="open(item.html_url)">
              <Span>Ver no github</Span>
            </Button>
          </FlexboxLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Modal from '@/components/Modal'

  export default {
    props: {
      id: Number
    },
    computed: {
      ...mapGetters(['getUsers', 'getRepos']),
      me() {
        return this.getUsers.filter(user => user.id === this.id)[0]
      }
    },
    created() {
      this.$store.dispatch('loadRepos', this.me.login)
    },
    methods: {
      open(url) {
        this.$showModal(Modal, { props: { url } })
      }
    }
  }
</script>

<style lang="scss" scoped>
.list {
  height: 100%;
}

.profile {
  &__img {
    width: 100;
    height: 100;
    margin-top: 10;
    margin-bottom: 5;
  }

  &__name {
    font-size: 16;
    font-weight: bold;
  }

  &__bio {
    text-align: center;
    margin: 0 20 0 20;
  }
}

.title {
  font-size: 20;
  font-weight: bold;
  margin-top: 50;
  margin-left: 10
}

.text-center {
  text-align: center;
}

.repos {
  &__img {
    width: 40;
    height: 40;
  }

  &__label-title {
    font-weight: bold;
    font-size: 18;
  }
}
</style>
