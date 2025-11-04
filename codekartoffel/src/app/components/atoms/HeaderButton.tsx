import { ReactNode } from "react";
export type HeaderButtonProperties = {
  className?: string;
  children?: ReactNode
}

export default function HeaderButton(props: HeaderButtonProperties) {
  //return <div className="header-button">{props.children}</div>
  return <div className={`${props.className ?? ''} bg-fuchsia-700/80 p-[4px] px-[8px] cursor-pointer rounded-md select-none text-gray-200 hover:bg-fuchsia-600/80 active:bg-fuchsia-950/80 active:text-white`}>{props.children}</div>
}
