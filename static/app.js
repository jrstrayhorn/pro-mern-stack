var contentNode = document.getElementById('contents');
var component = React.createElement(
  "h1",
  { className: "title" },
  "Hello World comple via script!"
); // a simple JSX component
ReactDOM.render(component, contentNode); // Render the component inside the content node