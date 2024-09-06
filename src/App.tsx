import React from "react"
import HappyTracker from "./HappyTracker"
import SadTracker from "./SadTracker"
import SadIncrementor from "./SadIncrementor"
import HappyIncrementor from "./HappyIncrementor"
function App() {
  return (
    <div className="p-2 space-y-2">
      <HappyTracker/>
      <SadTracker/>
      <HappyIncrementor/>
      <SadIncrementor/>
    </div>
  )
}

export default App
