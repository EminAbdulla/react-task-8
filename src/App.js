import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./Components/Cards/Cards";
import HashLoader from "react-spinners/HashLoader";
import Pagenation from "./Components/Pagenation/Pagenation";
import Header from "./Components/Header/Header";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(8);
  const[orginal,setOrginal]=useState([])
  const lastCardIndex = currentPage * postsPerPage;
  const firstCardIndex = lastCardIndex - postsPerPage;
  const paginatedProducts = data.slice(firstCardIndex, lastCardIndex);
  console.log(paginatedProducts);
  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setData(response.data);
    setLoading(false);
    setOrginal(response.data)

  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header
       data={data} setData={setData} orginal={orginal} 
        />
      <div className="select__page__post">
        <select
          onChange={(e) => {
            setPostPerPage(e.target.value);
          }}
        >
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
        </select>
      </div>
      {loading ? (
        <HashLoader
          color="#000000"
          size={100}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ) : (
        <Cards data={paginatedProducts} />
      )}
      <Pagenation
        currentPage={currentPage}
        data={data}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;
