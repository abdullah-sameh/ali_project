import Card from "../../components/Card/Card";
import NavbarPages from "../../components/NavbarPages/NavbarPages";
import "./CarTypePage.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { getCarById } from "../../rtk/slices/carIdSlice";

export default function CarTypePage() {
  const dispatch = useDispatch();

  const { carId } = useParams();
  const theCar = useSelector((state) => state.carById);
  const [spareParts, setSpareParts] = useState([]);
  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    dispatch(getCarById(carId));
  }, [carId, dispatch]);

  useEffect(() => {
    setSpareParts(theCar?.data?.spareParts);
    setSearchResult([]);
  }, [theCar]);

  const itemsPerPage = 10;
  const contentPage = [];
  const [numPages, setNumPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  function paginate(content, itemsPerPage, currentPage, contentPage) {
    if (content) {
      setNumPages(Math.ceil((content?.length - itemsPerPage) / itemsPerPage))
      const endIndex = currentPage * itemsPerPage
      for (let i = endIndex - itemsPerPage;i < endIndex;i++) {
        content[i] && contentPage.push(content[i])
      }
      return contentPage.map((ele, i) => (
        <Card
          key={i}
          nameItem={ele.name}
          countryMade={ele.madeIn}
          carName={theCar?.data?.modelName}
        />
      ))
    }
  }

  const displayParts = useMemo(() => {
    if (searchResult?.length === 0) {
      return paginate(spareParts, itemsPerPage, currentPage, contentPage);
    } else {
      return paginate(searchResult, itemsPerPage, currentPage, contentPage);
    }
  }, [searchResult, currentPage, carId]);

  const searchHandler = (value) => {
    if (value.trim() !== "") {
      let currentSpareParts = spareParts?.filter((part) =>
        part?.name.includes(value.trim())
      );
      setSearchResult(currentSpareParts);
    } else if (value.trim() === "") {
      let currentParts = spareParts;
      setSearchResult(currentParts);
    }
  };

  return (
    <>
      <NavbarPages name={theCar?.data?.modelName} />
      <form className="container search" onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => searchHandler(e.currentTarget.value)}
          type="search"
          id="search"
        />
      </form>
      <div className="container cards">{displayParts}</div>
      <div className="container">
        {displayParts && displayParts.length !== 0 ? (
          <nav className="pagination">
            <span
              key={1}
              onClick={() => {
                setCurrentPage(1);
              }}
            >
              1
            </span>
            {[...Array(numPages)]?.map((link, i) => (
              <span
                key={i + 2}
                onClick={(e) => {
                  setCurrentPage(i + 2);
                }}
              >
                {i + 2}
              </span>
            ))}
          </nav>
        ) : (
          <h2 className="no-parts">لا يوجد قطع</h2>
        )}
      </div>
    </>
  );
}
