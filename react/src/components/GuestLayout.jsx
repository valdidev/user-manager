import { Outlet } from "react-router-dom"

const GuestLayout = props => {
  return (
    <div>
        guest
        <Outlet  />
    </div>
  )
}

export default GuestLayout