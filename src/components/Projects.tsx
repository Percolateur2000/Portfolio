import '../../i18n';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-slate-300 w-full h-full overflow-auto rounded-xl p-2">
            <div className='h-full flex pt-8 items-center flex-col'>
                <h4 className='text-2xl mb-8'>{t('projects.title')}</h4>
                <h5 className='text-xl mb-8'>{t('projects.type1')}</h5>
                <ul className='flex justify-center items-center flex-col lg:w-3/5 w-4/5 gap-2 mb-8'>
                    <a href='https://github.com/Percolateur2000/Projet2' target="_blank" className='projects'>{t('projects.p1')}</a>
                    <a href='https://github.com/Percolateur2000/Projet3' target="_blank" className='projects'>{t('projects.p2')}</a>
                    <a href='https://github.com/Percolateur2000/Projet4' target="_blank" className='projects'>{t('projects.p3')}</a>
                    <a href='https://github.com/Percolateur2000/Projet5' target="_blank" className='projects'>{t('projects.p4')}</a>
                    <a href='https://github.com/Percolateur2000/Projet6' target="_blank" className='projects'>{t('projects.p5')}</a>
                    <a href='https://github.com/Percolateur2000/Projet7' target="_blank" className='projects'>{t('projects.p6')}</a>
                </ul>
                <h5 className='text-xl mb-8'>{t('projects.type2')}</h5>
                <ul className='flex justify-center items-center flex-col w-3/5 gap-2'>
                    <a href='https://github.com/Percolateur2000/Portfolio' target="_blank" className='projects'>{t('projects.p8')}</a>
                </ul>
            </div>
        </div>
    );
};

export default Projects;