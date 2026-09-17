import { FlaskConical,Calculator, BookOpen,Pencil } from "lucide-react"
import Card from "../ui/Card"
import Section from "../ui/Section"
import { programs } from "../../data/programs"

const Icons = {FlaskConical,Calculator, BookOpen,Pencil}

export default function ProgrmaPreview(){
    return(
        <Section id="progrms" title= "Our programs"
        subtitle="A curriculum designed for curiosity, rigor, and character"
        >
            <div className=""></div>
        </Section>
    )
}