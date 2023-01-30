import { useEffect, useRef } from 'react';
import style from '../assets/css/articleDetail.module.css';
import Markdown from '../assets/util/markdown';

export default function ArticleDetail(){
    const container = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        if(!container.current) return;
        new Markdown({
            el: container.current
        });
    },[0]);

    return (
        <>
            <div ref={ container } className={ style.articleDetail }>
                ### 标题
                我是文章的内容
                我是第二个段落
                ### 二级标题
            </div>
        </>
    )
}