import type { ReactNode } from "react"
import '../styles/Button.tsx.scss'

type Props = {
    title: string
    style: 'alternative' | 'default'
    href?: string
    children: ReactNode
}

const NavButton = ({title, style, href, children}:Props) => {
    return (
        <a 
            target="blank"
            href={href ? href : '#'} 
            title={`${title} Repository link`}
            className={`nav-button ${style}`}
        >
            {children}
        </a>
    )
}
 
export default NavButton;