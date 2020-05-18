import "./styles.css";

const $ = selector => {
  let elements = document.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
};

const toDeg = num => `${num}deg`;

const cube = $(".cube")[0];

const axis_x = $("#axis_x")[0];
const axis_y = $("#axis_y")[0];
const axis_z = $("#axis_z")[0];
const axis_arr = [axis_x, axis_y, axis_z];

const update_axis = target => e => {
  const value = e?.target?.value;
  cube.style.setProperty(`--${target}`, toDeg(value));

  //console.log(cube.style.getPropertyValue("--x"));
};

axis_arr.forEach(input =>
  input.addEventListener("input", update_axis(input.name))
);
