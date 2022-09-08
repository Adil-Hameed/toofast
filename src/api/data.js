import Img1 from "../Assets/1.jpg"
import Img2 from "../Assets/2.jpg"
import Img3 from "../Assets/3.jpg"
import Img4 from "../Assets/4.jpg"
import Img5 from "../Assets/5.jpg"
import Img6 from "../Assets/6.jpg"



const oopp = {
    navbar: {
        h1: "Start APi",
        li: ["About", "Services", "Portfolio"]
    },
    section1: {
        h1: "Your Favorite Place for Free Tailwind Themes",
        p: "Start Tailwind can help you build better websites using the Tailwind framework! Just download a theme and start customizing, no strings attached!",
        button: "FIND OUT MORE"
    },
    section2: {
        h2: "We've got what you need!",
        p: "Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached! ",
        button: "Get Started!"
    },
    section3: {
        h2: "At Your Service",
        card: [
            {
                icon: "diamond-outline",
                h3: "Sturdy Themes",
                p: "Our themes are updated regularly to keep them bug free!",
            },
            {
                icon: "heart-outline",
                h3: "Up to Date",
                p: "All dependencies are kept current to keep things fresh.",
            },
            {
                icon: "laptop-outline",
                h3: "Ready to Publish",
                p: "You can use this design as is, or you can make changes!",
            },
            {
                icon: "globe-outline",
                h3: "Made with Love",
                p: "Is it really open source if it's not made with love?",
            },
        ],
    },
    section4: {
        img: [Img1, Img2, Img3, Img4, Img5, Img6]
    },
    section5: {
        h1: "Free Download at Start Tailwind!",
        button: "Download Now!"
    },
    section6: {
        h2: "Let's Get In Touch!",
        p: "Ready to start your next project with us? Send us a messages and we will get back to you as soon as  possible!",
        placeholder: ["Full name", "Email", "Phone number"],
        textarea: "Message",
        button: "Download Now!"
    }
}

export default oopp;