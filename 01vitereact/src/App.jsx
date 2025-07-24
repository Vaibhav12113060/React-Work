import Chai from "./chai";

function App() {
  // return <h1>Hello Vaibhav</h1>;

  // return <Chai />;
  const userName = "Vaibhav Kumar";
  // Generally react allows us to return only one element but if we wants to return multiple then follow-

  return (
    <>
      <Chai />
      <h1>Something {userName} </h1>
      {/* {} inside this we only write evaluated expression--> means Final outcome */}
      <p>Test Para</p>
    </>
  );
}

export default App;
