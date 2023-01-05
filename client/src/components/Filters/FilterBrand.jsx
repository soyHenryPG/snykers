import React, {/*{ useState }*/} from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAdds, deletefilters } from "../../redux/features/products/productsActions";
import Form from "react-bootstrap/Form";

const FilterBrand = () => {
  const dispatch = useDispatch();
  const { brands } = useSelector((state) => state.products);


  function handleFilterCategories(e) {
    e.preventDefault();
    if(e.target.value === "none") dispatch(deletefilters("brand"))
    else dispatch(filterAdds({ brand: e.target.value }));
  }

  return (
    <Form.Select
      className="d-flex m-1 "
      defaultValue="none"
      onChange={(e) => {
        handleFilterCategories(e);
      }}
    >
      <option value="none">
        Brand
      </option>
      {brands &&
        brands.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
    </Form.Select>
  );
};

export default FilterBrand;
