import '../../i18n';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-fourth w-full h-full flex flex-col justify-evenly items-center ">
            <div className='flex flex-col'>
                <h4 className='text-2xl mb-12 flex justify-center'>{t('about.welcome')}</h4>
                <h4 className='text-2xl mb-12 text-first flex justify-center'>{t('about.title')}</h4>
                <div className='flex justify-between gap-2'>
                <a href='https://cvdesignr.com/p/62bb4ad5b2283' target="_blank" className='border-2 rounded-xl border-black p-[5px]'>{t('about.onlinecv')}</a>
                <a href='../cv.pdf' className='border-2 rounded-xl border-black p-[5px]'>{t('about.offlinecv')}</a>
                </div>
            </div>
            <div className='h-2/5 flex flex-col justify-evenly'>
                <h4 className='flex justify-center underline'>{t('about.project')}</h4>
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p>{t('about.p3')}</p>
                <p>{t('about.p4')}</p>
            </div>
        </div>
    );
};

export default About;