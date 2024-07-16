const heading = React.createElement(
  "div",
  { id: "heading" },
  [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1",{}, "This is child h1 tag"),React.createElement("h2",{}, "This is child h2 tag"),]
  )],[React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1",{}, "This is child2 h1 tag"),React.createElement("h2",{}, "This is child2 h2 tag"),]
  )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
