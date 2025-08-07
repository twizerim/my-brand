import result from "../../../assets/Documa/gedeon.pdf"
import andela from "../../../assets/Documa/Andela.pdf"
import cv from "../../../assets/Documa/twiz.pdf"
import alight from "../../../assets/Documa/alright.pdf"

export default function DocumentFile() {

    const documArray = [
        {id:"1",documa:result},
        {id:"3",documa:andela},
        {id:"2",documa:cv},
        {id:"4",documa:alight}
    ]

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 p-4">
                {documArray.map((dom)=>(
                    <div key={dom.id}>
                        <embed src={dom.documa} type="application/pdf" width="100%" height="270px" />
                    </div>
                ))}
            </div>
        </>
    )
}