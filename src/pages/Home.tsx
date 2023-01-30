import { Link } from 'react-router-dom';
import style from '../assets/css/home.module.css';
import Banner from '../assets/images/banner.png';

export default function Home() {
    return (
        <>
            <img className={style.banner} src={Banner} alt="" />
            <main className={style.container}>
                <div className='hot'>
                    <div className={style.title}>
                        <h3>热点专题</h3>
                        <Link to="/hot/list">更多</Link>
                    </div>
                    <div className={style.rowList}>
                        <div className={style.rowItem}>
                            <img src={Banner} alt="" />
                            <p>第四界海南岛国际电影节</p>
                        </div>
                        <div className={style.rowItem}>
                            <img src={Banner} alt="" />
                            <p>第四界海南岛国际电影节</p>
                        </div>
                        <div className={style.rowItem}>
                            <img src={Banner} alt="" />
                            <p>第四界海南岛国际电影节</p>
                        </div>
                        <div className={style.rowItem}>
                            <img src={Banner} alt="" />
                            <p>第四界海南岛国际电影节</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}