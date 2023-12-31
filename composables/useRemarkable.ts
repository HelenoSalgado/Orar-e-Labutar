import { Remarkable } from "remarkable";
//import { linkify } from 'remarkable/linkify';

export const md = new Remarkable({
    html: true,
    breaks: true,
    //linkify: false,
    typographer: true,
})//.use(linkify);