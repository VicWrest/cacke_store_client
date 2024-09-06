import {BrowserRouter, useNavigate} from "react-router-dom";
import AppRouter from "./components/AppRouter.js"
import NavBar from "./components/NavBar/NavBar.js";
import { useContext, useEffect, useState } from "react";
import { registration } from "./http/userAPI.js";
import { observer } from "mobx-react-lite";
import { Context } from "./index.js";
import { Spinner } from "react-bootstrap";
import "./App.css";
import { getKorzhType } from "./http/productAPI.js";
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "./components/ErrorFallback.js";
import { SHOP_ROUTE } from "./utils/consts.js";
import ErrorAlert from "./components/modals/ErrorAlert.js";

const App = observer(() => {
  const {user, product, errors} = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("Alena");
  
  useEffect(() => {
    //имя пользователя необходимо будет брать из телеграма
    registration(userName)
    .then((data) => {
      user.setUser(data);
      user.setIsAuth(true);
      if(data.role === "ADMIN")user.setIsAdmin(true)
    })
    getKorzhType().then(data => {
      product.setKorzh(data)
    })
    .catch(e => alert(e.response))
    .finally(() => setIsLoading(false))
}, []);

  if(isLoading){
    return (
    <div className="spinner">
      <Spinner animation="border" variant="info" /> 
    </div>
  )
}
//модальное окно с ошибкой скрывает основной интерфейс 
//сделать, чтобы вылезало поверх
//разделить ошибки на 2 категории: в виде всплывающего окна и в виде нового окна 
  return (
        <BrowserRouter>
        <NavBar/>
        {errors.isError && <ErrorAlert error={errors.error} show={errors.isError} onHide={() => errors.recessError()}/>}
        <ErrorBoundary 
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace(SHOP_ROUTE)}
        >
        <AppRouter/>
        </ErrorBoundary>
        
      </BrowserRouter>
  );
})

export default App;
