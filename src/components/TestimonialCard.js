export default function TestimonialCard({quote, name, url}) {
    return (
      <div className="bg-[#161516] pt-16 mx-auto max-w-7xl lg:py-24">
        <div className="bg-[#1D1C1E] pb-16 sm:mx-auto sm:max-w-4xl xl:max-w-7xl lg:relative lg:z-10 lg:pb-0">
          <div className="lg:mx-auto lg:flex sm:max-w-7xl sm:px-8">
            <div className="relative lg:-my-8">
              <div className="mx-auto max-w-3xl sm:max-w-3xl sm:px-6 sm:min-w-[32rem] lg:h-full lg:p-0">
                <div className="aspect-h-6 h-[20rem] overflow-hidden sm:rounded-xl shadow-xl sm:aspect-h-7 md:h-[25rem] lg:h-full">
                  <iframe 
                    id="testimonial-video"
                    width="100%"
                    height="100%"
                    className="h-full w-full aspect-video"
                    src={url} 
                    title="YouTube video player" 
                    frameborder="0" 
                    loading={"lazy"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
                    allowfullscreen>
                </iframe>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 sm:mt-12 lg:m-0 lg:pl-8">
              <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
                <blockquote>
                  <div>
                    <svg
                      className="h-12 w-12 text-white opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="flex items-center justify-center text-xl font-medium h-[20rem] text-white sm:text-2xl sm:mt-6 sm:h-[26rem] md:h-[15rem] xl:h-[20rem]">
                        {quote}
                    </p>
                  </div>
                  <footer className="mt-6">
                    <p className="text-base font-medium text-[#DEAC40]">- {name}</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  