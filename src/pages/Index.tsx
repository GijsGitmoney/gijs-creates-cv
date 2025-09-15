import { 
  BriefcaseIcon, 
  GraduationCap, 
  Award, 
  Monitor, 
  Heart,
  Star
} from "lucide-react";
import CVHeader from "../components/CVHeader";
import CVSection from "../components/CVSection";
import ExperienceItem from "../components/ExperienceItem";
import SkillCategory from "../components/SkillCategory";
import PersonalityTraits from "../components/PersonalityTraits";
import LanguageSkills from "../components/LanguageSkills";
import HobbiesSection from "../components/HobbiesSection";
import StartupHighlight from "../components/StartupHighlight";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CVHeader />
      
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Startup Highlight - Featured Section */}
        <section className="mb-20 animate-fade-in">
          <StartupHighlight />
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
          {/* Left Column - Main Content */}
          <div className="xl:col-span-2 space-y-16">
            {/* Werkervaring */}
            <CVSection icon={BriefcaseIcon} title="Werkervaring" collapsible defaultOpen>
              <ExperienceItem
                title="Verkoopmedewerker"
                company="Groenhart Alkmaar"
                period="November 2019 - Heden"
                description="Klanten helpen, contact met leveranciers, telefoon opnemen, mail bijhouden, offertes opstellen, klantorders bijhouden, ontvangen goederen registreren."
                skills={["Klantenservice", "Offerte opstelling", "Leverancier contact", "Order management"]}
              />
              
              <ExperienceItem
                title="Verkoopmedewerker"
                company="Brezan Alkmaar"
                period="Mei 2018 - Februari 2019"
                description="Klanten helpen met vragen en kopen auto-onderdelen, bestellingen verzorgen, vracht inruimen, telefoon opnemen, de Facebook pagina bijhouden."
                skills={["Auto-onderdelen", "Social Media", "Orderverwerking", "Klantenservice"]}
              />
              
              <ExperienceItem
                title="Verkoopmedewerker"
                company="Deen Bergen"
                period="December 2017 - Mei 2018"
                description="Vakken vullen, afdeling verzorgen en klanten helpen waar nodig."
                skills={["Winkel operaties", "Klantenservice", "Afdelingsbeheer"]}
              />
            </CVSection>

            {/* Opleiding */}
            <CVSection icon={GraduationCap} title="Opleiding" collapsible defaultOpen>
              <ExperienceItem
                type="education"
                title="Bachelor Business Studies, richting Marketing"
                company="Hogeschool Inholland Alkmaar"
                period="2020 - Heden"
                description="Specialisatie in marketing met focus op klantretentie en customer experience. Uitgebreide kennis van data-analyse en marketingstrategieën."
                skills={["Marketing Strategy", "Customer Experience", "Data Analyse", "Onderzoeksmethodologie"]}
              />
              
              <ExperienceItem
                type="stage"
                title="Afstudeerstage - Marketing Research"
                company="Turien & Co."
                period="Januari 2024 - September 2024"
                description="Afstudeeronderzoek naar klantretentie en klanttevredenheid. Ontwikkeling van strategieën ter verbetering van klantloyaliteit. Afgerond met een 7,5."
                skills={["Klantretentie Onderzoek", "Customer Satisfaction", "Data Analyse", "Strategic Recommendations"]}
              />
              
              <ExperienceItem
                type="education"
                title="Vestigingsmanager Groothandel niveau 4"
                company="Horizon College Heerhugowaard"
                period="2017 - 2020"
                description="Diploma behaald. Ook Commercieel medewerker certificaat behaald."
                skills={["Vestigingsmanagement", "Commerciële vaardigheden", "Groothandel operaties"]}
              />
              
              <ExperienceItem
                type="education"
                title="VMBO-TL"
                company="PCC Fabritius Alkmaar"
                period="2013 - 2017"
                description="Examenvakken: Nederlands, Engels, Wiskunde, Geschiedenis, Natuurkunde, Economie. Diploma behaald."
                skills={["Basisvaardigheden", "Analytisch denken", "Communicatie"]}
              />
            </CVSection>

            {/* Stages */}
            <CVSection icon={Award} title="Stages & Praktijkervaring" collapsible>
              <ExperienceItem
                type="stage"
                title="Afstudeerstage - Marketing Research"
                company="Turien & Co."
                period="Januari 2024 - September 2024"
                description="Afstudeeronderzoek naar klantretentie en klanttevredenheid. Ontwikkeling van strategieën ter verbetering van klantloyaliteit. Afgerond met een 7,5."
                skills={["Klantretentie Onderzoek", "Customer Satisfaction", "Data Analyse", "Strategic Recommendations"]}
              />
              <ExperienceItem
                type="stage"
                title="Stagiair Marketing"
                company="Ferney Group"
                period="September 2022 - Januari 2023"
                description="Verantwoordelijk voor het maken van de nieuwsbrieven, sociale media marketing, mee gedacht en gewerkt aan marketingcampagnes, SEO teksten geschreven."
                skills={["Newsletter marketing", "Social Media", "SEO", "Campaign development", "Content creation"]}
              />
              
              <ExperienceItem
                type="stage"
                title="Stagiair"
                company="Brezan Alkmaar"
                period="Mei 2018 - Februari 2019"
                description="De markt onderzocht en voorstellen gedaan voor commercieel beleid. Gewerkt als verkoopmedewerker en gezorgd voor relatiebeheer en klantenservice."
                skills={["Marktonderzoek", "Commercieel beleid", "Relatiebeheer", "Strategische voorstellen"]}
              />
              
              <ExperienceItem
                type="stage"
                title="Stagiair"
                company="Groenhart Alkmaar"
                period="November 2019 - April 2020"
                description="Klanten helpen, vracht inruimen, ontvangen goederen registreren, klant orders afhandelen."
                skills={["Logistiek", "Orderverwerking", "Klantbegeleiding"]}
              />
            </CVSection>
          </div>

          {/* Right Column - Skills & Personal */}
          <div className="space-y-12">
            {/* Marketing Skills */}
            <SkillCategory
              icon={Monitor}
              title="Marketing & Technology"
              skills={[
                { name: "Mailchimp", category: "Email Marketing" },
                { name: "Coosto", category: "Social Media" },
                { name: "SEO", category: "Digital Marketing" },
                { name: "Social Media Marketing", category: "Strategy" },
                { name: "Canva", category: "Design Tools" },
                { name: "Photoshop", category: "Design Tools" },
                { name: "UX/UI Design", category: "Product Design" },
                { name: "Campaign Development", category: "Strategy" },
                { name: "Content Creation", category: "Marketing" }
              ]}
              color="primary"
            />

            {/* Data & Analysis */}
            <SkillCategory
              icon={Star}
              title="Data & Analyse"
              skills={[
                { name: "Tableau", category: "Visualization" },
                { name: "IBM SPSS", category: "Statistics" },
                { name: "MS Excel", category: "Data Analysis" },
                { name: "SAP", category: "Enterprise" },
                { name: "Klantretentie Onderzoek", category: "Research" },
                { name: "Customer Analytics", category: "CX" }
              ]}
              color="accent"
            />

            {/* Languages */}
            <LanguageSkills />

            {/* Personality */}
            <PersonalityTraits />

            {/* Hobbies */}
            <HobbiesSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
