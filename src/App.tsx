import { AttendeeList } from "./components/AttendeeList"
import { Header } from "./components/Header"

function App() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header />
      <AttendeeList />
    </div>
  )
}

export default App