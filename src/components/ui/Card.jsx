export default function Card({children, className = '', as: Tag = 'div'}){
    return(
        <Tag className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md${className}`}>
            {children}
        </Tag>
    )
}