import Container from "./Container";

const Contact = () => {
    return (
        <Container>
            <div id="contact" className="flex flex-col border-2 border-black w-full py-8 rounded-3xl">
                <div className="flex flex-col mx-20">
                    <h1 className="text-4xl font-bold">Contact Me</h1>
                    <form className="flex flex-col pt-12">
                        <div className="grid grid-rows-2 grid-cols-2 gap-4">
                            <input className="border-b border-gray-500 appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Name" aria-label="Full name"></input>
                            <input className="border-b border-gray-500 appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email" aria-label="Email"></input>
                        </div>
                        <textarea id="message" name="message" className=" h-20 border-b border-gray-500 appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Message" aria-label="Message" />
                        <div className="flex justify-end">
                            <button type="submit" className="mt-12 py-2 w-20 items-end flex justify-center border-2 border-black rounded-3xl hover:border-grey-400 hover:bg-black hover:text-white transition-all duration-300">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default Contact;