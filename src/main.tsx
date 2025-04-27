import { StrictMode } from "react";
import {createRoot} from 'react-dom/client';

const root = document.getElementById("root") as unknown as HTMLElement;
createRoot(root).render(
  <StrictMode></StrictMode>
);
