import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getAllUsers } from "../../../redux/features/users/usersActions";
import { useState } from "react";
import DashboardSearch from "../DashboardSearch";
import ModalUsersWarning from "./Modals/ModalUsersWarning";

function AdminDashboardUsers(props) {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const [warning, setWarning] = useState(false);
  
  const [orderUser, setOrderUser] = useState("")
  const [valueOrder, setValueOrder] = useState(-1)
  const [directionOrder, setDirectionOrder] = useState("↑↓")
  const [search, setSearch] = useState("");

  useEffect(() => {
    const orderSearch = {}

    console.log(props
      )
    if(orderUser.length) orderSearch.orderBy = {[orderUser]:valueOrder}
    if(search.length) orderSearch.search = search

    console.log(orderSearch)
    dispatch(getAllUsers(orderSearch));
  }, [dispatch, orderUser, valueOrder, search]);

  const handlerDeleteUser = (_id) => {
    console.log(_id);
  };

  const handlerOrdersUser = (orders) => {
    console.log(orders);
  };


  const handlerOrder = (column)=>{
    setOrderUser(column)
    setValueOrder(valueOrder * -1)
    if(valueOrder>0)  setDirectionOrder("↑")
    else  setDirectionOrder("↓")

    console.log({orderBy:{[column]:valueOrder * -1}})
  }
  
  return (
  <>
    <DashboardSearch type="users" search={search} setSearch={(a)=>setSearch(a)}/>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>_id</th>
          <th onClick={()=>handlerOrder("username")}>User Name {orderUser==="username"?directionOrder:""}</th>
          <th onClick={()=>handlerOrder("email")}>Email {orderUser==="email"?directionOrder:""}</th>
          <th onClick={()=>handlerOrder("phone")}>Phone {orderUser==="phone"?directionOrder:""}</th>
          {/* <th onClick={()=>handlerOrder("number")}>Number {orderUser==="number"?directionOrder:""}</th> */}
          <th onClick={()=>handlerOrder("address")}>Address {orderUser==="address"?directionOrder:""}</th>
          <th onClick={()=>handlerOrder("city")}>City {orderUser==="city"?directionOrder:""}</th>
          <th onClick={()=>handlerOrder("country")}>Country {orderUser==="country"?directionOrder:""}</th>
          <th>Image</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            {/* <td>Number</td> */}
            <td>{user.address}</td>
            <td>{user.city}</td>
            <td>{user.country}</td>
            {/* faltaria user.image */}
            <td>Imagen</td>
            <td>
              <Form.Check
                type="switch"
                id="custom-switch"
                onClick={(e) => console.log(e.target.checked)}
              />
            </td>
            <td>
              <Button variant="primary" onClick={() => setWarning(user._id)} >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>

      <ModalUsersWarning show={warning} onHide={() => setWarning(false)}/>
    </Table>
  </>
  );
}

export default AdminDashboardUsers;
