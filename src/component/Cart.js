import { Table, Container, Nav, Navbar } from "react-bootstrap";
import MyNav from "./MyNav";

function Cart() {
  return (
    <div className="App">
      <MyNav />

      {/* --여기서부터 장바구니-- */}
      <h1 style={{ fontFamily: "Do Hyeon", marginTop: "30px" }}>장바구니</h1>
      <Table hover>
        <thead>
          <tr>
            <th></th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>hi</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
