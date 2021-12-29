import { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom";
import App from './app/app';

export default function Root(props) {

  return (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}
