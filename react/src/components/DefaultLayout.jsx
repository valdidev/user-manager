import { Outlet } from "react-router-dom";

const DefaultLayout = (props) => {
    return (
        <div>
            default
            <Outlet />
        </div>
    );
};

export default DefaultLayout;
