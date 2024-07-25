import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };
  return (
    <>
      <Header onSearch={handleSearch} />
      <Content searchKey={searchKeyword} />
    </>
  );
}

export default App;
