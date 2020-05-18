import "./styles.css";

const $ = selector => {
  let elements = document.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
};

const toDeg = num => `${num}deg`;
const toPx = num => `${num}px`;

const cube = $(".cube")[0];

const axis_x = $("#axis_x")[0];
const axis_y = $("#axis_y")[0];
const axis_z = $("#axis_z")[0];
const axis_arr = [axis_x, axis_y, axis_z];

const updateAxis = target => e => {
  const value = e?.target?.value;
  cube.style.setProperty(`--${target}`, toDeg(value));
};

axis_arr.forEach(input =>
  input.addEventListener("input", updateAxis(input.name))
);

const cube_size = $("#cube_size")[0];

const updateCubeSize = e => {
  const value = e?.target?.value;
  cube.style.setProperty(`--size`, toPx(value));
};

cube_size.addEventListener("input", updateCubeSize);
