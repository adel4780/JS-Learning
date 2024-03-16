// Es6 Modules -> JS
import { Circle, Rectangle } from "./Es6-modules.js";

document.addEventListener("DOMContentLoaded", function () {
  const c = new Circle(10);
  const r = new Rectangle(4, 3);

  const areaText = `مساحت دایره: ${c.getArea()}, مساحت مستطیل: ${r.getArea()}`;
  document.getElementById("area").textContent = areaText;
});
