import React from 'react';
import PublicRoutes from './PublicRoutes';

const App = () => {

  return (
    <section>
      {
        // Here we put the public home, when the page has finished the login 
        // we will place a validation to show the private or public routes
        <PublicRoutes />
      }
    </section>
  );
};

export default App;