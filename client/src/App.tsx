// import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar.tsx'
import Grid from './components/Grid/Grid.tsx'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

function App() {
  // const [count, setCount] = useState(0)

  return (
      <ApolloProvider client={client}>
      <div className='inline-flex'>
        <Sidebar/>
        <Grid/>
      </div>
    </ApolloProvider>
  )
}

export default App