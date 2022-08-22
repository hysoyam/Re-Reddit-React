import React, { useEffect, useRef, useState } from 'react'
import style from './cardslist.css'
import { Card } from './Card';
import { fetchBestPosts } from '../../store/actions/fetchPostsDataAction';
import { Rootstate, store } from '../../store/store';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export function CardsList() {
    const preloadLimit = 3
    const bottomOflist = useRef<HTMLDivElement>(null)

    const [loadCount, setLoadCount] = useState(0)
    const isLoading = useSelector((state: Rootstate) => state.posts.isLoading)
    const after = useSelector((state: Rootstate) => state.posts.after)
    const posts = useSelector((state: Rootstate) => state.posts.posts).map(posts => <Card key={posts.id} postData={posts} />)

    const fetch = (after: string) => store.dispatch(fetchBestPosts(after))
    const loadMore = (after: string) => {
        setLoadCount(loadCount + 1)
        fetch(after)
    };

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {

            if (entries[0].isIntersecting && !isLoading) {
                loadMore(after)
            }
        }, {
            rootMargin: `${70 * 5}px`,
        });
        bottomOflist.current && observer.observe(bottomOflist.current)

        return () => {
            bottomOflist.current && observer.unobserve(bottomOflist.current)
        }

    }, [after])

    return (
        <>
            <ul className={style.cardsList}>
                {posts}
                {!isLoading && (loadCount % preloadLimit === 0 && loadCount > preloadLimit - 1)
                    ? <button className={style.more} onClick={() => { loadMore(after) }}>More posts</button>
                    : <div ref={bottomOflist} />}
            </ul>
            <Outlet />
        </>
    )

}