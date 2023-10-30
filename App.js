const parent = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child"},
[React.createElement("h1", {id: "header"}, "Im a AI Robo"),
React.createElement("h2", {id: "header"}, "Im a AI Robo")])],
React.createElement("div", {id: "child2"},
[React.createElement("h1", {id: "header"}, "Im a AI Robo"),
React.createElement("h2", {id: "header"}, "Im a AI Robo")])
);

const root = ReactDOM.createRoot(document.getElementById('root1'));

root.render(parent)

console.log(parent)``