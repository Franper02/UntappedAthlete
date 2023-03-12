import { CheckIcon } from '@heroicons/react/20/solid';
import abilityIcon from '../assets/ability-icon.svg';
import understandingIcon from '../assets/understanding-icon.svg';
import lifestyleIcon from '../assets/lifestyle-icon.svg';
import ForYouImage from '../assets/for-you-if-image.jpeg';



const forYouIfList = [
  {
    name: 'You are someone who needs more than what the Mainstream Fitness Industry has to offer',
  },
  { name: 'You understand that maximizing physical performance is the key to excellence in all aspects of life', 
  },
  {
    name: 'You are someone who wants to not only be given the system to maximize your health, but to understand all of the concepts in complete depth to be your own coach',
  },
]

const helpsAchieveList = [
    {
      name: 'Lifestyle',
      description:' Given everything you need to cultivate a fluid lifestyle that will allow your training and performance to translate perfectly in your day to day',
      icon: lifestyleIcon
    },
    { name: 'Understanding',
      description:'Not only having everything you need to Maximize your Health and Performance, but to truly acquire the understanding on a fundamental level , so you can become your own coach',
      icon: understandingIcon
    },
    {
      name: 'Ability',
      description: 'Implementing the above will give you a new body, a new mind, a new spirit , and a competitive edge to harness into every area of your life',
      icon: abilityIcon
    },
  ]

export default function Features() {
  return (
    <div className="bg-[#161516]" id='features'>
      <div className="mx-auto">
        <div className='mb-4'>
            <dl className="col-span-2 grid grid-cols-1 text-base leading-7 text-gray-600 sm:grid-cols-3 lg:gap-y-16">
              {helpsAchieveList.map((feature) => (
                <>
                <div className='flex flex-col items-center justify-start p-6 border border-[#fff]/[.15] sm:p-9'>
                  <div className='flex items-end justify-start w-full mb-4'>
                    <img className='h-12 w-12 mr-4 md:h-8 md:w-8 lg:h-12 lg:w-12' src={feature.icon} alt="features icon" />
                    <h1 className='font-bold text-white text-4xl md:text-2xl lg:text-4xl'>{feature.name}</h1>
                  </div>
                    <span className='text-[#979191] text-left font-inter md:text-sm lg:text-base'>{feature.description}</span>
                </div>
                </>
              ))}
            </dl>
            <div className="relative bg-[#1D1C1E]">
              <div className="relative h-80 overflow-hidden bg-[#DEAC40] md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                <img
                  className="h-full w-full object-cover -scale-x-100"
                  src={ForYouImage}
                  alt="man working out"
                />
                <svg
                  viewBox="0 0 926 676"
                  aria-hidden="true"
                  className="absolute left-24 -bottom-24 w-[57.875rem] transform-gpu blur-[118px]"
                >
                  <path
                    fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
                    fillOpacity=".4"
                    d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
                  />
                  <defs>
                    <linearGradient
                      id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                      x1="926.392"
                      x2="-109.635"
                      y1=".176"
                      y2="321.024"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#776FFF" />
                      <stop offset={1} stopColor="#FF4694" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="relative mx-auto max-w-7xl py-12 sm:py-32 lg:py-40 lg:px-8 3xl:max-w-none">
                <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                  <h2 className="text-base font-semibold font-inter leading-7 text-[#DEAC40]">UNTAPPED ATHLETE</h2>
                  <p className="mt-2 text-5xl font-bold tracking-tight text-white sm:text-5xl">IS FOR YOU IF</p>
                  <div className='mt-6 3xl:max-w-[90%] 3xl:mx-auto'>
                    {forYouIfList.map((feature) => (
                    <div key={feature.name} className="relative pl-9 text-left mb-4 3xl:text-xl">
                      <dt className="font-semibold text-white/[.65]">
                        <CheckIcon className="absolute top-1 left-0 h-5 w-5 text-[#DEAC40]" aria-hidden="true" />
                        {feature.name}
                      </dt>
                    </div>
                  ))}
                  </div>
                  <div className="mt-8">
                    <a
                      href="/#get-started"
                      className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      START NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center mt-12 sm:mt-24'>
            <h2 className='text-base font-semibold font-inter leading-7 text-[#DEAC40]'>- WITH UNTAPPED ATHLETE -</h2>
            <p className="mt-2 text-xl tracking-tight text-white  sm:text-xl">You can Expect to become an entirely different person in regards to how you FEEL , MOVE, and Ultimately Understand Human Performance</p>
            <p className="mt-2 text-xl tracking-tight text-white  sm:text-xl">Whether it's for injury prevention, gaining muscle/losing fat, pure strength, correct movement patterns, increased athleticism..</p>
            <p className="mt-2 text-xl tracking-tight text-white  sm:text-xl">You will be given the Roadmap to succeed with <strong>ALL</strong> of these things.</p>
        </div>
      </div>
    </div>
  )
}
