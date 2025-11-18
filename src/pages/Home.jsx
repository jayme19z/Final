import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { Pagination } from "../components/Pagination/Pagination";
import Sort from "../components/Sort";

import { searchContext } from "../App";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categoriesId = useSelector((state) => state.filter.categoriesId);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  console.log(categoriesId);

  const { searchType } = React.useContext(searchContext);
  // const [categoriesId, setcategoriesId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности(ASC)",
    sortProperty: "rating",
  });
  const [currentPage, setCurrentPage] = React.useState(1);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sortProperty.replace("-", "");
    const category = categoriesId > 0 ? `category=${categoriesId}` : "";
    const search = searchType ? `&search=${searchType}` : "";
    // особенности бекенда mockApi :(

    fetch(
      `https://64539211c18adbbdfea10385.mockapi.io/Items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(Array.isArray(arr) ? arr : []);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoriesId, sortType, searchType, currentPage]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sortType.sortProperty,
      categoriesId,
      currentPage,
    });
    navigate(`?${queryString}`);
    console.log(queryString);
  },[categoriesId, sortType, searchType, currentPage])

  const pizzas = items.map((obj, i) => <PizzaBlock key={i} {...obj} />);

  const skeletons = [...new Array(4)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoriesId}
          onChangeCategory={onChangeCategory}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};
