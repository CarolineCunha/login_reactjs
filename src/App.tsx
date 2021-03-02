import React from 'react';
import { Body } from './styles';
import { H1 } from './styles';
import { Html } from './styles';
import { Section } from './styles';
import { Form } from './styles';





function App() {
  return (
  
  <Html>
    
  <html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Login</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <Body>
  <body>
    <Section><section className="form-section">
      <H1><h1></h1></H1>

      <div className="form-wrapper">
        <Form><form action="">
          <div className="input-block">
            <label htmlFor="login-email">Email</label>
            <input type="email" id="login-email" />
          </div>
          <div className="input-block">
            <label htmlFor="login-password">Password</label>
           <input type="password" id="login-password" />
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form></Form>
      </div>
    </section>
    </Section>

  </body>
  </Body>
</html>
</Html>


  )
   
}

export default App;
