import { Table, Container, Nav, Navbar } from "react-bootstrap";
import MyNav from "./MyNav";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { plusCount, minusCount } from "../redux/store";

function Cart() {
  return (
    <div className="App">
      <MyNav />

      {/* --여기서부터 장바구니-- */}
      <h1 style={{ fontFamily: "Do Hyeon", marginTop: "30px" }}>장바구니</h1>
      <Table hover style={{ marginTop: "40px" }}>
        <thead>
          <tr>
            <th></th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <CartList />
        </tbody>
      </Table>
    </div>
  );
}

function CartList() {
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  return cart.map((a, i) => {
    return (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{cart[i].name}</td>
        <td>{cart[i].count}</td>
        <td>
          <button
            onClick={() => {
              dispatch(minusCount(cart[i].id));
            }}
            style={{ display: "inline" }}
            className="countBtn"
          >
            -
          </button>
          <div style={{ display: "inline" }}> 수량변경 </div>
          <button
            onClick={() => {
              dispatch(plusCount(cart[i].id));
            }}
            style={{ display: "inline" }}
            className="countBtn"
          >
            {" "}
            +{" "}
          </button>
        </td>
      </tr>
    );
  });
}

export default Cart;
