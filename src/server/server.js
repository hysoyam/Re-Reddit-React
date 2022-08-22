import path from "path";
import express from "express";
import compression from "compression";
import ReactDom from "react-dom/server";
import { App } from "../App";
import indexTemplate from "./indexTemplate";
import { store } from "../store/store";
import { config } from "../../config";

export const NewStore = store
const port = process.env.PORT || 3000
const app = express()
const SECRET = config.SECRET
const CLIENT_ID = config.CLIENT_ID

app.use(compression())

app.use('/static', express.static(path.resolve(process.cwd(), 'dist/client'), {
    fallthrough: false
}))

app.get('/auth', (req, res) => {

    const timeout = new Date(Date.now() + 30 * 60000)

    res
        .cookie('secret', SECRET, { expires: timeout })
        .cookie('clientId', CLIENT_ID, { expires: timeout })
        .cookie('code', req.query.code, { expires: timeout })
        .send(indexTemplate(ReactDom.renderToString(App())))

})

app.get('*', (req, res) => {
    res
        .cookie('secret', '')
        .cookie('clientId', '')
        .cookie('code', '')
        .send(
            indexTemplate(ReactDom.renderToString(App()))
        )
})

app.listen(port, () => {
    console.log(`Server started on ${config.URI_MAIN}:${port}`);
})
