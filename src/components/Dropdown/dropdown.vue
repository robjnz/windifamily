<template>
  <div class="mb-48">
    <br />
    <div class="border-b-4 border-gray-200"></div>
    <br />

    <br />
    <p>
      <australasia />
      <caribbean />
      <europe />
      <jewish />
      <northamerica />
      <blog />
      <general />
    </p>
  </div>
</template>

<script>
import jewish from "@/components/Dropdown/jewish";
import australasia from "@/components/Dropdown/australasia";
import europe from "@/components/Dropdown/europe";
import northamerica from "@/components/Dropdown/northamerica";
import caribbean from "@/components/Dropdown/caribbean";
import blog from "@/components/Dropdown/blog";
import general from "@/components/Dropdown/general";


export default {
  components: {
    jewish,
    australasia,
    europe,
    northamerica,
    caribbean,
    blog,
    general,
  },
};
</script>

<style></style>
