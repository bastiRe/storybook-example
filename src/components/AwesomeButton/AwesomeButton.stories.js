import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

import AwesomeButton from ".";

storiesOf("AwesomeButton", module)
  .add("primary", () => ({
    components: { AwesomeButton },
    methods: {
      action: action("click")
    },
    template: "<awesome-button @click='action'>I am a button</awesome-button>"
  }))
  .add("secondary", () => ({
    components: { AwesomeButton },
    template: "<awesome-button type='secondary'>I am a button</awesome-button>"
  }));
