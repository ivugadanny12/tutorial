import Container from "./Container";

export default function Section({ children, title, subtitle, className = '', id}){
    return(
        <section id={id} className={`py-16 md:py-24 ${className}`}>
            <Container>
                {
                    title && (
                        <header className="mx-auto mb-12 max-w-2xl text-center">
                            <h2 className="font-dispaly text-3xl font-bold text-salte-900 md:text-4xl">{title}</h2>
                            {
                                subtitle && <p className="mt-4 text-slate-600">{subtitle}</p>
                            }
                        </header>
                    )
                }
                {children}
            </Container>
        </section>
    )
}