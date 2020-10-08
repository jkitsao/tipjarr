// import React from "react";

// import Select from "react-select";
// import { colourOptions, groupedOptions } from "./data";

// const groupStyles = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
// };
// const groupBadgeStyles = {
//   backgroundColor: "#EBECF0",
//   borderRadius: "2em",
//   color: "#172B4D",
//   display: "inline-block",
//   fontSize: 12,
//   fontWeight: "normal",
//   lineHeight: "1",
//   minWidth: 1,
//   padding: "0.16666666666667em 0.5em",
//   textAlign: "center",
// };

// const formatGroupLabel = (data) => (
//   <div style={groupStyles}>
//     <span>{data.label}</span>
//     <span style={groupBadgeStyles}>{data.options.length}</span>
//   </div>
// );

// export default Filter = () => (
//   <Select
//     defaultValue={colourOptions[1]}
//     options={groupedOptions}
//     formatGroupLabel={formatGroupLabel}
//   />
// );
import React from "react";
import Select from "react-select";

const options = [
  { value: "Javascript", label: "Javascript" },
  { value: "React", label: "React" },
  { value: "Frontend", label: "Frontend" },
  { value: "Backend", label: "Backend" },
  { value: "Design", label: "Design" },
  { value: "Css", label: "Css" },
];
// handleSelect = (e) => {
//   alert(e.target.value);
// };
const MyComponent = () => (
  <div className="w-64 h-10">
    <Select
      options={options}
      defaultValue={options[0]}
      //   className="shadow-md bg-gray-800"
      //   styles="background:#ccc"
      onChange={({ target }) => alert(target.value)}
    />
  </div>
);
export default MyComponent;
