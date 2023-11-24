import Main from "./components/Main/main";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Search from "./components/Search/SearchBuild";
import Response from "./components/Response/Response";
import Authorization from "./components/Authorization/user";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const routesData = [
  { path: "/", element: <Main /> },
  { path: "/user", element: <Authorization /> },
  { path: "/search", element: <Search /> },
  { path: "/result", element: <Response /> },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            {routesData.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;