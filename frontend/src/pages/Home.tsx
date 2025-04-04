import CreditCard from "../components/CreditCard"
import CustomizedSnackbars from "../components/CustomizedSnackbars"

const Home = () => {
  return (
    <main className="container">
        <h1>Welcome to Wallet-X</h1>
        <CreditCard />
        {/* <HomeFilled color="success" fontSize="large"/> */}
        <CustomizedSnackbars />
    </main>
  )
}

export default Home