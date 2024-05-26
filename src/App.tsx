import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import NavbarWithRouter from "./components/navbar"
import { RefObject, useRef } from "react"
import Now from "./pages/now"
import Favorite from "./pages/favorite"

function App() {
  const homeRef = useRef(null)

  const nowRef = useRef(null)

  const favRef = useRef(null)

  const scrollToSection = (elementRef: RefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: elementRef?.current?.offsetTop,
      behavior: "smooth",
    })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            <NavbarWithRouter
              homeRef={homeRef}
              nowRef={nowRef}
              favRef={favRef}
              scrollToSection={scrollToSection}
            />
          }
        >
          <Route
            index
            element={<Home homeRef={homeRef} nowRef={nowRef} favRef={favRef} />}
          />
          <Route path="now/:id" element={<Now />} />
          <Route path="favorite/:id" element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
