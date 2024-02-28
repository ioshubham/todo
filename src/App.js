import './App.css';
/*import FirstComponent from './Components/learning-example/FirstComponent'
import {FifthComponent} from './Components/learning-example/FirstComponent' // {} braces tell its not a default import
import SecondComponent from './Components/learning-example/SecondComponent';
import ThirdComponent from './Components/learning-example/ThirdComponent';
import ForthComponent from './Components/learning-example/ForthComponent';
import LearnJavaScript from './Components/learning-example/LearnJavaScript'; */
import Counter from './Components/counter/Counter';
import TodoApp from './Components/todo/TodoApp'

/*function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <ForthComponent></ForthComponent>
      <FifthComponent></FifthComponent>
      <LearnJavaScript></LearnJavaScript>

    </div>
  );
}*/


function App() {
  return(
    <div>
      <TodoApp/>
    {/* <Counter />  cntrl+/ */}  


    </div>
  
  )
}

/*function PlayingWithProps(properties) {

  console.log(properties)
  console.log(properties.property1)
  console.log(properties.property2)

  return (
    <div>Props</div>
  )
} */

export default App;
