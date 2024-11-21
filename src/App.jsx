import { RouterProvider } from "react-router-dom";
import router from "@/router";
import '@/scss/main.scss'

function App() {
  return (
    <RouterProvider
      router={router}
      future={{ v7_startTransition: true, }}
    />
  )
}

export default App
