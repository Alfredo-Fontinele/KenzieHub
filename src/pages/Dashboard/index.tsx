import { useEffect, useContext } from "react"
import { Container } from "../../components/Container/style"
import { Header } from "../../components/Header"
import { Line } from "../../components/LineDivision/style"
import { Main } from "../../components/Main"
import { User } from "../../components/User"
import { useValidation } from "../../context/validation"

export const Dashboard = () => {
    const { navigate, isLogged } = useValidation()
    const logged = localStorage.getItem("@hub:token")

    useEffect(() => {
        if (!logged) {
            navigate("/")
        }
    }, [])

    return (
        <>
            <Container>
                <Header title="Kenzie Hub"/>
            </Container>
            <Line/>
            <Container>
                <User/>
            </Container>
            <Line/>
            <Container>
                <Main/>
            </Container>
        </>
    )
}
