import SwitchButton from "@/app/components/SwitchButton";
import {useTranslations} from 'next-intl';

const About = () => {
    const t = useTranslations('about');
    return ( 
        <div>
            <p className="text-4xl font-bold">{t("teste")}</p>
            <SwitchButton/>
        </div>
     );
}
 
export default About;