import { ReactNode } from 'react'

export type ClickableTextProperties = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ClickableText(props: ClickableTextProperties) {
  return <div className={`${props.className ?? ''} text-gray-100 hover:text-gray-400 cursor-pointer active:text-gray-500`} onClick={props.onClick}>{props.children}</div>
}
