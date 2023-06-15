import useModal from "./useModal";
import Modal from "./Modal";
import { createPortal } from "react-dom";
import { useTranslation } from 'react-i18next';

interface ProjectDetail {
    github: string,
    url?: string,
    title: string,
    description: string,
    img: string,
    tags: string,
    objective: string,
    gotosite: string,
    imgmodal?: string
}

const Projectcard = (props:ProjectDetail) => {
    const { t } = useTranslation();
    const { isOpen, toggle } = useModal();

    return (<button onClick={toggle} className='p-2 border-2 rounded-2xl border-indigo-800 flex justify-center items-center flex-col lg:w-3/5 w-full gap-2 mb-8 cardAnimation hover:shadow-2xl'>
        <h1>{props.title}</h1>
        <img className="w-3/5 rounded-xl border-2 border-indigo-800" src={props.img} alt={`${props.title}`}/>
        <div>{(props.tags)}</div>

        {createPortal(
        <Modal isOpen={isOpen} toggle={toggle} imgmodal={props.imgmodal} gotosite={props.gotosite} objective={props.objective} title={props.title} github={t(props.github)} description={props.description} img={props.img} url={props.url}></Modal>,
        document.body
    )}
    </button>
    )};

export default Projectcard;