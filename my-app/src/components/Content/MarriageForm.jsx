import React from 'react'
import { useDispatch } from 'react-redux'
import { addMarriageData } from '../../redux/getData/action'
import { useTranslation } from 'react-i18next';

export const MarriageForm = () => {

    const [item, setItem] = React.useState("")
    const dispatch = useDispatch()
    const {t} = useTranslation()


    const submit = e => {
        e.preventDefault()
        dispatch(addMarriageData({
            title: item,
            status: false
        }))
        setItem('')
    }

    return (
        <div>
            <h1>{t('Marriage_Form')}</h1>
                <form onSubmit = {submit} >
                    <input type="text" value = {item} placeholder= {t('Enter_Message')} onChange = {e => setItem(e.target.value)} />
                    <button  style = {{ border: 'none', padding: "3px", margin: "5px", width: "80px", background:'#FAE057', color:'#fff', fontWeight:'900', cursor:'pointer' }}>{t('ADD')}</button>
                </form>   
        </div>
    )
}