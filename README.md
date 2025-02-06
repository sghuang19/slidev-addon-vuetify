# slidev-addon-vuetify

A [Slidev](https://sli.dev) addon that brings [Vuetify](https://vuetifyjs.com)
components to your slides.

<div align="center">
  <a href="https://npmjs.com/package/slidev-addon-vuetify">
    <img
      src="https://img.shields.io/npm/v/slidev-addon-vuetify?color=2B90B6"
      alt="NPM version"
    >
  </a>
</div>

## Usage

Install the package, with your package manager of choice:

```sh
npm install --save slidev-addon-vuetify
pnpm add slidev-addon-vuetify
yarn add slidev-addon-vuetify
bun add slidev-addon-vuetify
```

Then, enable this addon for your slides using front matter:

```markdown
## <!-- slides.md -->

addons:

- vuetify

---

# A Slide Show

...
```

Alternatively, you can enable the addon by adding the following property into
`package.json`:

```json
{
  "slidev": {
    "addons": ["vuetify"]
  }
}
```

You can now seamlessly use Naive UI components in your slides, just as you would
in any other Vue application!

```markdown
<v-button variant="tonal" icon="mdi-account" size="large">Button</v-button>

<v-card class="mx-auto" prepend-icon="$vuetify" subtitle="The #1 Vue UI Library"
width="400"

>   <template v-slot:title>

    <span class="font-weight-black">Welcome to Vuetify</span>

  </template>

  <v-card-text class="bg-surface-light pt-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
    debitis quis est labore voluptatibus!
  </v-card-text>
</v-card>
```
