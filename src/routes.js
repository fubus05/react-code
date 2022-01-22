import {
    ACCOUNT_PAGE,
    ACCOUNTS_PAGE, ACHIEVEMENTS_PAGE, ACHIEVEMENTS_V2_PAGE,
    ADMIN_PAGE,
    CHAT_USERS_PAGE,
    ERROR_PAGE,
    FAQ_PAGE,
    FORUM_PAGE,
    GUARANTEE_PAGE,
    HISTORY_PAGE,
    HOME_PAGE,
    ITEM_PAGE,
    MAIN_PAGE,
    MY_PRODUCT_PAGE,
    PIN_CODES_PAGE,
    PRODUCTS_PAGE,
    PROFILE_PAGE,
    RANDOM_ACCOUNTS_PAGE,
    REFER_PAGE,
    REVIEWS_PAGE,
    ROULLETSE_PAGE, SETTINGS_PAGE,
    SUPPORT_PAGE, TABLE_PAGE,
    TOP_USERS_PAGE,
    USER_PAGE,
    ZAKLADKY_PAGE, HISTORY_VIEW,PAYMENT_PAGE,
} from "./utils/consts";
import UserPanel from "./pages/UserPanel/UserPanel";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import HomePage from "./pages/HomePage/HomePage";
import FaqPage from "./pages/FaqPage/FaqPage";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import GuaranteePage from "./pages/GuaranteePage/GuaranteePage";
import ItemPage from "./pages/ItemPage/ItemPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AccountsPage from "./pages/AccountsPage/AccountsPage";
import TopUsersPage from "./pages/TopUsersPage/TopUsersPage";
import RandomAccountsPage from "./pages/RandomAccountsPage/RandomAccountsPage";
import ForumPage from "./pages/ForumPage/ForumPage";
import MainPage from "./pages/MainPage/MainPage";
import MyProduct from "./pages/MyProductPage/MyProduct";
import ProfilePersonal from "./pages/ProfilePersonalPage/ProfilePersonal";
import Akkaunt from "./pages/AccountPage/Akkaunt";
import Roullet from "./pages/RoulletsePage/Roullet";
import PinCode from "./pages/PinCodesPage/PinCode";
import SupportPage from "./pages/SupportPage/SupportPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import ZakladkyPage from "./pages/ZakladkyPage/ZakladkyPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ChatUsersPage from "./pages/ChatUsersPage/ChatUsersPage";
import ReferalsPage from "./pages/ReferalsPage/ReferalsPage";
import SettingPage from "./pages/SettingsPage/SettingPage";
import TablePage from "./pages/TablePage/TablePage";
import AchievementsPage from "./pages/AchievementsPage/AchievementsPage";
import AchievementsV2Page from "./pages/AchievementsV2Page/AchievementsV2Page";
import HistoryViewPage from "./pages/HistoryView/HistoryView";
import PaymentPage from "./pages/PaymentPage/PaymentPage"

export const authRoutes = [
    {
        path: USER_PAGE,
        Component: UserPanel
    },
    {
        path: ADMIN_PAGE,
        Component: AdminPanel
    },
]

export const publicRoutes = [
    {
        path: PAYMENT_PAGE,
        Component: PaymentPage
    },
    {
        path: HOME_PAGE,
        Component: HomePage
    },
    {
        path: HISTORY_VIEW,
        Component: HistoryViewPage
    },
    {
        path: FAQ_PAGE,
        Component: FaqPage
    },
    {
        path: REVIEWS_PAGE,
        Component: ReviewsPage
    },
    {
        path: GUARANTEE_PAGE,
        Component: GuaranteePage
    },
    {
        path: ITEM_PAGE + '/:id',
        Component: ItemPage
    },
    {
        path: ERROR_PAGE,
        Component: ErrorPage
    },
    {
        path: ACCOUNTS_PAGE,
        Component: AccountsPage
    },
    {
        path: PIN_CODES_PAGE,
        Component: PinCode
    },
    {
        path: TOP_USERS_PAGE,
        Component: TopUsersPage
    },
    {
        path: RANDOM_ACCOUNTS_PAGE,
        Component: RandomAccountsPage
    },
    {
        path: FORUM_PAGE,
        Component: ForumPage
    },
    {
        path: MAIN_PAGE,
        Component: MainPage
    },
    {
        path: PROFILE_PAGE,
        Component: ProfilePersonal
    },
    {
        path: MY_PRODUCT_PAGE,
        Component: MyProduct
    },
    {
        path: ACCOUNT_PAGE,
        Component: Akkaunt
    },
    {
        path: ROULLETSE_PAGE,
        Component: Roullet
    },
    {
        path: SUPPORT_PAGE,
        Component: SupportPage
    },
    {
        path: HISTORY_PAGE,
        Component: HistoryPage
    },
    {
        path: ZAKLADKY_PAGE,
        Component: ZakladkyPage
    },
    {
        path: PRODUCTS_PAGE,
        Component: ProductsPage
    },
    {
        path: CHAT_USERS_PAGE,
        Component: ChatUsersPage
    },
    {
        path: REFER_PAGE,
        Component: ReferalsPage
    },
    {
        path: SETTINGS_PAGE,
        Component: SettingPage
    },
    {
        path: TABLE_PAGE,
        Component: TablePage
    },
    {
        path: ACHIEVEMENTS_PAGE,
        Component: AchievementsPage
    },
    {
        path: ACHIEVEMENTS_V2_PAGE,
        Component: AchievementsV2Page
    },
]