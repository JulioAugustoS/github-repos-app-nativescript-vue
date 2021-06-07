<template>
  <Page>
    <ActionBar>
      <Label text="teste" />
    </ActionBar>
    <StackLayout>
      <Form />
      <List />
    </StackLayout>
  </Page>
</template>

<script>
import Form from "@/components/Form"
import List from "@/components/List"

export default {
  components: { Form, List },
  mounted() {
    setTimeout(() => {
      console.log(this.$store.state)
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>

</style>

