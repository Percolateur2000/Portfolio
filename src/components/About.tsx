import '../../i18n';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-slate-300 opacity-90 rounded-xl h-full flex p-4 items-center flex-col boxAnimation overflow-auto pb-36 lg:pb-4 lg:justify-center">
        <h1 className='pb-8 text-2xl font-bold'>{t('about.welcome')}</h1>
        <h2 className='pb-10 underline text-lg'>{t('about.location')}</h2>
        <div className='flex lg:gap-8 gap-4 lg:flex-row flex-col pb-10'>
            <a className='rounded-2xl border-black border-2 p-2 flex justify-center' target="_blank" href="https://cvdesignr.com/p/62bb4ad5b2283">{t('about.onlinecv')}</a>
            <a className='rounded-2xl border-black border-2 p-2 flex justify-center' target="_blank" href="./cv.pdf">{t('about.offlinecv')}</a>
        </div>
        <span className='whitespace-pre-wrap flex text-center'>{t('about.project')}</span>
        </div>
    );
};

export default About;
