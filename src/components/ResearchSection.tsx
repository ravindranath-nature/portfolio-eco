import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Award } from "lucide-react";

const ResearchSection = () => {
  const publications = [
    {
      title: "Conservation in action: Cost-effective UAVs and real-time detection of the globally threatened swamp deer (Rucervus duvaucelii)",
      journal: "Ecological Informatics",
      year: "2025",
      doi: "https://doi.org/10.1016/j.ecoinf.2024.102913",
      description: "Cost-effective UAVs and real-time AI detection framework for monitoring swamp deer populations.",
      type: "Research Article",
      impact: "Impact Factor: 7.3"
    },
    {
      title: "Optimizing Riparian Habitat Conservation: A Spatial Approach Using Aerial and Space Technologies",
      journal: "Journal of Selected Topics in Applied Earth Observations and Remote Sensing (IEEE)",
      year: "2024",
      doi: "https://doi.org/10.1109/JSTARS.2024.3454453",
      description: "Spatial modeling of riparian habitats combining UAV and satellite imagery for conservation planning.",
      type: "Research Article",
      impact: "Impact Factor: 5.3"
    },
    {
      title: "Assessment of Eco-Environmental Vulnerability, Sustainability, and Alignment with Sustainable Development Goals in the Chambal River Basin, India",
      journal: "Theor Appl Climatol",
      year: "2025",
      doi: "https://doi.org/10.1007/s00704-025-05417-y",
      description: "Environmental vulnerability and sustainability assessment of Chambal River Basin using remote sensing and GIS.",
      type: "Research Article",
      impact: "Impact Factor: 2.8"
    },
    {
      title: "UAV and Deep Learning: Detection of selected riparian species along the Ganga River",
      journal: "The International Archives of Photogrammetry, Remote Sensing and Spatial Information",
      year: "2024",
      doi: "https://doi.org/10.5194/isprs-archives-XLVIII-1-2024-637-2024",
      description: "Application of UAVs and deep learning for species detection in riparian ecosystems.",
      type: "Research Article",
      impact: "Peer-reviewed"
    },
    {
      title: "Feasibility study of UAV based ecological monitoring and habitat assessment of cervids in the floating meadows of Keibul Lamjao National Park in Manipur, India",
      journal: "Measurement",
      year: "2024",
      doi: "https://doi.org/10.1016/j.measurement.2024.114411",
      description: "UAV-based monitoring of cervids in Keibul Lamjao National Park for ecological assessment.",
      type: "Research Article",
      impact: "Impact Factor: 5.6"
    },
    {
      title: "Spatio-temporal habitat assessment of the Gangetic floodplain in the Hastinapur Wildlife Sanctuary",
      journal: "Ecological Informatics",
      year: "2022",
      doi: "https://10.0.3.248/j.ecoinf.2022.101851",
      description: "Multivariate spatio-temporal assessment derived habitat suitability index of key resident species.",
      type: "Research Article",
      impact: "Impact Factor: 7.3"
    },
    {
      title: "Development of a Google Earth engine-based application to monitor the seasonal water spread area of river Ganga",
      journal: "Ecological InformaticsThe International Archives of Photogrammetry, Remote Sensing and Spatial Information",
      year: "2022",
      doi: "https://10.0.20.74/isprs-%20archives-XLIII-B3-2022-1287-2022",
      description: "Monitoring the seasonal water spread area of river Ganga.",
      type: "Research Article",
      impact: "Impact Factor: 0.90"
    }
  ];

  const metrics = [
    { label: "Publications", value: "18+", icon: FileText },
    { label: "Citations", value: "43+", icon: Award },
    { label: "h-index", value: "4", icon: ExternalLink }
  ];

  return (
    <section id="research" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Research & Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advancing AI, UAV, and geospatial analytics for ecological monitoring and conservation.
          </p>
        </div>

        {/* Research Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center bg-gradient-aerial border-border/50">
              <CardContent className="p-6">
                <metric.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Publications Grid */}
        <div className="grid gap-6">
          {publications.map((pub, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-organic transition-organic border-l-4 border-l-forest-light ripple-effect"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-primary group-hover:text-forest-deep transition-organic">
                      {pub.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="font-medium">{pub.journal}</span>
                      <span>•</span>
                      <span>{pub.year}</span>
                      <span className="px-2 py-1 bg-river-light/20 text-river-blue rounded-full text-xs">
                        {pub.type}
                      </span>
                      <span className="px-2 py-1 bg-forest-light/20 text-forest-deep rounded-full text-xs">
                        {pub.impact}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="shrink-0 border-forest-light text-forest-deep hover:bg-forest-light/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    DOI
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">{pub.description}</p>
                <div className="mt-3 text-xs text-muted-foreground">DOI: {pub.doi}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
