import { Button as Base } from '@material-tailwind/react'

type ButtonProps = {
    children: React.ReactNode
    onClick: () => void
    className?: string
}
export const Button = (props: ButtonProps) => {
    return (
        <Base placeholder variant="filled" className={props.className} onClick={props.onClick}>
            {props.children}
        </Base>
    )
}
