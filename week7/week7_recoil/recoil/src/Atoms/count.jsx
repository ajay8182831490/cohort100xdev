import { atom, selector } from "recoil"


export const countAtom = atom({
    key: "count",
    default: 14
})

export const text = atom({
    key: "text",
    default: ""
})

export const textlength = selector({
    key: "textlength",
    get: ({ get }) => {
        const text1 = get(text);
        return text1.length;
    }
})