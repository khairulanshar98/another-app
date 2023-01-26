import React from "react";
//@ts-ignore
const SimpleApp = React.lazy(() => import("simpleApp/app"));

function App() {
  return (
    <React.Suspense fallback={"loading..."}>
      <SimpleApp />
    </React.Suspense>
  );
}

export default App;
