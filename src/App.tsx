import { ReactFlow, Background, BackgroundVariant } from "@xyflow/react";

import "@xyflow/react/dist/style.css";



function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow> 
        <Background color="#f1d2de" variant={BackgroundVariant.Cross}/>
      </ReactFlow>
    </div>
  );
}

export default App;
