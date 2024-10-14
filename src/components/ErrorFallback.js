import { useErrorBoundary } from "react-error-boundary";
import ErrorAlert from "./modals/ErrorAlert";
import { useContext, useEffect, useState } from "react";
import { Context } from "../index";

function ErrorFallback({ error }) {
  const { resetBoundary } = useErrorBoundary();
  const {errors} = useContext(Context);
 //сделать, чтобы при ошибке страница перегружалась
 //если дотронуться вне модального окна (уже реализовано) и 
 // внутри иодального окна
  useEffect(()=>{
    if(error){
      errors.setError({...error, data: "Упс!Возникла серверная ошибка:("})
      errors.setIsError();
    }
  }, [])

  const recessError = () => {
    // errors.recessError();
    resetBoundary();
    return;
  }

  return (
    <div role="alert">
      {errors.isError && <ErrorAlert error={errors.error} show={errors.isError} onHide={recessError} isFallback={true}/>}
    </div>
  );
}

export default ErrorFallback;
// <button onClick={resetBoundary}>Попробовать еще раз</button>