import React from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <MyComponent foo='bar' />
      <h1>Hello from AWS Amplify</h1>
      <AmplifySignOut />
    </div>
  )
}

//export default withAuthenticator(App)
export default App;