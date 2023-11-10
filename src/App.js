import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import OuterContainer from "./components/OuterContainer";
import SidebarVertical from "./components/SidebarVertical";
import Main from "./components/Main";
import BottomNavbar from "./components/BottomNavbar";
function App() {
  return (
    <>
      <OuterContainer>
        <SidebarVertical />
        <Main />
      </OuterContainer>
      <BottomNavbar />
    </>
  );
}

export default App;
