import Template1 from './layouts/template1/Template1'

function App() {
  const user = {
    company: 'A',
  }

  let Template = Template1

  switch (user.company) {
    case 'A':
      Template = Template1

      break

    default:
      break
  }

  return <Template>This is content</Template>
}

export default App
