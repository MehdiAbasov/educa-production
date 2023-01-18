import { useRoutes } from "react-router-dom";
import routes from "routes";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Loader from "components/loader";
import Header from "components/header";

function App() {

  const user = useSelector(state => state.auth.user)
  const showRoutes = useRoutes(routes)
  const [redirect, setRedirect] = useState()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRedirect(true)
    }, 2000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  if (!user && !redirect) {
    return <Loader />
  }

  return (
    <>
      <Toaster position="top-right" />
      {showRoutes}
    </>
  )
}

export default App;
