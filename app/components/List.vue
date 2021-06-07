<template>
  <ListView for="item in getUsers" height="100%" separatorColor="transparent">
    <v-template>
      <ListItem
        :avatar="item.avatar_url"
        :name="item.name"
        :bio="item.bio"
        :id="item.id"
      />
    </v-template>
  </ListView>
</template>

<script>
import ListItem from './ListItem'
import { mapGetters } from 'vuex'

export default {
  components: { ListItem },
  computed: {
    ...mapGetters(['getUsers'])
  }
}
</script>

