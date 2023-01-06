import { Header } from "./components/Header"
import { NewTask } from "./components/NewTask"
import { Tasks } from "./components/Tasks"
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header/>
      <Tasks/>
    </div>
  )
}

export default App
