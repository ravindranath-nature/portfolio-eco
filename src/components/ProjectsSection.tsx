import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Github, ExternalLink, Plane, Camera, Map, TreePine } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Freshwater Wildlife Monitoring",
      description: "Planned and conducted India’s first freshwater wildlife monitoring using UAVs and satellite imagery for habitat assessment and species detection.",
      technologies: ["Python", "R", "Google Earth Engine", "UAV", "Remote Sensing", "GIS"],
      status: "Active",
      category: "Ecological Monitoring",
      icon: <Camera className="w-6 h-6" />,
      color: "river"
    },
    {
      title: "Riparian Habitat Modeling",
      description: "Modeled habitat quality and threat dynamics across the Ganges Basin, integrating UAV data with satellite remote sensing for ecological analysis.",
      technologies: ["Python", "R", "ArcGIS", "QGIS", "Satellite Imagery", "Machine Learning"],
      status: "Completed",
      category: "Geospatial Analytics",
      icon: <Map className="w-6 h-6" />,
      color: "forest"
    },
    {
      title: "Species Detection along the Ganga River",
      description: "Developed AI-based real-time detection framework using drone imagery to monitor selected riparian species, including Gharial and Swamp Deer.",
      technologies: ["PyTorch", "YOLOv8", "Computer Vision", "UAV", "Edge Computing"],
      status: "Active",
      category: "AI & Conservation",
      icon: <TreePine className="w-6 h-6" />,
      color: "earth"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      river: "border-l-river-blue bg-river-light/5",
      forest: "border-l-forest-deep bg-forest-light/5", 
      earth: "border-l-earth-brown bg-earth-light/5"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.river;
  };

  const getStatusColor = (status: string) => {
    const statusMap = {
      Active: "bg-forest-light/20 text-forest-deep",
      Completed: "bg-river-light/20 text-river-blue"
    };
    return statusMap[status as keyof typeof statusMap] || statusMap.Active;
  };

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Research Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Projects focused on ecological monitoring, UAV-based data collection, and AI-driven species detection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-organic transition-organic border-l-4 ${getColorClasses(project.color)} ripple-effect`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-muted rounded-lg group-hover:scale-110 transition-organic">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary group-hover:text-forest-deep transition-organic">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                        <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-background border border-border rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
