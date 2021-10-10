<template>
  <Layout>
    <section class="px-32 py-14 overflow-auto">
      <div id="background" class="container mx-auto">
        <h1 class="ml-8 mt-3 sub-title">
          DNA Testing
        </h1>
        <div class="grid sm:flex">
          <dnaancestry />
          <painter />
          <dnafamily />
        </div>

        <div class="grid sm:flex">
          <gedmatch />
          <dnaliving />
          <dnamyheritage />
        </div>

        <div class="grid sm:flex">
          <dname />
        </div>

        <br />

        <dropdown />
        <translate />

        <br />
      </div>
    </section>
  </Layout>
</template>

<script>
import dnaancestry from "@/components/General/dnaancestry";
import dnamyheritage from "@/components/General/dnamyheritage";
import dnaliving from "@/components/General/dnaliving";
import dnafamily from "@/components/General/dnafamily";
import dname from "@/components/General/dname";
import gedmatch from "@/components/General/gedmatch";
import painter from "@/components/General/painter";

import dropdown from "@/components/Dropdown/dropdown";

export default {
  metaInfo: {
    title: "DNA",
    meta: [
      {
        name: "description",
        content:
          "Dna resourses and testing companies: ancestry, familytreedna, livingdna, myheritagedna, 23andmedna. Dna tools: DNA Painter and gedmatches",
      },
    ],
  },
  components: {
    dnaancestry,
    dnamyheritage,
    dnaliving,
    dnafamily,
    dname,
    gedmatch,
    painter,
    dropdown,
  },
};
</script>
