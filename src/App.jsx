import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
const d=new Date();
const curData=d.getTime();

function App() {

//  const list=[
//   {
//   bgcolor:"yellow",
//   date:{curData},
//   logo:"logo",
//   title:"case Study",
//   comptitle:"Amazon Gift Pay",
//   mode:"Desktop - Mobile",
//   icon:"->"},
//   {
//   bgcolor:"yellow",
//   date:{curData},
//   logo:"logo",
//   title:"case Study",
//   comptitle:"Amazon Gift Pay",
//   mode:"Desktop - Mobile",
//   icon:"->"},
//   {
//     bgcolor:"Grey",
//     date:{curData},
//     logo:"logo",
//     title:"case Study",
//     comptitle:"Apple Gift Pay",
//     mode:"MacOS - Mobile",
//     icon:"->",
//   },
// ];
  return (
    <>
    <Card
      bgcolor="yellow"
        date={curData}
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQygiFikwV_o6uoOo7r4ec1LEmpjbtOqZKHYEBo68lp6Q&s"
        title="case Study"
        comptitle="Amazon Gift Pay"
        mode="Desktop - Mobile"
        icon="->"
      />
      <Card
      bgcolor="yellow"
      date={curData}
      logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQygiFikwV_o6uoOo7r4ec1LEmpjbtOqZKHYEBo68lp6Q&s"
      title="case Study"
      comptitle="Amazon Gift Pay"
      mode="Desktop - Mobile"
      icon="->"
      />
      <Card
      bgcolor="grey"
      date={curData}
      logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67-akfSARZMgR49RK-MGc9YrVw2zFT6ligzW9pDs6XA&s=36"
      title="case Study"
      comptitle="Apple Gift Pay"
      mode="MacOS - Mobile"
      icon="->"
      />
    </>
      

)}
export default App;
