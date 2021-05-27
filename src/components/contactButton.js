import mail from "../assets/message.svg";

function ContactButton() {
    return (
        <a rel="noreferrer" target="_blank" href="mailto:vincentmichuki@gmail.com" className="contact-button">
            <button><img src={mail} alt="Scroll"/></button>
            <span>vincentmichuki@gmail.com</span>
        </a>
    );
}

export default ContactButton;
