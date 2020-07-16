import React from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <MyComponent 
        foo='bar'
        people={people} 
      />
      <h1>Hello from AWS Amplify</h1>
      <AmplifySignOut />
    </div>
  )
}

const people = [
  'Larry'
  , 'Curly'
  , 'Moe'
];

//export default withAuthenticator(App)
export default App;