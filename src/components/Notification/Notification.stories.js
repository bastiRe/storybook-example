// import { storiesOf } from "@storybook/vue";
// import { withKnobs, select, text } from "@storybook/addon-knobs/vue";
// import Notification from ".";

// storiesOf("Notification", module)
//   .addDecorator(withKnobs)
//   .add(
//     "default",
//     () => ({
//       components: { Notification },
//       props: {
//         type: {
//           default: select("type", ["info", "warning", "error"], "info")
//         },
//         content: {
//           default: text(
//             "content",
//             "Hodor, hodor. Hodor. Hodor. Hodor hodor! Hodor hodor HODOR! Hodor. Hodor hodor HODOR! Hodor. Hodor hodor."
//           )
//         }
//       },
//       template: `
//     <div style="padding: 30px">
//       <notification :type="type">
//           {{content}}
//       </notification>
//     </div>
//   `
//     }),
//     {
//       info: {
//         summary: "A notification component"
//       }
//     }
//   );
