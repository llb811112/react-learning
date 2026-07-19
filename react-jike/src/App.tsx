import { Toaster } from "@/components/ui/sonner"
import { Outlet } from "react-router-dom"
function App() {

  return (
    <>
    <Outlet />
      <Toaster 
        position="top-right" 
        richColors 
      />
    </>
  )
}

export default App
