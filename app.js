const parent=React.createElement("div",{id:'parent'},[
    React.createElement("div",{id:"child"},
       [React.createElement("h1",{},"iam an h1 tag"),
        React.createElement("h2",{},"iam an h2 tag")]

    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"iam an h1 tag"),
         React.createElement("h2",{},"iam an h2 tag")]
 
     )]
)
// const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"hello world from react")
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// heading is an object createElement return object 
//parent is a react elemnt it is an object