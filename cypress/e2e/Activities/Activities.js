import LoginPage from '../Pages/LoginPage'
import Tours3DPage from '../Pages/Tours3DPage'
import DefaultPage from '../Pages/DefaultPage'
import HomePage from '../Pages/HomePage'
class Activities{

    loginPage = new LoginPage
    Tours3DPage = new Tours3DPage
    defaultPage = new DefaultPage
    homepage = new HomePage

    getHomePage(){ return this.homepage }
    getDefoultPage(){ return this.defaultPage }
    getTours3DPage(){ return this.Tours3DPage }
    getLoginPage(){ return this.loginPage }
}
export default Activities