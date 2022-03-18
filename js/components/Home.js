import 'animate.css';
import smile from "../../assets/memoji-smile.png";
import laptop from "../../assets/memoji-laptop.png";
import wave from "../../assets/memoji-wave.png";

export default function Home() {
    return `
    <div id="projects" class="flex justify-around animate__animated animate__zoomIn">
        <div
            class="bg-apple-white dark:bg-neutral-500 dark:text-neutral-100 p-5 mx-20 my-10 w-800p border-2 border-apple-gray rounded-lg shadow-xl dark-shadow-lg">
            <div class="wrapper">
                <div class="btn close-btn"></div>
                <div class="btn min-btn"></div>
                <div class="btn max-btn"></div>
            </div>
            <div class="grid grid-cols-3 gap-x-5">
                <div class="text col-span-2 text-center inline-block flex flex-col justify-center">
                    <h1 class="text-2xl pb-2">
                        Projects
                    </h1>
                    <span class="font-mono text-sm text-justify pl-8  pt-2">
                        Java | Spring | Thymeleaf | JavaScript | HTML | CSS <br>
                        TDD | Agile | Scrum | Object Oriented Programming <br>
                        JSON | REST APIs | MVC | Responsive Design / Mobile <br>
                        Relational Databases | Source Control / GitHub
                    </span>
                </div>
                <div class="image flex justify-center">
                    <img src="${laptop}" alt="" class="memoji">
                </div>
            </div>
        </div>
    </div>

    <div id="header" class="flex justify-around animate__animated animate__zoomIn">
        <div
            class="dark:bg-neutral-500 dark:text-neutral-100 grid grid-cols-3 gap-x-5 w-900p p-5 border-2 border-apple-gray rounded-lg shadow-xl dark-shadow-lg mx-20 my-5">
            <div class="image flex justify-center">
                <img src="${smile}" alt="" class="memoji">
            </div>
            <div class="text col-span-2 text-center my-auto inline-block font-mono">
                <h2 class="text-left">
                    &lt;Software&gt;
                </h2>
                <h1 class="typewriter-text">
                    Madison Mitchell</h1>
                <h2 class="text-right">
                    &lt;/Developer&gt;
                </h2>
            </div>
        </div>
    </div>

    <div id="contact" class="flex justify-around animate__animated animate__zoomIn">
        <div
            class="dark:bg-neutral-500 dark:text-neutral-100 grid grid-cols-3 gap-x-5 w-800p p-5 border-2 border-apple-gray rounded-lg shadow-xl dark-shadow-lg mx-20 my-10">
            <div class="text col-span-2 text-center my-auto inline-block">
                <h1 class="text-2xl pb-2">
                    Contact
                </h1>
                <span class="font-mono pt-2">Let's Get In Touch!</span>
            </div>
            <div class="image flex justify-center">
                <img src="${wave}" alt="" class="memoji">
            </div>
        </div>
    </div>
    `;
}