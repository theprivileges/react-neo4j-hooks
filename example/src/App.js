import React from 'react'
import { useMyHook } from 'react-neo4j-hooks'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App