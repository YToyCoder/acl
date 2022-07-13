<script lang="ts" setup>
const a = 1
</script>


<template>
    <QLayout style="height: 400px;">
      <QHeader elevated class="q-mr-sm">
        <QToolbar style="height: 20px;">
          <QBtn flat round dense icon="menu" class="q-mr-sm"></QBtn>
        </QToolbar>
        <QToolbar inset></QToolbar>
      </QHeader>

      <QPageContainer>
        <QPage class="q-pa-md">
          page
        </QPage>
      </QPageContainer>
    </QLayout>
</template>