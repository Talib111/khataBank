
import LandingFooter from './LandingFooter'
import LandingForm from './LandingForm'
import LandingForm2 from './LandingForm2'
import LandingHCards from './LandingHCards'
import LandingHeader from './LandingHeader'
import LandingS1 from './LandingS1'
import LandingS2 from './LandingS2'
import LandingTeam from './LandingTeam'
const Landing = ()=>{
    return(
        <>
        
    <main>
     <LandingHeader/>
      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
         <LandingHCards/>
         <LandingS1/>
        </div>
      </section>
     <LandingS2/>
     <LandingTeam/>
    <LandingForm/>
     <LandingForm2/>
    </main>
      <LandingFooter/>
        </>
    )
}

export default Landing