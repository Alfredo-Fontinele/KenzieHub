import { createContext } from "react"
import { useNavigate } from "react-router-dom"
import { API } from "../services/api"
import { toast } from 'react-toastify'

export const ValidationContext = createContext({})

export const ValidationProvider = ({ children }: any) => {
    const navigate = useNavigate()

    const onSubmitFormLogin = async (dados: {}) => {
        try {
            const { data }: any = await API.post('sessions', dados)
            const { token } = data
            localStorage.setItem("@hub:token", token)
            toast.success("Show. Manda Bala 🚀")
            navigate("/dashboard")
        } catch {
            toast.error("Ops! Algo deu errado")
        }
    }

    const onSubmitFormRegister = async (data: {}) => {
        try {
            const { email, password, name, bio, contact, course_module }:any = data
            const info = {
                "email": email,
                "password": password,
                "name": name,
                "bio": bio,
                "contact": contact,
                "course_module": course_module
            }
            await API.post('users', info)    
            toast.success("Conta Criada com Sucesso")
            navigate("/")
        } catch {
            toast.error("Ops! Algo deu errado")
        }
    }

    return (
        <ValidationContext.Provider
            value={{ navigate, onSubmitFormLogin, onSubmitFormRegister }}>
            {children}
        </ValidationContext.Provider>
    )
}
