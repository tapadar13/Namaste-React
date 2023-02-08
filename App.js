// Manipulating DOM using React

// Creating nested React elements
const heading = React.createElement("h1", {
    id: "title-1",
    style: {color: "#626fe6"},
}, "Hello, React!");

console.log(heading);

// Creating the root using the createRoot API
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the element
root.render(heading);