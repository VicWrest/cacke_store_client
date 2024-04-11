import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]