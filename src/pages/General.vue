<template>
  <Layout>
    <section class="px-32 py-14 overflow-auto">
      <div id="background" class="container mx-auto">
        <h1 class="ml-8 mt-3 sub-title">
          General Family History Resourses
        </h1>

        <div class="grid sm:flex">
          <ancestry />
          <graves />
          <search />
        </div>

        <div class="grid sm:flex">
          <grave />
          <past />
          <geneanet />
        </div>

        <div class="grid sm:flex">
          <heritage />
          <prisoners />
        </div>

        <br />
        <div class="border-b-4 border-gray-200"></div>
        <br />

        <h1 class="ml-8 mt-3 sub-title">
          General Jewish Family History Resourses
        </h1>

        <div class="grid sm:flex">
          <cemeteries />
          <blog />
          <gen />
        </div>

        <div class="grid sm:flex">
          <jri />
          <roots />
          <simcha />
        </div>
        <div class="grid sm:flex">
          <mate />
        </div>

        <br />
        <div class="border-b-4 border-gray-200"></div>
        <br />

        <h1 class="ml-8 mt-3 sub-title">
          Resourses
        </h1>

        <div class="grid sm:flex">
          <ahnenblatt />
          <date />
          <cyrillic />
        </div>
        <div class="grid sm:flex">
          <print />
          <hebrew />
          <shtetl />
        </div>
        <div class="grid sm:flex">
          <transkribus />
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
import ancestry from "@/components/General/ancestry";
import graves from "@/components/General/graves";
import search from "@/components/General/search";
import grave from "@/components/General/grave";
import past from "@/components/General/past";
import geneanet from "@/components/General/geneanet";
import cemeteries from "@/components/General/cemeteries";
import blog from "@/components/General/blog";
import gen from "@/components/General/gen";
import roots from "@/components/General/roots";
import hebrew from "@/components/General/hebrew";
import cyrillic from "@/components/Russia/General/cyrillic";
import print from "@/components/Russia/General/print";
import ahnenblatt from "@/components/General/ahnenblatt";
import shtetl from "@/components/General/shtetl";
import transkribus from "@/components/General/transkribus";
import heritage from "@/components/General/heritage";
import prisoners from "@/components/General/prisoners";
import jri from "@/components/General/jri";
import dnaancestry from "@/components/General/dnaancestry";
import dnamyheritage from "@/components/General/dnamyheritage";
import dnaliving from "@/components/General/dnaliving";
import dnafamily from "@/components/General/dnafamily";
import dname from "@/components/General/dname";
import mate from "@/components/General/mate";
import simcha from "@/components/General/simcha";
import gedmatch from "@/components/General/gedmatch";

import date from "@/components/General/date";

import dropdown from "@/components/Dropdown/dropdown";
import translate from "@/components/Dropdown/translate";

export default {
  metaInfo: {
    title: "General",
    meta: [
      {
        name: "description",
        content:
          "Family history where to find records of birth death and marriages",
      },
    ],
  },
  components: {
    ancestry,
    graves,
    grave,
    search,
    past,
    geneanet,
    cemeteries,
    blog,
    gen,
    roots,
    hebrew,
    cyrillic,
    print,
    ahnenblatt,
    shtetl,
    transkribus,
    heritage,
    prisoners,
    dropdown,
    translate,
    jri,
    mate,
    simcha,
    date,
  },
};
</script>
