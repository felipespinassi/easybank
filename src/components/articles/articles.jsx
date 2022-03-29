import Currency from "../../images/image-currency.jpg"
import Confetti from "../../images/image-confetti.jpg"
import Plane from "../../images/image-plane.jpg"
import Restaurant from "../../images/image-restaurant.jpg"
import "../articles/articles.css"

function Articles() {
    return (

        <div className="article-container">
            <h1>Latest Articles</h1>
            <div className="articles">

                <section>
                    <img className="article-image" src={Currency} alt="Currency" />
                    <div className="article-div">
                        <p className="autor">By Claire Robinson</p>
                        <p className="article-p">Receive money in any currency with no fees</p>

                        <p className="article-p-description">The world is getting smaller and we’re becoming more mobile. So why should
                            you be forced to only receive money in a single …
                        </p>
                    </div>

                </section>

                <section>
                    <img className="article-image" src={Confetti} alt="Confetti" />
                    <div className="article-div">
                        <p className="autor">By Wilson Hutton</p>
                        <p className="article-p">Treat yourself without worrying about money</p>

                        <p className="article-p-description" >Our simple budgeting feature allows you to separate out your spending and
                            set realistic limits each month. That means you …
                        </p>
                    </div>

                </section>

                <section>
                    <img className="article-image" src={Plane} alt="Plane" />
                    <div className="article-div">
                        <p className="autor">By Wilson Hutton</p>
                        <p className="article-p">Take your Easybank card wherever you go</p>

                        <p className="article-p-description">We want you to enjoy your travels. This is why we don’t charge any
                            fees on purchases while you’re abroad. We’ll even show you …
                        </p>
                    </div>

                </section>

                <section>
                    <img className="article-image" src={Restaurant} alt="Restaurant" />
                    <div className="article-div">
                        <p className="autor">By Claire Robinson</p>
                        <p className="article-p">Our invite-only Beta accounts are now live!</p>

                        <p className="article-p-description">After a lot of hard work by the whole team, we’re excited to
                            launch our closed beta. It’s easy to request an invite through the site …
                        </p>
                    </div>

                </section>

            </div>
        </div>
    )
}
export default Articles