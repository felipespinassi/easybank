import Background from '../../images/bg-intro-desktop.svg'
import '../container/container.css'
import Button from '../button/button'
import Mockups from '../../images/image-mockups.png'

function Container(){
    return(
        <div className='container'>
            <div className='intro'>
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. 
                    Your Easybank account will be a one-stop-shop for 
                    spending, saving, budgeting, investing, and much more.
                </p>
                <Button></Button>
            </div>
            
            <div className='overflow-img'>
                <img className='mockups' src={Mockups} alt="Mockups" />
            </div>
            
        </div>
    )
}

export default Container