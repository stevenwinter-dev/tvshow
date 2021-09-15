import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-header">
                <p>Contact us</p>
            </div>
            <div className="footer-contact-container">
                <div className="footer-contact">
                    <div className="footer-contact-title">
                        Address | Mailing
                    </div>
                    <div className="footer-contact-content">
                        <p>Primary Address Line</p>
                        <p>Secondary Address Line</p>
                        <p>12345 Postal Code</p>
                    </div>
                </div>
                <div className="footer-contact">
                    <div className="footer-contact-title">
                        Phone | Ring! Ring!
                    </div>
                    <div className="footer-contact-content">
                        <p>Headline</p>
                        <p>+1 123 456 789</p>
                    </div>
                </div>
                <div className="footer-contact">
                    <div className="footer-contact-title">
                        E-Mail | Swoosh!
                    </div>
                    <div className="footer-contact-content">
                        <p>email@email.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
