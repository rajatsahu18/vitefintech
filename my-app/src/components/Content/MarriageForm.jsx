import React from 'react'
import { useDispatch } from 'react-redux'
import { addMarriageData } from '../../redux/getData/action'

export const MarriageForm = () => {

    const [item, setItem] = React.useState("")
    const dispatch = useDispatch()

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
            <h1>Marriage Form</h1>
                <form onSubmit = {submit} >
                    <input type="text" value = {item} placeholder= "Enter Message" onChange = {e => setItem(e.target.value)} />
                    <button  style = {{ border: "1px solid #2E4250", padding: "3px", margin: "5px", width: "80px", backgroundColor: "#2E4250", color: "white" }}  >ADD</button>
                </form>   
        </div>
    )
}