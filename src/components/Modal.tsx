import { ReactNode } from "react";
import '../../i18n';
import { useTranslation } from 'react-i18next';

interface ModalType {  
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  github: string,
  url?: string,
  title: string,
  description: string,
  img: string,
  objective: string,
  gotosite: string,
  imgmodal?: string,
}

export default function Modal(props: ModalType) {
  const { t } = useTranslation();

  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={props.toggle}>
          <div className="modal-box overflow-auto m-2 lg:justify-center">
            <h3 className="text-center underline font-bold text-lg">{props.title}</h3>
            {props.imgmodal ? <img src={props.imgmodal} alt={props.title} className="m-4 rounded-xl lg:w-[30%] w-3/6 h-auto self-center"/> : ""}
            <span className="m-4 whitespace-pre-wrap w-5/6 self-center mb-6">{props.objective}</span>
            {props.url ? <a href={props.url} target="_blank" className="p-2 border-black border-2 m-1 rounded-xl self-center text-center w-5/6">{t('projects.urlaccess')}</a> : ""}
            <a href={props.github} target="_blank" className="p-2 border-black border-2 m-1 rounded-xl self-center text-center w-5/6">{t('projects.urlgit')}</a>
          </div>
        </div>
      )}
    </>
  );
}