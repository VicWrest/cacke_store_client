import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import {Context} from "../../index";
import './BasketWindow.css'
import BasketProductItem from '../BasketProductItem/BasketProductItem';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const BasketWindow = observer(() => {
  const {basket} = useContext(Context)
  return (
    <div className='basket-window'>
        {basket.addProducts.length === 0?
    <div className='basket-is-empty'>В корзине пока пусто :(</div>
    :
    <div className='MyBasket'>
        <div className='my-basket-string'>Моя корзина</div>
        <div className='basket-window'>
            <table className='productList'>
                <thead>
                    <tr className='headers'>
                        <th className='product-name-basket'>Товар</th>
                        <th className='quantity-cell'>Количество</th>
                        <th className='product-price'>Итого</th>
                    </tr>
                </thead>
                {basket.addProducts.map(addedProduct => {
                    return <BasketProductItem key={addedProduct.id} productItem={{...addedProduct}} />
                })
                    
                }
            </table>
            
        </div>
        <PlaceOrder />
    </div>
}
    </div>
    );
})

export default BasketWindow;