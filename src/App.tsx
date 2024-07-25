import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };
  return <Header onSearch={handleSearch} />;
}

export default App;
