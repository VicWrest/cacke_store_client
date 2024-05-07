import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import {Context} from "../../index";
import './BasketWindow.css'
import { useNavigate } from 'react-router-dom';
import BasketProductItem from '../BasketProductItem/BasketProductItem';
import Button from '../Button/Button';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const BasketWindow = observer(()=> {
  const {product} = useContext(Context)
  const navigate = useNavigate();
  const {basket} = useContext(Context)
  return (
    <div className='basket-window'>
        {basket.addProducts.length === 0?
    <div className='basket-is-empty'>В Корзине пока пусто :(</div>
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
                {basket.addProducts.map(addedProduct => 
                    <BasketProductItem key={addedProduct.id} product={addedProduct} />)
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