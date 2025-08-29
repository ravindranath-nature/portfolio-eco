import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Microscope, Satellite, Cpu } from "lucide-react";

const AboutSection = () => {
  const expertise = [
  {
    icon: <Cpu className="w-8 h-8 text-forest-deep" />,
    title: "Machine Learning & AI",
    description: "Deep learning, computer vision, and real-time object detection applied to ecological monitoring"
  },
  {
    icon: <Satellite className="w-8 h-8 text-river-blue" />,
    title: "Remote Sensing",
    description: "UAV and satellite data fusion for habitat assessment and environmental analysis"
  },
  {
    icon: <MapPin className="w-8 h-8 text-earth-brown" />,
    title: "Geospatial Analytics",
    description: "GIS, Google Earth Engine, and big data analytics for riparian and wetland ecosystems"
  },
  {
    icon: <Microscope className="w-8 h-8 text-wetland" />,
    title: "Ecological Research",
    description: "Freshwater wildlife monitoring, habitat modeling, and conservation decision-support tools"
  }
];

return (
  <section id="about" className="py-20 bg-muted/30">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Profile & Story */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-primary mb-6">
            About Me
          </h2>
          
          <div className="prose prose-lg text-muted-foreground">
            <p className="text-lg leading-relaxed mb-4">
              I am <strong>Dr. Ravindra Nath Tripathi</strong>, Principal Project Associate at the 
              <strong> Wildlife Institute of India</strong> and a PhD in Computer Science & Engineering.
            </p>
            
            <p className="leading-relaxed mb-4">
              My work integrates artificial intelligence, UAVs, and geospatial 
              technologies to address ecological and conservation challenges. I have 
              led some of India’s first freshwater wildlife monitoring studies, combining 
              UAV imagery with satellite data for large-scale habitat assessment.
            </p>
            
            <p className="leading-relaxed mb-6">
              With experience in machine learning, big data analytics, and ecological 
              modeling, I develop tools and frameworks that connect advanced 
              technology with biodiversity conservation and environmental management.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-forest rounded-full" />
              <span>Principal Project Associate, WII</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-river rounded-full" />
              <span>PhD, Computer Science & Engineering</span>
            </div>
          </div>
        </div>

        {/* Right: Expertise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-organic transition-organic border-border/50 ripple-effect"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 bg-muted rounded-lg group-hover:scale-110 transition-organic">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    
    {/* Bottom river divider */}
    <div className="mt-20 river-divider" />
  </section>
);
}

export default AboutSection