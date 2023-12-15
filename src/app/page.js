import HeroBanner from "@/components/HeroBanner";
import Jp from "@/components/Jp";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";
export default function Home() {
   return (
      <div>
         <HeroBanner />
         <Skill />
         <Projects />
         <Jp />
      </div>
   );
}
