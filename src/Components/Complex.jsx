import './Complex.css'

export default function Complex(){
    return(
        <div id="complex">
            <h1>Anshuk Mishra</h1>
            <h3>Frontend Developer</h3>
            <h5><a href="https://github.com/Anshuk-Mishra">https://github.com/Anshuk-Mishra</a></h5>
            <div id="container">
                <div id='email'>
                    <img src="src\assets\email.png" alt="Email" width={25}/>
                    <a href="mailto:gopalanshuk@gmail.com">Email</a>
                </div>
                <div id="linkedin">
                    <img src="src\assets\linkedin.png" alt="LinkedIn" width={20}/>
                    <a href="https://www.linkedin.com/in/anshukmishra/">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}