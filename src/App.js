import {BrowserRouter, useNavigate} from "react-router-dom";
import AppRouter from "./components/AppRouter.js"
import NavBar from "./components/NavBar/NavBar.js";
import { useContext, useEffect, useState } from "react";
import { registration, start } from "./http/userAPI.js";
import { observer } from "mobx-react-lite";
import { Context } from "./index.js";
import { Spinner } from "react-bootstrap";
import "./App.css";
import { getKorzhType } from "./http/productAPI.js";
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "./components/ErrorFallback.js";
import { SHOP_ROUTE } from "./utils/consts.js";
import ErrorAlert from "./components/modals/ErrorAlert.js";
import { useTelegram } from "./hooks/useTelegram.js";

const App = observer(() => {
  const {tg, tgUser} = useTelegram();
  const {user, product, errors} = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    tg.ready();
    //имя пользователя необходимо будет брать из телеграма
    alert(tgUser?.username);
    registration(tgUser?.username)
    // registration('qwe123')
    .then((data) => {
      alert(`ALL GOOD`)
      console.log(data);
      user.setUser(data);
      user.setIsAuth(true);
      if(data.role === "ADMIN")user.setIsAdmin(true)
    })
    .catch(e => {
      alert(`ERROR`)
      // alert(e.response)
      })
    getKorzhType().then(data => {
      product.setKorzh(data)
    })
    .catch(e => alert(`CATCH getKorzh`))
    .finally(() => setIsLoading(false))
}, []);

  if(isLoading){
    return (
    <div className="spinner">
      <Spinner animation="border" variant="info" /> 
    </div>
  )
}
//<AppRouter/>
//модальное окно с ошибкой скрывает основной интерфейс 
//сделать, чтобы вылезало поверх
//разделить ошибки на 2 категории: в виде всплывающего окна и в виде нового окна 
  return (
      <div className="adaptive">
        <BrowserRouter>
        <NavBar/>
        {errors.isError && <ErrorAlert error={errors.error} show={errors.isError} onHide={() => errors.recessError()}/>}
        <ErrorBoundary 
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace(SHOP_ROUTE)}
        >
        
        </ErrorBoundary>
        
      </BrowserRouter>
      </div>
        
  );
})

export default App;
