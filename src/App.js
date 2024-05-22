import "./App.css";
import Logo from "./components/Logo/Logo";
import Stories from "./components/Stories/Stories";
import { Routes as Switch, Route } from "react-router-dom";
import StoryPage from "./components/StoryPage/StoryPage";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/stories/:id" element={<StoryPage />} />
        <Route
          path="/"
          element={
            <>
              <Logo />
              <Stories />
            </>
          }
        />
      </Switch>
    </div>
  );
}

export default App;
