import React, { useEffect, useState } from "react";
import { hot } from 'react-hot-loader/root'
import "./main.global.css";
import { Layout } from "./shared/Layout";
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Navigate, Route, Routes, Link } from 'react-router-dom';
import { Modal } from "./shared/Modal";
import { Post } from "./shared/Post";

function AppComponent() {

    const [isMoundted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (

        isMoundted ?

            <Provider store={store}>
                <BrowserRouter>
                    <Layout >
                        <Header />
                        <Content>
                            <Routes>
                                <Route path={`/`} element={<Navigate replace to="/posts" />} />
                                <Route path={`/auth`} element={<Navigate replace to="/posts" />} />
                                <Route path={'posts'} element={<><CardsList /></>}>
                                    <Route path={`:postId`} element={<Modal><Post /></Modal>} />
                                </Route>
                                <Route path="*" element={<div className='not_found'>404 - Page not found</div>} />
                            </Routes>
                        </Content>
                    </Layout>
                </BrowserRouter>
            </Provider >

            : null
    )
}

export const App = hot(() => <AppComponent />)
