// @ts-ignore: typescript doesn't know about our inline bundling system
// so we need to silence the error
//import script from "./scripts/graph.inline"
import { QuartzComponentConstructor } from "./types" // don't forget to add tis import (not in documentation)
 
export default (() => {
  function ChangeLangButton() {
    return <button id="btn">Click me</button>
  }
 
  ChangeLangButton.beforeDOMLoaded = `
  console.log("hello from before the page loads!")
  `
 
  ChangeLangButton.afterDOMLoaded = `
  document.getElementById('btn').onclick = () => {
    alert('butts!')
  }`
  //ChangeLangButton.afterDOMLoaded = script
  return ChangeLangButton
}) satisfies QuartzComponentConstructor