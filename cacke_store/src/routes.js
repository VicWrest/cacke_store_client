import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, PRODUCTS_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE} from "./utils/consts";
import ProductPage from "./pages/ProductPage";
import Basket from "./pages/Basket";
import Catalog from "./pages/Catalog/Catalog";

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Catalog
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: PRODUCTS_ROUTE + '/:type',
        Component: PRODUCTS_ROUTE
    },
    
]