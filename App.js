// Manipulating DOM using React

// Creating nested React elements
const heading = React.createElement("h1", {
    id: "title-1",
    key: "first",
    style: {color: "#626fe6"},
}, "Hello, React!");

console.log(heading);

const heading2 = React.createElement("h1", {
    id: "title-2",
    key: "second",
    style: {color: "#e8630a"},
}, "Bonjour, React!");

const heading3 = React.createElement("h1", {
    id: "title-3",
    key: "third",
    style: {color: "f8b400"},
}, "Ciao, React!");

const container = React.createElement("div", {
    id: "container",
    key: "container-one",
}, [heading, heading2, heading3]);

console.log(container);

// Creating the root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the elements
root.render(container);