import "./styles.css";
import "./ranges.css";
import "./radio.css";

const $ = selector => {
  let elements = document.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
};

const toDeg = num => `${num}deg`;
const toPx = num => `${num}px`;

const cube = $(".cube")[0];

const updateAxis = target => e => {
  const value = e?.target?.value;
  cube.style.setProperty(`--${target}`, toDeg(value));
};

const updateCubeSize = e => {
  const value = e?.target?.value;
  cube.style.setProperty(`--size`, toPx(value));

  const faces = $(".cube .face");

  if (value <= 0) {
    faces.forEach(face => face.style.setProperty(`border`, "none"));
  } else {
    faces.forEach(face =>
      face.style.setProperty(`border`, "var(--default-border)")
    );
  }
};

$(".axis_control").forEach(input =>
  input.addEventListener("input", updateAxis(input.name))
);

$("#cube_size")[0].addEventListener("input", updateCubeSize);

$(`input[name="backface"]`).forEach(_ =>
  _.addEventListener("change", e => {
    const value = e?.target?.value;
    cube.style.setProperty(`--backface-status`, value);
  })
);
