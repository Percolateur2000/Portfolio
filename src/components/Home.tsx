import '../../i18n';
import { useTranslation } from 'react-i18next';


const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-slate-300 opacity-90 w-full h-full flex justify-arround items-center flex-col rounded-xl boxAnimation">
            <h1 className="pt-6 text-2xl">{t('home.name')}</h1>
            <h2 className="pt-6 px-4 text-2xl text-indigo-800 text-center">{t('home.job')}</h2>
            <div className=" w-full lg:h-4/5 h-3/5 flex justify-center items-center">
                <img className="lg:w-auto h-3/5 rounded-lg" src="../img/id.jpg" alt="Photo Thomas Guyot" />
            </div>

        </div>
    );
};

export default Home;