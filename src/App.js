// import logo from './logo.svg';
import './App.css';
import MyName from './components/MyName';
import MyCity from './components/MyCity';
import MyCollege from './components/MyCollege';
import MyGender from './components/MyGender';
import MyInter from './components/MyInter';
import MySchool from './components/MySchool';
import MyState from './components/MyState';
function App() {
  return (
  <div>
   <MyName/>
   <MyCity/>
   <MyCollege/> 
   <MyGender/>  
   <MyInter/>
   <MySchool/>
   <MyState/>
  </div>
  );
}

export default App;
