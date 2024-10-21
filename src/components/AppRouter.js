import {Route, Routes, Navigate} from 'react-router-dom'
import {adminRoutes, publicRoutes} from "../routes";
import { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
//import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    console.log(user.isAdmin)
    return (
      <Routes>
      {user.isAdmin && adminRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component/>} exact/>
      )}
      {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component/>} exact/>
      )}
        <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
    );
});

export default AppRouter;