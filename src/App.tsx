import React from "react"
import HappyTracker from "./HappyTracker"
import SadTracker from "./SadTracker"
import SadIncrementor from "./Components/SadIncrementor"
import HappyIncrementor from "./Components/HappyIncrementor"
import ClearMomentsButton from "./Components/ClearMomentsButton"
function App() {
  return (
    <div className="p-2 space-y-2">
      <HappyTracker/>
      <SadTracker/>
      <HappyIncrementor/>
      <SadIncrementor/>
      <ClearMomentsButton/>
    </div>
  )
}

export default App
