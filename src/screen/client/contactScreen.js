import ConctactForm from "../../components/forms/contact-form";
import Footer from "../../components/nav/footer";
import Navigation from "../../components/nav/header";

export default function ContactScreen(){
    return (
        <>
          <Navigation/>
          <div className="mt-32  flex justify-start items-center  py-28 px-40 bg-blue-900">
             <h1 className="text-7xl text-blue-800">Contact Me</h1>
          </div>
          <div className="flex justify-between items-center gap-20 px-40 py-20 h-[58.6vh]">
             <div className="w-1/3">
               <h6>Get in touch</h6>
             </div>
             <div className="w-2/3">
             <ConctactForm/> 
             </div>
          </div>
         
          <Footer/>
        </>
    )
}