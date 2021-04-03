<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://tebyansmart.com/" target="_blank">Tebyan Smart</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} CodeLabs</span>
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">Powered by</span>
      <a href="https://tebyansmart.com/">Tebyan</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
