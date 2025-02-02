import { defineAppSetup } from "@slidev/types";

import "vuetify/styles";
import { createVuetify, useTheme } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

export default defineAppSetup(({ app }) => {
  app.use(vuetify);
  const observer = new MutationObserver(() => {
    const isDark = document.documentElement.classList.contains("dark");
    vuetify.theme.global.name.value = isDark ? "dark" : "light";
    console.debug("[Veutify] Theme updated to:", isDark ? "dark" : "light");
    console.debug("[Veutfiy] Theme object:", vuetify.theme)
  });
  // Observe class attribute changes on <html>
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  console.debug("[Vuetify] Theme observer started");
});
