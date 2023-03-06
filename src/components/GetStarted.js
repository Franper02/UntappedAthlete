
import { InlineWidget } from "react-calendly";

export default function GetStarted(){
    return(
        <div className="bg-[#161516] py-24 sm:py-16" id="get-started">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white mb-6 sm:mb-12 sm:text-3xl">HOW TO GET STARTED:</h1>
                <p className="mt-2 mb-4 text-xl tracking-tight text-white text-center sm:text-xl">
                    If you’re someone who wants to make leaps and bounds of progress with your health/performance, schedule a call using the calendar below and someone from our team will meet with you to see if you're a good fit for us.
                </p>
                <p className="my-4 sm:mb-0 text-[#DEAC40]">
                    <span className="underline">DO NOT</span> book a call if you aren't ready to truly work towards a better vision of yourself.
                </p>
                <InlineWidget styles={{height: "95vh", minWidth:"320px"}} url="https://calendly.com/kieran-66/organic"/>
            </div>
        </div>
    ) 
}