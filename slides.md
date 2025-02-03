---
vuetify:
  theme:
    defaultTheme: "myTheme"
    themes:
      myTheme:
        dark: false
        colors:
          surface: "#FFFFFF"
          primary: "#FF0000"
          secondary: "#00FF00"
          background: "#FFFF00"
          "primary-darken-1": "#3700B3"
          "secondary-darken-1": "#018786"
          error: "#B00020"
          info: "#2196F3"
          success: "#4CAF50"
          warning: "#FB8C00"
---

# `slidev-addon-vuetify` Components Preview

---

## Buttons

<Buttons/>

---

## Cards

<Cards />

---

## Current Vuetify Config (For Testing Purpose)

<code>{{ $slidev.configs.vuetify }}</code>
