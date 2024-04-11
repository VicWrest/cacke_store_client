import {Route, Routes, Navigate} from 'react-router-dom'
import {adminRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
//import {observer} from "mobx-react-lite";

const AppRouter = () => {
    const isAdmin = true;
    return (
      <Routes>
      {isAdmin && adminRoutes.map(({path, Component}) =>
      <Route key={path} path={path} component={Component} exact/>
            )}
      {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} component={Component} exact/>
            )}
        <Navigate to={SHOP_ROUTE}/>
    <Route path="/" element={() => <Navigate to={SHOP_ROUTE}/>} />
        </Routes>
    );
};

export default AppRouter;