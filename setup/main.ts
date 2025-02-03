import { nextTick, onMounted } from "vue";
import { defineAppSetup } from "@slidev/types";

// import "vuetify/styles"; // seems like this is not needed
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

const checkSlidev = (app) => {
  // __slidev__ is not available immediately
  // TS doesn't know about __slidev__
  const typedWindow = window as typeof window & { __slidev__?: any };
  const observer = new MutationObserver(() => {
    if (typedWindow) {
      const configs = typedWindow.__slidev__.configs;
      console.warn(
        "[Vuetify] __slidev__ detected via MutationObserver:",
        configs,
      );
      // TODO: use configs.vuetify to customize vuetify
      observer.disconnect(); // Stop observing once detected
    }
  });

  // watch for change in the DOM
  observer.observe(document.documentElement, {
    attributes: true,
    childList: true,
    subtree: true,
  });

  console.debug("[Vuetify] Waiting for __slidev__ via MutationObserver...");
};

const checkTheme = () => {
  const observer = new MutationObserver(() => {
    const isDark = document.documentElement.classList.contains("dark");
    vuetify.theme.global.name.value = isDark ? "dark" : "light";
    console.debug("[Veutify] Theme updated to:", isDark ? "dark" : "light");
    console.debug("[Veutfiy] Theme object:", vuetify.theme);
  });
  // Observe class attribute changes on <html>
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  console.debug("[Vuetify] Theme observer started");
};

export default defineAppSetup(({ app }) => {
  app.use(vuetify);
  checkSlidev(app);
  checkTheme();
});
