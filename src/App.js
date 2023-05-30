import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./component/Header";
import Cards from "./component/Cards";
import membersData from "./component/membersData";
import { useEffect, useState } from "react";

const App = () => {
  let [count, setCount] = useState(1);
  let [membersTo, setMembersTo] = useState([membersData[0]]);
  let [show, setShow] = useState([]);
  let [messageNo, setMessageNo] = useState("");

  function showMember() {
    if (count < membersData.length + 1) {
      setCount(count + 1);
      console.log(count);
      setMembersTo([...membersTo, membersData[count]]);
      console.log(membersTo);
      setShow([...membersTo]);
    } else {
      setMessageNo("No More Members To Show !");
    }
  }

  return (
    <div className="container">
      <Header handleShow={showMember} />
      {messageNo ? (
        <div className="alert alert-danger text-center" role="alert">
          {messageNo}
        </div>
      ) : (
        <div></div>
      )}
      {show.length == 0 && (
        <div className="alert alert-primary text-center" role="alert">
          Welcome ! Discover Our Team Now
        </div>
      )}
      <Cards members={show} />
    </div>
  );
};
export default App;
