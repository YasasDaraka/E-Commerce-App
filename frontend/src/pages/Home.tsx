import Banner from '../components/Banner'
import FeaturedProduct from '../components/FeaturedProduct'
import HeaderSlider from '../components/HeaderSlider'
import HomeProducts from '../components/HomeProducts'
import NewsLetter from '../components/NewsLetter'

export default function Home() {
  return (
    <div>
      <HeaderSlider />
      <HomeProducts />
      <FeaturedProduct/>
      <Banner />
      <NewsLetter />
    </div>
  )
}
