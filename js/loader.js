import cssClassModifiers from "./css-class-modifiers.js";
import { elLoader } from "./html-elements.js";

export default function loader() {
  const { classLoaderWrapperNone } = cssClassModifiers;
  elLoader.classList.toggle(classLoaderWrapperNone);
}
