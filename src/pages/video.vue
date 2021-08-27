<template>
  <Layout>
    <section class="px-32 py-14 overflow-auto">
      <div id="background" class="container mx-auto">
        <h1 class="ml-8 mt-3 sub-title">
          Youtube video's
        </h1>

        <div class="grid sm:flex">
          <burial />
          <company />
          <oneninetwo />
        </div>

        <div class="grid sm:flex">
          <naturalization />
          <marriage />
        </div>
        <br />
        <h1 class="ml-8 mt-3 sub-title">
          Youtube video makers to follow
        </h1>
        <div class="border-b-4 border-gray-200"></div>
        <br />
        <div class="grid sm:flex">
          <genea />
          <lisa />
          <tv />
        </div>

        <dropdown />
        <translate />

        <br />
      </div>
    </section>
  </Layout>
</template>

<script>
import marriage from "@/components/Video/marriage";
import naturalization from "@/components/Video/naturalization";
import burial from "@/components/Video/burial";
import oneninetwo from "@/components/Video/oneninetwo";
import company from "@/components/Video/company";
import genea from "@/components/Video/other/genea";
import tv from "@/components/Video/other/tv";
import lisa from "@/components/Video/other/lisa";

import dropdown from "@/components/Dropdown/dropdown";
import translate from "@/components/Dropdown/translate";

export default {
  metaInfo: {
    title: "video's",
    meta: [
      {
        name: "description",
        content: "Youtube Family history video's",
      },
    ],
  },
  components: {
    marriage,
    burial,
    naturalization,
    oneninetwo,
    dropdown,
    translate,
    company,
    genea,
    tv,
    lisa,
  },
};
</script>
