import { comments } from "./svg/comments";
import { complain } from "./svg/complain";
import { hide } from "./svg/hide";
import { save } from "./svg/save";
import { share } from "./svg/share";
import { userThumbnail } from "./svg/userThumbnail";
import html from "./svg/html.svg";
import image from "./svg/image.svg";
import file from "./svg/file.svg";
import download from "./svg/download.svg";
import user from "./svg/user.svg";
import refresh from "./svg/refresh.svg";
import link from "./svg/link.svg";
import voice from "./svg/voice.svg";
import chat from "./svg/chat.svg";
import edit from "./svg/edit.svg";
import align from "./svg/align.svg";
import pdf from "./svg/pdf.svg";


export type IIconNames = keyof typeof IconsSvg

export enum IIconTypes {
    comments,
    complain,
    hide,
    save,
    share,
    userThumbnail,
    html,
    image,
    file,
    download,
    user,
    refresh,
    link,
    voice,
    chat,
    edit,
    align,
    pdf,
}

export const IconsSvg =
    [
        comments,
        complain,
        hide,
        save,
        share,
        userThumbnail,
        html,
        image,
        file,
        download,
        user,
        refresh,
        link,
        voice,
        chat,
        edit,
        align,
        pdf,
    ]