import logoBranco from '../../images/logobranco.svg'
import facebookImg from '../../images/icon-facebook.svg'
import youtubeImg from '../../images/icon-youtube.svg'
import twitterImg from '../../images/icon-twitter.svg'
import pinterestImg from '../../images/icon-pinterest.svg'
import instagramImg from '../../images/icon-instagram.svg'
import '../footer/footer.css'
import Button from '../button/button'


export function Footer(){
    return(
        <footer>
            <div className='footer-div' >
                <img className="footer-logo" src={logoBranco} alt="logo" ></img>
                <div className='footer-div-img'>
                    <img src={facebookImg} alt="" />
                    <img src={youtubeImg} alt="" />
                    <img src={twitterImg} alt="" />
                    <img src={pinterestImg} alt="" />
                    <img src={instagramImg} alt="" />
                </div>
            </div>
            <div className='footer-div'>
                <a href="#" className='footer-div-a'>About Us</a>
                <a href=""className='footer-div-a' >Contact</a>
                <a href="" className='footer-div-a'>Blog</a>
            </div>
            <div className='footer-div'>
                <a href=""className='footer-div-a'>Careers</a>
                <a href=""className='footer-div-a'>Support</a>
                <a href=""className='footer-div-a'>Privacy Policy</a>
            </div>
            <div className='footer-div'>
                <Button/>
                <p className="footer-div-p">© Easybank. All Rights Reserved</p>
            </div>
        </footer>
    )
}