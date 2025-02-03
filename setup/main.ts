import { nextTick, onMounted } from "vue";
import { defineAppSetup } from "@slidev/types";

// import "vuetify/styles"; // seems like this is not needed
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#FFFF00",
    surface: "#FFFFFF",
    primary: "#FF0000",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  // NOTE: applying themes here works
  // theme: {
  //   defaultTheme: 'myCustomLightTheme',
  //   themes: {
  //     myCustomLightTheme,
  //   },
  // },
});

const checkSlidev = (app) => {
  // __slidev__ is not available immediately
  // TS doesn't know about __slidev__
  const typedWindow = window as typeof window & { __slidev__?: any };
  const observer = new MutationObserver(() => {
    if (typedWindow) {
      const configs = typedWindow.__slidev__.configs;
      console.warn("[Vuetify] __slidev__ ready:", configs);
      // TODO: use configs.vuetify to customize vuetify
      // FIXME: this is not working
      console.warn("[Vuetify] Before theme update:", vuetify.theme);
      vuetify.theme.global.name.value = configs.vuetify.theme.defaultTheme;
      console.warn("[Vuetify] After theme update:", vuetify.theme.themes.value);
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
