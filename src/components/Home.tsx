import '../../i18n';
import { useTranslation } from 'react-i18next';


const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-fourth w-full h-full flex justify-arround items-center flex-col rounded-lg">
            <h1 className="pt-6 text-2xl">{t('home.name')}</h1>
            <h2 className="pt-6 text-2xl text-first ">{t('home.job')}</h2>
            <p className="pt-6 text-xl ">{t('home.location')}</p>
            <div className=" w-full h-4/5 flex justify-center items-center">
                <img className="h-3/5 rounded-lg" src="../id.jpg" alt="Photo Thomas Guyot" />
            </div>

        </div>
    );
};

export default Home;