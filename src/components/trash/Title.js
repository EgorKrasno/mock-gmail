import Typewriter from "typewriter-effect";

const Title = () => <div className="flex text-gray-100 text-3xl font-custom title">E
    <Typewriter
        options={{
            loop: true,
            delay: 250,
        }}
        onInit={(typewriter) => {
            typewriter.typeString('mail')
                .pauseFor(15000)
                .deleteChars(4)
                .pauseFor(2000)
                .typeString("gor Mail")
                .pauseFor(15000)
                .deleteChars(5)
                .pauseFor(2000)
                .typeString(" & Stephen Mail")
                .pauseFor(15000)
                .start();
        }}
    /></div>
export default Title;