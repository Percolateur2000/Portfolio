import '../../i18n';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-slate-300 opacity-90 w-full h-full flex flex-col items-center rounded-xl boxAnimation gap-10 overflow-auto">
            <div className='flex flex-col p-6'>
                <h4 className='text-2xl lg:mb-12 flex justify-center items-center'>{t('about.welcome')}</h4>
                <h4 className='text-2xl mb-6 lg:mb-12 text-center'>{t('about.location')}</h4>
                <div className='flex lg:justify-between justify-center gap-5 mb-12 lg:mb-0'>
                <a href='https://cvdesignr.com/p/62bb4ad5b2283' target="_blank" className=' text-center border-2 rounded-xl border-black p-[4px] hover:animate-pulse'>{t('about.onlinecv')}</a>
                <a href='../cv.pdf' className='text-center border-2 rounded-xl border-black p-[4px] hover:animate-pulse'>{t('about.offlinecv')}</a>
                </div>
            </div>
            <div className='h-2/5 flex flex-col justify-evenly p-3'>
                <h4 className='flex justify-center underline text-center pb-2'>{t('about.project')}</h4>
                <p className='text-center pb-4'>{t('about.p1')}</p>
                <p className='text-center underline pb-2'>{t('about.p2')}</p>
                <div className='flex justify-evenly flex-col lg:flex-row lg:gap-8 gap-4'>
                    <div className='p-4 flex flex-col lg:w-1/4 border-2 rounded-xl border-black bg-indigo-200'>
                        <p className='text-center pb-3'>{t('about.titlecomp1')}</p>
                        <p className='text-center'>{t('about.comp1')}</p>
                    </div>
                    <div className='p-4 flex flex-col lg:w-1/4 border-2 rounded-xl border-black bg-white'>
                        <p className='text-center pb-3'>{t('about.titlecomp2')}</p>
                        <p className='text-center'>{t('about.comp2')}</p>
                    </div>
                    <div className='p-4 flex flex-col lg:w-1/4 border-2 rounded-xl border-black bg-indigo-200'>
                        <p className='text-center pb-3'>{t('about.titlecomp3')}</p>
                        <p className='text-center'>{t('about.comp3')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
