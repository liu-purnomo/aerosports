import { Outlet } from 'react-router-dom';

const BlankLayout = () => {
    return (
        <>
            <div className="text-black dark:text-white-dark min-h-screen">
                <Outlet />
            </div>
        </>
    );
};

export default BlankLayout;
