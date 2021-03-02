import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
        margin: 0;
  padding: 0;
    }

  form .input-block input {
  width: 100%;
  display: block;
  margin-top: 20px;
  padding: 15px;
  font-size: 16px;
  color: #4F4F4F;
  border-radius: 2px;
  border: 1px solid #363636;
  outline-color: #4F4F4F;
}

 form .btn-login {
  display: block;
  min-width: 120px;
  border: none;
  background-color: #DAA520;
  color: white;
  border-radius: 25px;
  margin: auto;
  padding: 16px;
  font-size: 16px;
}

form .input-block {
  margin-bottom: 20px;
}

form .input-block label {
  font-size: 16px;
  color: darkslateblue;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
  }
}
`;

