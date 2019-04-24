import { configure } from "@storybook/vue";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

// setup vue info addon
import { withInfo, setDefaults } from "storybook-addon-vue-info";
import { addDecorator } from "@storybook/vue";

addDecorator(withInfo);
