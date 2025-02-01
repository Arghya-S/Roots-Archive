import Layout from "../components/Layout"
import "../styles/ContactUs.css"

export default function ContactUs(){
    return (
        <Layout idname="contact-us">
            <h1>
                Have Suggestions? Contact us!
            </h1>
            <p>We&apos;re a small team based out of Prayagraj. If you have any suggestions for the website, want to contribute or work with us, or have any good words to say, please contact us!</p>
            <form action="">
                <input type="email" placeholder="Enter your mail"/>
                <input type="text" placeholder="Subject"/>
                <textarea placeholder="Enter your message"></textarea>
                <button id="form-submit" type="submit">Send</button>
            </form>
        </Layout>
    )
}