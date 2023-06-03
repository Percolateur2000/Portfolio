/* eslint-disable @typescript-eslint/no-explicit-any */
import '../../i18n';
import { useTranslation } from 'react-i18next';
import Projectcard from './Projectcard';

const Projects = () => {
const { t } = useTranslation();

const opcproject = t("projects.project", { returnObjects: true })
const personalproject = t("projects.personalproject", { returnObjects: true })

return (
    <div className="bg-slate-300 opacity-90 w-full lg:h-full h-full overflow-auto rounded-xl p-2 pb-36 lg:pb-8 boxAnimation">
        <div className='flex pt-8 items-center flex-col'>
            <h4 className='text-2xl mb-2'>{t('projects.title')}</h4>
            <h5 className='text-xl mb-6'>{t('projects.type1')}</h5>
            <h5 className='w-4/5 text-xl mb-6 text-center'>{t('projects.temp')}</h5>
            <ul className='flex justify-center items-center flex-col lg:w-full w-4/5 gap-2 mb-8'>
            {Object(opcproject).map((p: any) => {return <Projectcard id={p.id} title={p.title} github={t(p.github)} description={p.description} img={p.img} tags={p.tags} urlaccess={p.urlaccess} url={p.url}/>})}
            </ul>
            <h5 className='text-xl mb-8'>{t('projects.type2')}</h5>
            <ul className='flex justify-center items-center flex-col lg:w-full w-4/5 gap-2 pb-8'>
            {Object(personalproject).map((p: any) => {return <Projectcard id={p.id} title={p.title} github={t(p.github)} description={p.description} img={p.img} tags={p.tags} urlaccess={p.urlaccess} url={p.url}/>})}
            </ul>
        </div>
        </div>
    );
};

export default Projects;