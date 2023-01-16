import React from "react";
import styles from "./Loader.module.css"
import { useTranslation } from 'react-i18next';

export const Loader = ()=>{

    const {t} = useTranslation()

    return(
        <div className={styles.loader}>
               <h3 style={{textAlign:"center",marginTop:"35%"}}>{t('Loading')}</h3>
        </div>
    )
}