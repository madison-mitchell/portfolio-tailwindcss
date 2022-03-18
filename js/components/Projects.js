import ohioansCare from "../../assets/OhioansCare.gif";

export default function Projects() {
    return `
    <div id="projects" class="flex justify-around">
        <div class="">
            <div class="bg-apple-white dark:bg-neutral-500 dark:text-neutral-100 mx-20 my-10 w-800p border-2 border-apple-gray rounded-lg shadow-xl dark-shadow-lg">
                <div class="wrapper bg-apple-gray border-solid border-y-2 border-apple-gray w-full px-2 py-2">
                    <div class="btn close-btn"></div>
                    <div class="btn min-btn"></div>
                    <div class="btn max-btn"></div>
                </div>
                <div class="flex flex-col p-5">
                    <div class="flex justify-center">
                        <img class="" src="${ohioansCare-1.87c26025.gif}">
                    </div>
                    <div class="p-5">
                        <div class="text-center text-2xl">
                            Ohioans Care
                        </div>
                        <p class="text-justify">
                            Ohioans Care is a central, integrated space where every Ohioan can find and offer support for all aspects of life.<span id="dots">...</span><span id="more">
                            <br>
                                <br>
                            Too often, our friends and neighbors struggle through no fault of their own. Navigating the information landscape should be one burden they never have to face. The concept was born from the mind of our very own Jo, who as a social service worker, saw too many of her clients miss out on available help due to the disorganization of resources across the state.
                                <br><br>
                            Here, users can search across a variety of services in their zip code and suggest resources that are tucked away or easily overlooked in their area. Additionally, users can access the community page to participate in discussions with their neighbors; whether it's to introduce yourself after moving or to coordinate snow removal efforts on your block.
                                <br><br>
                            On Ohioans Care, your heart is always in the right place.
                                </p>
                            <div class="flex justify-center pt-2">
                                <button id="read-more-btn" class="font-mono border-2 border-sky-600 bg-sky-600 hover:bg-sky-800 text-white px-2">
                                    READ MORE
                                </button>
                            </div>                    
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}
