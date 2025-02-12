
const BannerSection = () => {
  return (
    <div className="container pt-16">
    <div className="grid gap-4 sm:gap-8 sm:grid-cols-2">
      <div className="overflow-hidden rounded-lg">
        <img className="hover:scale-105 transition-transform" src="/flour.jpg" alt="" />
      </div>
      <div className="overflow-hidden rounded-lg">
        <img className="hover:scale-105 transition-transform" src="/almond.jpg" alt="" />
      </div>
    </div>
    </div>
  )
}

export default BannerSection