import React from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

export type ComponentProps = {
  router: {
    location: ReturnType<typeof useLocation>
    navigate: ReturnType<typeof useNavigate>
    params: ReturnType<typeof useParams>
  }
}

export function withRouter<P>(
  Component: React.ComponentType<P & ComponentProps>
) {
  function ComponentWithRouterProp(props: P) {
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()

    return <Component {...props} router={{ location, navigate, params }} />
  }

  return ComponentWithRouterProp
}
