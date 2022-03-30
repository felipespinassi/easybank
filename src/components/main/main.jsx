import iconApi from '../../images/icon-api.svg'
import iconBudgeting from '../../images/icon-budgeting.svg'
import iconOnboarding from '../../images/icon-onboarding.svg'
import iconOnline from '../../images/icon-online.svg'

import '../main/main.css'

function Main (){
    return(
        <div className="main">
            <h2 className='subtitle'>Why choose Easybank ?</h2>
            <p className='main_paragraph'>We leverage Open Banking to turn your bank account into your financial hub.
                Control your finances like never before.
            </p>
                <div className='main_container'>
                    <div className='main-container-div'>
                        <img className='main_container_img' src={iconOnline} alt="Icone online" />
                        <h3 className='main_container_subtitle'>Online Banking</h3>
                        <p className=' main_container_p'>Our modern web and mobile applications allow you to 
                            keep track of your finances wherever you are in the world.</p>
                    </div>

                    <div className='main-container-div'>
                        <img className='main_container_img' src={iconBudgeting} alt="icone simple budgeting" /> 
                        <h3 className='main_container_subtitle'>Simple Budgeting</h3>
                        <p className=' main_container_p'>See exactly where your money goes each month. Receive notifications 
                            when you’re close to hitting your limits.</p>
                    </div>

                    <div className='main-container-div'> 
                        <img className='main_container_img' src={iconOnboarding} alt="icone fast onboarding" />
                        <h3 className='main_container_subtitle'>Fast Onboarding</h3>
                        <p className=' main_container_p'>We don’t do branches. Open your account in minutes online 
                            and start taking control of your finances right away.</p>
                    </div>
                
                    <div className='main-container-div'> 
                        <img className='main_container_img' src={iconApi} alt="icone open API" />
                        <h3 className='main_container_subtitle'>Open API</h3>
                        <p className=' main_container_p'> Manage your savings, investments, pension, and much more from one account. 
                            Tracking your money has never been easier.</p>
                    </div>
                </div>
        </div>
    )
}
export default Main