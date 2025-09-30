import { DimensionValue } from "react-native";

export interface ShortcutProps {
    mt?: number | "auto";
    mb?: number | "auto";
    ml?: number | "auto";
    mr?: number | "auto";
    mx?: number | "auto";
    my?: number | "auto";
    
    p?: number 
    pt?: number
    pb?: number
    pl?: number
    pr?: number
    px?: number
    py?: number

    w?: DimensionValue
    h?: DimensionValue
}

export const defaultShortcuts = (props: ShortcutProps) => ({
    marginTop: props.mt,
    marginBottom: props.mb,
    marginLeft: props.ml,
    marginRight: props.mr,
    marginHorizontal: props.mx,
    marginVertical: props.my,

    padding: props.p,
    paddingTop: props.pt,
    paddingBottom: props.pb,
    paddingLeft: props.pl,
    paddingRight: props.pr,
    paddingHorizontal: props.px,
    paddingVertical: props.py,

    width: props.w,
    height: props.h,
})