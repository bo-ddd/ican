import { Outlet } from "react-router-dom";
import style from '../assets/css/root.module.css';
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import ArticleDetail from '../pages/ArticleDetail';

export const router = createBrowserRouter([
    {
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path:'article/detail',
                element: <ArticleDetail />
            }
        ]
    },

]);

function Root() {
    return (
        <>
            <header className={style.header}>
                <div className={style.logo}>可·以</div>
                <div></div>
            </header>
            <main className={style.main}>
                <Outlet />
            </main>
            <footer className={ style.footer }>
                <a href="">CopyRight © 2022</a>
                可·以官方网站 | 京ICP证100935
            </footer>
        </>
    )
}