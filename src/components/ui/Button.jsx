import { Link } from "react-router-dom";

const variants = {
    primary: 'bg-brand-500 text-white hover:bg-brand-700',
    outline: 'border-2 border-brand-500 text-brand-500 hover:bg-brand-50',
    ghost: 'text-slate-700 hover:bg-slate-100'
}

const size = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5',
    lg: 'px-7 py-3.5 text-lg'
}

export default function Button({
    children,
    variants = 'primary',
    size = 'md',
    to,
    className = '',
    ...rest
}){
    const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium
    transition-all duration-200 focus:outline-none focus-visible:ring-2
    focus-visible:ring-brand-500 focus-visible:ring-offset-2
    ${variants[variant]} ${size[size]} ${className}
    `

    //if the button conatins links

    if (to) return <Link to={to} className={classes} {...rest}>{children}</Link>

    return <button className={classes} {...rest}>{children}</button>
}