<template>
  <Layout>
    <section class="px-32 py-14 overflow-auto">
      <div id="background" class="container m-auto">
        <h1 class="ml-8 mt-3 sub-title">
          <g-image
            class="h-10 w-12 inline-block"
            src="@/images/europe/russian-flag.jpg"
            alt="russian flag"
          />
          Russian Jewish Family History Resourses
        </h1>

        <br />

        <div class="grid sm:flex">
          <lipes />
          <soldier />
          <soldiers />
        </div>
        <div class="grid sm:flex">
          <hero />
        </div>
      </div>
      <p>
        <dropdown />
      </p>
      <br />
      <p>
        Add
        <g-link
          class="text-red-600 hover:text-yellow-600"
          to="http://bit.ly/2SxWdgt"
          target="_blank"
        >
          google translate
        </g-link>
        to your browser extensions, to view foreign language web sites.
      </p>

      <br />
    </section>
  </Layout>
</template>

<script>
import soldier from "@/components/Russia/Jewish/soldier";
import soldiers from "@/components/Russia/Jewish/soldiers";
import hero from "@/components/Russia/Jewish/hero";
import lipes from "@/components/Russia/Jewish/lipes";

import dropdown from "@/components/Dropdown/dropdown";

export default {
  metaInfo: {
    title: "Russia Jewish",
    meta: [
      {
        name: "description",
        content:
          "russian jewish family history where to find records of birth death and marriages",
      },
    ],
  },
  components: {
    soldier,
    soldiers,
    hero,
    lipes,
    dropdown,
  },
};
</script>
