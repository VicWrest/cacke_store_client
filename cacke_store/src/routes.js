import Admin from "./pages/Admin/Admin.js";
import {ADMIN_ROUTE, BASKET_ROUTE, PRODUCTS_ROUTE, PRODUCT_ROUTE, REWIEW_ROUTE, SHOP_ROUTE} from "./utils/consts";
import ProductPage from "./pages/ProductPage";
import Basket from "./pages/Basket/Basket.js";
import Catalog from "./pages/Catalog/Catalog";
import Products from "./pages/Products/Products.js";
import Review from "./pages/Review/Review.js";

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
        path: PRODUCT_ROUTE + '/:type/:id',
        Component: ProductPage
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: PRODUCTS_ROUTE + '/:type',
        Component: Products
    },
    {
        path: REWIEW_ROUTE,
        Component: Review
    }
    
]