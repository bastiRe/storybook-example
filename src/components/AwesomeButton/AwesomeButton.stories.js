import { storiesOf } from "@storybook/vue";
// import { action } from "@storybook/addon-actions";

import AwesomeButton from ".";

storiesOf("AwesomeButton", module).add("primary", () => ({
  components: { AwesomeButton },
  template: "<awesome-button>I am a button</awesome-button>"
}));
