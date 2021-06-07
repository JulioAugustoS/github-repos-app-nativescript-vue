<template>
  <Page>
    <StackLayout>
      <WebView :src="url" style="height: 100%" />
    </StackLayout>
  </Page>
</template>

<script>
export default {
  props: {
    url: String
  }
}
</script>
