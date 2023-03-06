import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


const navigation = [
  { name: 'WHY UNTAPPED ATHLETE', href: '/#features' },
  { name: 'MEMBERS RESULTS', href: '/#testimonials' },
  { name: 'ABOUT US', href: '/about-us' },
  { name: 'GET STARTED', href: '/#get-started' },
]

export default function AboutUs(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return(
        <div className="relative isolate overflow-hidden bg-[#161516] min-h-screen">
        <div className="px-2 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between pt-6" aria-label="Global">
            <div className="flex items-center lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <div>
                  <span className='text-white' >UNTAPPED</span>
                  <span className='text-[#DEAC40]'>ATHLETE</span>
                </div>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-[#161516] px-6 py-6 lg:hidden">
              <div className="flex items-center justify-between">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <span className="text-white">UNTAPPED<span className="text-[#DEAC40]">ATHLETE</span></span>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
          <div className="mx-auto py-16 sm:py-16 lg:py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                ABOUT UNTAPPED <span className='text-[#DEAC40]'>ATHLETE</span>
              </h1>
              <div className="mt-16 border-y border-white[.65] py-12 mx-auto ">
                <div className="max-w-5xl mx-auto">
                    <span className="text-[#DEAC40]">- OUR STORY -</span>
                    <h1 className="text-white text-xl mb-4">THE MAINSTREAM FITNESS INDUSTRY IS BROKEN AND TRADITIONAL PERSONAL TRAINING IS DEAD</h1>
                    <p className="text-white/[.65] text-center">
                        Maybe you can relate in some fashion...
                        <br />
                        When I first started training, I wanted to be the blue blood athlete, and the fkn MAN. Maxxed SWAGGER, limitless confidence, jacked, tan, handsome, healthy, athletic, in good health, CONTROL over my situation, making money, more women, etc.
                        <br />
                        <span className="text-[#DEAC40]">STATUS</span> was the goal. Still is somewhat
                        <br />
                        <br />
                        As time has gone on, and I got older, improved, and my life started to get more of these things…
                        <br />
                        I became less motivated by these external things, became more of a man myself. 
                        <br />
                        Now, honestly what makes me go is the feeling that I’m breaking my own limits, me vs me progress.
                        <br />
                        And realized it was extremely gratifying to help others to do so. That became something I genuinely love too
                        <br />
                        I’ve trained literally over <span className="text-[#DEAC40]">2000 people</span> in the past 4 years in some fashion either in person or online
                        and have more legitimate testimonials than I know what to do with
                        <br />
                        <br />
                        You see maybe it’s insecurity… but I don’t feel good unless I can put my heart and soul into genuinely helping people get the best results possible
                        <br />
                        The key difference between people who have left working with me having their life changed, & people with just "eh" outcomes
                        <br />
                        Are the ones who need to internalize change and become IT, not just do it for a little while
                        <br />
                        They need to cultivate the <span className="text-[#DEAC40]">AWARENESS</span> I have into themselves to get similar results
                        <br />
                        They need to understand the <span className="text-[#DEAC40]">CONCEPTS</span> and apply it to their own areas they would like to improve
                        <br />
                        To <span className="text-[#DEAC40]">COMPETE</span>
                        <br />
                        <br />
                        And so in thinking what I can do to solve this problem and build something of substance for the next 2-3 years minimum, if not for the decade…
                        <br />
                        I bring you from the Atlantean Aether:
                        <br />
                        The opportunity to become an <span className="text-[#DEAC40] font-bold">“UNTAPPED ATHLETE”</span>
                    </p>
                </div>
              </div>
              <div className="p-4 border-y border-white[.65] flex flex-col items-center justify-between sm:p-16 sm:flex-row">
                <h1 className="text-white text-center text-3xl max-w-5xl mb-4 sm:text-left sm:mb-0 sm:text-4xl">BOOK A FREE HEALTH ASSESSMENT CALL AND START CHANGING WHO YOU ARE INTO <span className="text-[#DEAC40]">WHO YOU WANT TO BE</span></h1>
                <a className="text-white p-4 text-xl border border-white sm:text-2xl" href="/#get-started">START NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

