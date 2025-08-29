import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const timeline = [
    {
      type: "work",
      title: "Principal Project Associate",
      organization: "Wildlife Institute of India",
      location: "Dehradun, India",
      period: "2021 - Present",
      description: "Leading interdisciplinary projects in AI-driven ecological monitoring, UAV-based wildlife studies, and geospatial modeling for freshwater ecosystems.",
      achievements: [
        "Planned and conducted India’s first freshwater wildlife monitoring studies",
        "Developed UAV–satellite data fusion techniques for habitat analysis",
        "Modeled habitat quality and threats across the Ganga Basin"
      ]
    },
    {
      type: "work",
      title: "Research Associate",
      organization: "Wildlife Institute of India",
      location: "Dehradun, India",
      period: "2017 - 2021",
      description: "Supported wetland and sanctuary management planning using geospatial analysis and ecological data integration.",
      achievements: [
        "Prepared management plans for Haiderpur Wetland and Hastinapur Wildlife Sanctuary",
        "Generated high-resolution base layers (roads, rivers, forests, settlements)",
        "Managed spatial and non-spatial ecological databases"
      ]
    },
    {
      type: "work",
      title: "Data Analyst",
      organization: "National Informatics Centre",
      location: "Delhi, India",
      period: "2016 - 2017",
      description: "Worked on data-driven solutions and IT support for government projects."
    },
    {
      type: "work",
      title: "Technical Assistant",
      organization: "Narora Atomic Power Station",
      location: "Bulandshahr, India",
      period: "2012 - 2016",
      description: "Supported technical operations and systems management at the atomic power station."
    },
    {
      type: "education",
      title: "PhD in Computer Science & Engineering",
      organization: "Graphic Era University",
      location: "Dehradun, India",
      period: "2020 - 2025",
      description: "Thesis: Integrating Computer Vision and Unmanned Aerial Systems for Ecological Monitoring of Freshwater Habitat.",
      achievements: [
        "Developed real-time UAV-based wildlife detection framework",
        "Integrated AI with ecological monitoring workflows",
        "Published multiple SCIE/Scopus-indexed papers"
      ]
    },
    {
      type: "education",
      title: "M.S. in Geo-Informatics",
      organization: "Uttarakhand Open University",
      location: "Dehradun, India",
      period: "2017 - 2019",
      description: "Specialized in remote sensing and GIS applications for biodiversity assessment.",
      achievements: [
        "Project: Visualization & Characterisation of Macrofaunal Diversity of Ganga River using Geo-Portal",
        "Worked under UNESCO C2C India Head"
      ]
    },
    {
      type: "education",
      title: "B.Tech in Information Technology",
      organization: "Punjab Technical University",
      location: "Jalandhar, Punjab, India",
      period: "2008 - 2012",
      description: "Undergraduate studies focused on computer vision and artificial intelligence foundations.",
      achievements: [
        "Minor project: Web-based geoportal framework for district data visualization"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A timeline of academic milestones and professional contributions to conservation technology and ecological research.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-forest-light via-river-blue to-earth-brown transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 transform -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full border-4 border-background ${
                    item.type === 'work' ? 'bg-forest-deep' : 'bg-river-blue'
                  }`} />
                </div>

                {/* Content card */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card className="hover:shadow-organic transition-organic ripple-effect">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${
                            item.type === 'work' ? 'bg-forest-light/20' : 'bg-river-light/20'
                          }`}>
                            {item.type === 'work' ? 
                              <Briefcase className="w-5 h-5 text-forest-deep" /> : 
                              <GraduationCap className="w-5 h-5 text-river-blue" />
                            }
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-primary">
                              {item.title}
                            </h3>
                            <p className="font-medium text-forest-deep">
                              {item.organization}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      {item.achievements && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-primary text-sm">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                                <span className="w-2 h-2 bg-forest-light rounded-full mt-2 mr-3 shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom river divider */}
      <div className="mt-20 river-divider" />
    </section>
  );
};

export default ExperienceSection;
