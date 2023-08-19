import logo from "./logo.svg";
import { Fragment } from "react";
import "./App.css";

// import FunctionComponent from "./components/DemoComponent/FunctionComponent";
// import ClassComponent from "./components/demoComponent/ClassComponent";
import Layout1 from "./components/BTLayout1/Layout1";
import DataBinding from "./components/DataBinding/DataBinding";
import RenderWithCondition from "./components/RenderWithCondition/RenderWithCondition";
import HandleEvent from "./components/HandleEvent/HandleEvent";
import BTLayout2 from "./components/BTLayout2/BTLayout2";
import State from "./components/State/State";
import BaiTapChonXe from "./components/BaiTapChonXe/BaiTapChonXe";
import Styling from "./components/Styling/Styling";
import BaiTapStyling from "./components/BaiTapStyling/BaiTapStyling";
import RenderWithArray from "./components/RenderWithArray/RenderWithArray";
import BaiTapPhim from "./components/BaiTapPhim/BaiTapPhim";
import Parent from "./components/Props/Parent";
import BaiTapGiay from "./components/BaiTapGiay/BaiTapGiay";
import BaiTapDT from "./components/BaiTapDT/BaiTapDT";
import BaiTapTuVung from "./components/BaiTapTuVung/BaiTapTuVung";
import DemoRedux from "./components/DemoRedux/DemoRedux";

function App() {
  return (
    <>
      {/* <ClassComponent></ClassComponent>
      <ClassComponent />
      <FunctionComponent /> */}

      {/* <hr />
      <Layout1></Layout1>

      <hr />
      <DataBinding />

      <hr />
      <RenderWithCondition />

      <hr />
      <HandleEvent />

      <hr />
      <BTLayout2 /> */}

      {/* <State /> */}
      {/* <BaiTapChonXe /> 
      <Styling/>*/}
      {/* <BaiTapStyling /> */}
      {/* <RenderWithArray /> */}
      {/* <BaiTapPhim /> */}
      {/* <Parent /> */}
      {/* <BaiTapGiay /> */}
      <BaiTapDT />
      {/* <BaiTapTuVung /> */}

      {/* <DemoRedux /> */}
    </>
  );
}

/**App được xem là 1 component gốc (component cha) chứ không phải 1 hàm (function)
 * 1 component chỉ được có 1 object cha
 * dùng Fragment để thay thể thẻ div bự nhất và trên html không thể hiện thẻ đó <Fragment></Fragment>
 * hoặc dùng thẻ trống <></>
 */
// đối tượng jsx: <div></div>

export default App;
