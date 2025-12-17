import { Target, Palette, BarChart3, Wrench, Award } from "lucide-react";
import CVCard from "./CVCard";

const skillCategories = [
  {
    title: "Marketing & Advertising",
    subtitle: "Focus op performance & data",
    icon: Target,
    color: "primary",
    skills: [
      { name: "Google Ads (Search & Display)", description: "Campagnes opzetten, structureren en optimaliseren op basis van zoekintentie, biedstrategieën (o.a. Smart Bidding) en performance-inzichten." },
      { name: "Meta Advertising (Facebook & Instagram)", description: "Basiservaring met conversie- en leadcampagnes, creatives testen, targeting, en werken met Pixel & CAPI-concepten." },
      { name: "Performance Marketing & Funnels", description: "Conversiegericht denken: van advertentie → landingspagina → meetbare actie." },
      { name: "Content & Creatives voor Ads", description: "Meedenken over hooks, formats en creatieve invalshoeken voor social advertenties." },
      { name: "Basis SEO & zoekgedrag", description: "Inzicht in zoekwoorden, zoekintentie en de rol van SEO binnen het bredere marketinglandschap." }
    ]
  },
  {
    title: "Design & Creative",
    subtitle: "Ondersteunend aan ads",
    icon: Palette,
    color: "secondary",
    skills: [
      { name: "Canva (ads & social creatives)", description: "Ontwerpen en aanpassen van advertentievisuals voor Meta & Display." },
      { name: "Photoshop (basis)", description: "Bewerken en optimaliseren van visuals voor online campagnes." },
      { name: "UX / landingspagina-denken", description: "Basisinzicht in conversie, hiërarchie en gebruiksvriendelijkheid (CRO-minded)." }
    ]
  },
  {
    title: "Data & Analytics",
    subtitle: "Sterk punt voor deze rol",
    icon: BarChart3,
    color: "accent",
    skills: [
      { name: "Google Analytics 4 (GA4)", description: "Events, conversies, rapportages en basis analyse van gebruikersgedrag." },
      { name: "Google Ads Measurement", description: "Inzicht in conversiemetingen, attributie en data-koppelingen." },
      { name: "Google Tag Manager (basis)", description: "Begrip van tags, events en tracking-structuur (implementatie in samenwerking met developers)." },
      { name: "Excel / data-analyse", description: "Rapportages, analyses en inzichten vertalen naar actiepunten." },
      { name: "SPSS & Tableau", description: "Ervaring met data-analyse en visualisatie vanuit studiecontext." }
    ]
  },
  {
    title: "Tech & Tools",
    subtitle: "Relevant voor digital advertising",
    icon: Wrench,
    color: "success",
    skills: [
      { name: "Google Marketing Platform", description: "Google Ads, GA4, Tag Manager, Looker Studio (basis)." },
      { name: "Meta Business Manager", description: "Ads Manager, Pixel, catalogi (basiskennis & praktijkervaring)." },
      { name: "HubSpot", description: "Inbound marketing, contentstrategie en lead nurturing (gecertificeerd)." },
      { name: "Mailchimp", description: "E-mailcampagnes en basis automation." },
      { name: "Visual Studio Code (basis)", description: "HTML/CSS lezen en kleine aanpassingen begrijpen voor tracking & CRO." }
    ]
  }
];

const certifications = [
  "Google Ads Search Certification (2025)",
  "Google Ads Display Certification (2025)",
  "Google Ads Measurement Certification (2025)",
  "Google Analytics GA4 Certification (2025)",
  "HubSpot Inbound Marketing Certification (2025)",
  "Elements of AI – University of Helsinki (2023)"
];

const ModernSkills = () => {
  return (
    <section className="animate-fade-in">
      <div className="text-center mb-8 md:mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-3 md:mb-4">
          Skills & Expertise
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">Mijn toolbox voor digital advertising & marketing</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          
          return (
            <CVCard key={index} className="md:hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <div className={`w-10 h-10 md:w-12 md:h-12 bg-${category.color}/20 text-${category.color} rounded-lg md:rounded-xl flex items-center justify-center border border-${category.color}/30 flex-shrink-0`}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-heading font-bold text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{category.subtitle}</p>
                </div>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-${category.color} flex-shrink-0 mt-2`}></div>
                      <div>
                        <span className="text-sm md:text-base text-foreground font-medium group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <p className="text-xs md:text-sm text-muted-foreground mt-0.5 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CVCard>
          );
        })}
      </div>

      {/* Certificeringen Section */}
      <div className="mt-8 md:mt-12">
        <CVCard className="md:hover:scale-[1.01] transition-all duration-500">
          <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 text-primary rounded-lg md:rounded-xl flex items-center justify-center border border-primary/30 flex-shrink-0">
              <Award className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg md:text-xl font-heading font-bold text-foreground">
                Certificeringen
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">Professionele kwalificaties</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-muted/40 rounded-lg border border-border/30 hover:border-primary/50 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                <span className="text-sm text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </CVCard>
      </div>
    </section>
  );
};

export default ModernSkills;