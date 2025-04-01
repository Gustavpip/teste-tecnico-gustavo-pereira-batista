import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

import clientTheme from './theme';
import AppRoutes from './routes';

function App() {
  return (
    <ChakraProvider theme={clientTheme}>
      <Router>
        <AppRoutes />
      </Router>
    </ChakraProvider>
  );
}

export default App;
