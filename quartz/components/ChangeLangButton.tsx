// @ts-ignore: typescript doesn't know about our inline bundling system
// so we need to silence the error
import script from "./scripts/graph.inline"
import { QuartzComponentConstructor } from "./types"
 
export default (() => {
  function ChangeLangButton() {
    return <button id="btn">Click me</button>
  }
 
  ChangeLangButton.afterDOMLoaded = script
  return ChangeLangButton
}) satisfies QuartzComponentConstructor