"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import {
  Shield,
  Zap,
  Target,
  Globe,
  BookOpen,
  Download,
  FileText,
  AlertTriangle,
  TrendingUp,
  Users,
  MapPin,
  Cpu,
  Settings,
} from "lucide-react"

export default function DEWDashboard() {
  const [selectedSystem, setSelectedSystem] = useState(null)
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null)
  const [showReport, setShowReport] = useState(false)

  // Enhanced data structures
  const dewTypes = [
    {
      name: "High Energy Laser (HEL)",
      description: "Concentrated laser beams for precision targeting",
      power: "10kW - 1MW+",
      range: "1-20 km",
      applications: ["Anti-drone", "Missile defense", "Naval systems"],
      advantages: ["Precision", "Speed of light", "Low cost per shot"],
      limitations: ["Weather dependent", "Power requirements", "Atmospheric absorption"],
    },
    {
      name: "High Power Microwave (HPM)",
      description: "Electromagnetic pulses to disable electronics",
      power: "1-100 MW",
      range: "0.1-10 km",
      applications: ["Electronic warfare", "Crowd control", "Infrastructure protection"],
      advantages: ["Area effect", "Non-lethal option", "Electronic disruption"],
      limitations: ["Limited range", "Shielding countermeasures", "Collateral damage"],
    },
    {
      name: "Particle Beam Weapons",
      description: "Accelerated charged particles for target destruction",
      power: "1-10 MW",
      range: "1-100 km (space)",
      applications: ["Space-based defense", "Ballistic missile defense"],
      advantages: ["No atmospheric limitations in space", "High penetration"],
      limitations: ["Atmospheric scattering", "Complex technology", "Power requirements"],
    },
  ]

  const globalStatus = [
    {
      country: "India",
      systems: [
        {
          name: "KALI",
          type: "HPM",
          status: "Operational",
          details: {
            power: "1 GW",
            range: "3-5 km",
            frequency: "1-40 GHz",
            applications: ["Electronic warfare", "Missile testing"],
            developer: "DRDO",
            location: "Chitradurga, Karnataka",
            yearDeployed: "2012",
            cost: "$50 million",
            specifications: {
              "Peak Power": "1 GW",
              "Pulse Duration": "0.5-5 μs",
              "Repetition Rate": "1-1000 Hz",
              "Beam Divergence": "< 1 mrad",
              "Operating Temperature": "-40°C to +60°C",
              Weight: "2000 kg",
              Dimensions: "3m x 2m x 1.5m",
            },
          },
        },
        {
          name: "DURGA-II",
          type: "HEL",
          status: "Development",
          details: {
            power: "10 kW",
            range: "2 km",
            wavelength: "1.06 μm",
            applications: ["Anti-drone", "Point defense"],
            developer: "DRDO",
            location: "Hyderabad",
            yearDeployed: "2025 (Expected)",
            cost: "$30 million",
            specifications: {
              "Continuous Power": "10 kW",
              Wavelength: "1.06 μm",
              "Beam Quality": "M² < 1.5",
              "Tracking Accuracy": "< 10 μrad",
              "Engagement Time": "< 5 seconds",
              "Power Consumption": "50 kW",
              "Cooling System": "Liquid cooled",
            },
          },
        },
      ],
      capability: 65,
      investment: "$500M",
      projects: 8,
    },
    {
      country: "United States",
      systems: [
        {
          name: "LAWS",
          type: "HEL",
          status: "Deployed",
          details: {
            power: "30 kW",
            range: "1.6 km",
            platform: "Naval",
            applications: ["Anti-drone", "Small boat defense"],
            developer: "Northrop Grumman",
            location: "USS Ponce",
            yearDeployed: "2014",
            cost: "$40 million",
            specifications: {
              "Laser Power": "30 kW",
              Wavelength: "1.06 μm",
              "Beam Director": "6-axis gimbal",
              "Target Acquisition": "EO/IR sensors",
              "Power Source": "Ship's electrical grid",
              "Operating Range": "Sea State 3",
              MTBF: "> 1000 hours",
            },
          },
        },
        {
          name: "HELIOS",
          type: "HEL",
          status: "Testing",
          details: {
            power: "60 kW",
            range: "10+ km",
            platform: "Naval",
            applications: ["Missile defense", "Anti-aircraft"],
            developer: "Lockheed Martin",
            location: "USS Preble",
            yearDeployed: "2021",
            cost: "$150 million",
            specifications: {
              "Laser Power": "60 kW",
              Scalability: "Up to 150 kW",
              Integration: "Aegis Combat System",
              Sensors: "Long-range surveillance",
              Cooling: "Seawater cooling",
              Availability: "> 95%",
              Maintenance: "Minimal crew required",
            },
          },
        },
      ],
      capability: 95,
      investment: "$5B",
      projects: 25,
    },
    {
      country: "Israel",
      systems: [
        {
          name: "Iron Beam",
          type: "HEL",
          status: "Testing",
          details: {
            power: "100 kW",
            range: "7 km",
            applications: ["Missile defense", "Mortar interception"],
            developer: "Rafael Advanced Defense",
            location: "Multiple test sites",
            yearDeployed: "2024 (Expected)",
            cost: "$100 million",
            specifications: {
              "Laser Power": "100 kW",
              "Intercept Range": "7 km",
              "Target Types": "Rockets, mortars, drones",
              "Reaction Time": "< 3 seconds",
              "Cost per Shot": "$2",
              Availability: "24/7 operation",
              Integration: "Iron Dome system",
            },
          },
        },
      ],
      capability: 85,
      investment: "$1B",
      projects: 12,
    },
    {
      country: "China",
      systems: [
        {
          name: "Silent Hunter",
          type: "HEL",
          status: "Development",
          details: {
            power: "30 kW",
            range: "4 km",
            applications: ["Anti-drone", "Light vehicle"],
            developer: "China Academy of Sciences",
            location: "Classified",
            yearDeployed: "2023",
            cost: "Classified",
            specifications: {
              "Laser Power": "30 kW",
              Platform: "Vehicle-mounted",
              "Target Acquisition": "Radar + EO",
              "Engagement Envelope": "360°",
              "Power Source": "Diesel generator",
              "Deployment Time": "< 3 minutes",
              Crew: "2 operators",
            },
          },
        },
      ],
      capability: 75,
      investment: "$2B",
      projects: 15,
    },
    {
      country: "Russia",
      systems: [
        {
          name: "Peresvet",
          type: "HEL",
          status: "Operational",
          details: {
            power: "Classified",
            range: "Classified",
            applications: ["Anti-satellite", "Missile defense"],
            developer: "Rosatom",
            location: "Multiple sites",
            yearDeployed: "2019",
            cost: "Classified",
            specifications: {
              Classification: "Strategic weapon",
              Platform: "Mobile",
              "Power Source": "Nuclear",
              "Target Types": "Satellites, missiles",
              "Operational Status": "Active duty",
              Deployment: "Multiple units",
              Mobility: "Road-mobile",
            },
          },
        },
      ],
      capability: 70,
      investment: "$1.5B",
      projects: 10,
    },
  ]

  const algorithms = {
    "Adaptive Optics": {
      description: "Compensates for atmospheric disturbances in laser beam propagation",
      complexity: "High",
      applications: ["HEL systems", "Astronomical telescopes", "Free-space optical communication"],
      steps: [
        "Wavefront sensing using Shack-Hartmann sensor to detect atmospheric distortions",
        "Real-time analysis of wavefront aberrations using Zernike polynomials",
        "Control algorithm calculates required deformable mirror corrections",
        "Actuator commands sent to deformable mirror elements (typically 100-1000 actuators)",
        "Closed-loop feedback system operates at 1-10 kHz update rates",
        "Continuous optimization maintains beam quality and focus accuracy",
      ],
      implementation: "Requires high-speed processors, precision actuators, and advanced sensors",
    },
    "Kalman Filtering": {
      description: "Optimal estimation algorithm for target tracking and prediction",
      complexity: "Medium",
      applications: ["Target tracking", "Navigation", "Sensor fusion"],
      steps: [
        "Initialize state vector (position, velocity) and covariance matrices",
        "Prediction step: Estimate next state using motion model and process noise",
        "Measurement update: Incorporate new sensor data with measurement noise",
        "Calculate Kalman gain to optimally weight prediction vs measurement",
        "Update state estimate and error covariance based on new information",
        "Iterate process for continuous tracking with uncertainty quantification",
      ],
      implementation: "Standard linear algebra operations, suitable for real-time implementation",
    },
    "Beam Steering": {
      description: "Precise control of laser beam direction for target engagement",
      complexity: "High",
      applications: ["Laser weapons", "LIDAR", "Optical communications"],
      steps: [
        "Target acquisition and coordinate transformation to beam director frame",
        "Calculate required gimbal angles for coarse pointing (±0.1 mrad accuracy)",
        "Fine steering using fast steering mirror for precision pointing (±10 μrad)",
        "Compensate for platform motion, wind, and thermal effects",
        "Implement lead-ahead algorithms for moving target engagement",
        "Continuous tracking with disturbance rejection and stability control",
      ],
      implementation: "Multi-axis control systems with position/velocity feedback loops",
    },
    "Power Management": {
      description: "Optimal distribution and control of electrical power in DEW systems",
      complexity: "Medium",
      applications: ["Laser systems", "HPM weapons", "Radar systems"],
      steps: [
        "Monitor power generation capacity and current system demands",
        "Prioritize critical subsystems (cooling, beam generation, sensors)",
        "Implement load shedding algorithms for power-limited scenarios",
        "Optimize pulse timing and duty cycles for maximum effectiveness",
        "Thermal management integration to prevent overheating damage",
        "Fault detection and automatic reconfiguration for system protection",
      ],
      implementation: "Distributed control architecture with real-time monitoring",
    },
    "Target Classification": {
      description: "Automated identification and classification of potential targets",
      complexity: "High",
      applications: ["Air defense", "Autonomous weapons", "Surveillance"],
      steps: [
        "Multi-sensor data fusion (radar, EO/IR, acoustic signatures)",
        "Feature extraction using signal processing and image analysis",
        "Machine learning classification using trained neural networks",
        "Threat assessment based on target characteristics and behavior",
        "Rules of engagement verification and human oversight integration",
        "Engagement decision with confidence metrics and uncertainty bounds",
      ],
      implementation: "AI/ML frameworks with extensive training datasets required",
    },
    "Atmospheric Modeling": {
      description: "Prediction of atmospheric effects on directed energy propagation",
      complexity: "High",
      applications: ["Laser weapons", "RF systems", "Weather prediction"],
      steps: [
        "Collect meteorological data (temperature, humidity, pressure, wind)",
        "Model atmospheric layers and refractive index variations",
        "Calculate beam propagation through turbulent atmosphere",
        "Predict scattering, absorption, and thermal blooming effects",
        "Estimate beam quality degradation and power loss",
        "Provide real-time corrections for adaptive optics systems",
      ],
      implementation: "Computational fluid dynamics and electromagnetic propagation codes",
    },
  }

  const strategicAnalysis = {
    threats: [
      {
        region: "Northern Border",
        level: "High",
        systems: ["Mobile HEL platforms", "Electronic warfare systems"],
        countermeasures: ["Adaptive optics", "Frequency agility", "Hardened electronics"],
      },
      {
        region: "Western Border",
        level: "Medium",
        systems: ["Anti-drone systems", "Point defense lasers"],
        countermeasures: ["Multi-spectral sensors", "Rapid deployment", "Network integration"],
      },
      {
        region: "Eastern Border",
        level: "Medium-High",
        systems: ["Naval laser systems", "Coastal defense"],
        countermeasures: ["Maritime platforms", "All-weather capability", "Extended range"],
      },
    ],
    recommendations: [
      "Accelerate DURGA-II development and deployment",
      "Establish DEW testing and evaluation facilities",
      "Develop indigenous power generation and cooling systems",
      "Create joint service doctrine for DEW employment",
      "Invest in counter-DEW technologies and tactics",
    ],
  }

  const researchData = {
    institutions: [
      { name: "DRDO", projects: 8, budget: "$300M", focus: "Military applications" },
      { name: "IIT Delhi", projects: 3, budget: "$50M", focus: "Laser physics" },
      { name: "IISc Bangalore", projects: 4, budget: "$75M", focus: "Optics & photonics" },
      { name: "BARC", projects: 2, budget: "$100M", focus: "High power systems" },
    ],
    timeline: [
      { year: 2020, milestone: "KALI-5000 operational" },
      { year: 2022, milestone: "DURGA-II prototype testing" },
      { year: 2024, milestone: "Naval laser system trials" },
      { year: 2026, milestone: "Operational deployment target" },
    ],
  }

  // Chart data
  const capabilityData = globalStatus.map((country) => ({
    country: country.country,
    capability: country.capability,
    investment: Number.parseInt(country.investment.replace(/[$BM]/g, "")),
  }))

  const threatLevelData = strategicAnalysis.threats.map((threat) => ({
    region: threat.region,
    level: threat.level === "High" ? 90 : threat.level === "Medium-High" ? 70 : 50,
  }))

  const dewTypeData = dewTypes.map((type, index) => ({
    name: type.name,
    applications: type.applications.length,
    fill: ["#8884d8", "#82ca9d", "#ffc658"][index],
  }))

  const timelineData = researchData.timeline.map((item) => ({
    year: item.year,
    progress: (item.year - 2020) * 25,
  }))

  const radarData = [
    { subject: "Power", A: 80, B: 95, fullMark: 100 },
    { subject: "Range", A: 70, B: 85, fullMark: 100 },
    { subject: "Accuracy", A: 85, B: 90, fullMark: 100 },
    { subject: "Mobility", A: 60, B: 75, fullMark: 100 },
    { subject: "Cost", A: 90, B: 60, fullMark: 100 },
    { subject: "Reliability", A: 75, B: 85, fullMark: 100 },
  ]

  const downloadData = () => {
    const data = {
      timestamp: new Date().toISOString(),
      version: "1.0",
      dewTypes,
      globalStatus,
      algorithms,
      strategicAnalysis,
      researchData,
      metadata: {
        generatedBy: "DRDO DEW Dashboard",
        project: "Directed Energy Weapons Analysis",
        classification: "For Research Purposes Only",
      },
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `dew-analysis-${new Date().toISOString().split("T")[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const generateReport = () => {
    setShowReport(true)
  }

  const ReportContent = () => (
    <div className="space-y-6 max-h-96 overflow-y-auto">
      <div>
        <h3 className="text-lg font-semibold mb-2">Executive Summary</h3>
        <p className="text-sm text-gray-600">
          Directed Energy Weapons represent a paradigm shift in modern warfare, offering precision, speed-of-light
          engagement, and cost-effective solutions for various defense scenarios. India's current capabilities, led by
          DRDO's KALI system, position the nation competitively in this emerging domain.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Technology Assessment</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• High Energy Lasers: Most mature technology with operational systems globally</li>
          <li>• High Power Microwaves: Effective for electronic warfare and area denial</li>
          <li>• Particle Beams: Emerging technology with space-based applications</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Strategic Analysis</h3>
        <p className="text-sm text-gray-600">
          Regional threat assessment indicates varying levels of DEW deployment across borders. Northern regions show
          highest threat levels requiring immediate countermeasure development.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Capability Gaps</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Power generation and thermal management systems</li>
          <li>• All-weather operational capability</li>
          <li>• Mobile platform integration</li>
          <li>• Counter-DEW technologies</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Recommendations</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Accelerate DURGA-II development timeline</li>
          <li>• Establish dedicated DEW testing facilities</li>
          <li>• Develop indigenous supply chain for critical components</li>
          <li>• Create joint service operational doctrine</li>
          <li>• Invest in defensive countermeasures research</li>
        </ul>
      </div>
    </div>
  )

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Directed Energy Weapons Dashboard
              </h1>
              <p className="text-gray-300 mt-2">DRDO ISSA Internship Project - Comprehensive Analysis & Research</p>
            </div>
            <div className="flex gap-4">
              <Button onClick={generateReport} className="bg-blue-600 hover:bg-blue-700">
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
              <Button onClick={downloadData} className="bg-green-600 hover:bg-green-700">
                <Download className="w-4 h-4 mr-2" />
                Download Data
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6 bg-slate-800">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="types">Types & Tech</TabsTrigger>
              <TabsTrigger value="global">Global Status</TabsTrigger>
              <TabsTrigger value="methods">Methods</TabsTrigger>
              <TabsTrigger value="strategic">Strategic Analysis</TabsTrigger>
              <TabsTrigger value="research">Research Ecosystem</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-300">Global Systems</CardTitle>
                    <Shield className="h-4 w-4 text-blue-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">47</div>
                    <p className="text-xs text-gray-400">Operational & Development</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-300">Total Investment</CardTitle>
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">$10B+</div>
                    <p className="text-xs text-gray-400">Global R&D Spending</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-300">India's Rank</CardTitle>
                    <Target className="h-4 w-4 text-yellow-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">#4</div>
                    <p className="text-xs text-gray-400">Global Capability</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-300">Active Projects</CardTitle>
                    <BookOpen className="h-4 w-4 text-purple-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">70+</div>
                    <p className="text-xs text-gray-400">Worldwide</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Global Capability Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        capability: { label: "Capability", color: "#8884d8" },
                        investment: { label: "Investment", color: "#82ca9d" },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={capabilityData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="country" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="capability" fill="#8884d8" />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">DEW Technology Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        applications: { label: "Applications", color: "#8884d8" },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={dewTypeData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="applications"
                          >
                            {dewTypeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Pie>
                          <ChartTooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>

              <Alert className="bg-yellow-900 border-yellow-600">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-yellow-100">
                  <strong>Strategic Note:</strong> Directed Energy Weapons are rapidly evolving from experimental to
                  operational status. India must accelerate development to maintain strategic parity in this critical
                  domain.
                </AlertDescription>
              </Alert>
            </TabsContent>

            {/* Types & Tech Tab */}
            <TabsContent value="types" className="space-y-6">
              <div className="grid gap-6">
                {dewTypes.map((type, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        {type.name}
                      </CardTitle>
                      <CardDescription className="text-gray-300">{type.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-2">Specifications</h4>
                          <p className="text-sm text-gray-300">Power: {type.power}</p>
                          <p className="text-sm text-gray-300">Range: {type.range}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-400 mb-2">Advantages</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            {type.advantages.map((adv, i) => (
                              <li key={i}>• {adv}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-400 mb-2">Limitations</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            {type.limitations.map((lim, i) => (
                              <li key={i}>• {lim}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-400 mb-2">Applications</h4>
                        <div className="flex flex-wrap gap-2">
                          {type.applications.map((app, i) => (
                            <Badge key={i} variant="secondary" className="bg-purple-900 text-purple-100">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Technology Comparison Matrix</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      A: { label: "Current Tech", color: "#8884d8" },
                      B: { label: "Next Gen", color: "#82ca9d" },
                    }}
                    className="h-[400px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} />
                        <Radar name="Current Tech" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Radar name="Next Gen" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                        <ChartTooltip />
                      </RadarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Global Status Tab */}
            <TabsContent value="global" className="space-y-6">
              <div className="grid gap-6">
                {globalStatus.map((country, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <Globe className="w-5 h-5 text-blue-400" />
                          {country.country}
                        </span>
                        <Badge variant="outline" className="text-green-400 border-green-400">
                          {country.capability}% Capability
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-400">Investment</p>
                          <p className="text-lg font-semibold text-white">{country.investment}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Active Projects</p>
                          <p className="text-lg font-semibold text-white">{country.projects}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Capability Level</p>
                          <Progress value={country.capability} className="mt-2" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">Key Systems</h4>
                        <div className="flex flex-wrap gap-2">
                          {country.systems.map((system, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-blue-900 text-blue-100 cursor-pointer hover:bg-blue-800"
                              onClick={() => setSelectedSystem(system)}
                            >
                              {system.name} ({system.type})
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Methods Tab */}
            <TabsContent value="methods" className="space-y-6">
              <div className="grid gap-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Key Algorithms & Methods</CardTitle>
                    <CardDescription className="text-gray-300">
                      Critical algorithms powering modern directed energy weapon systems
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Object.entries(algorithms).map(([name, details]) => (
                        <Card key={name} className="bg-slate-700 border-slate-600">
                          <CardHeader>
                            <CardTitle className="text-sm text-white flex items-center justify-between">
                              <span
                                className="cursor-pointer text-blue-400 hover:text-blue-300"
                                onClick={() => setSelectedAlgorithm({ name, ...details })}
                              >
                                {name}
                              </span>
                              <Badge
                                variant={
                                  details.complexity === "High"
                                    ? "destructive"
                                    : details.complexity === "Medium"
                                      ? "default"
                                      : "secondary"
                                }
                              >
                                {details.complexity}
                              </Badge>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-xs text-gray-300 mb-3">{details.description}</p>
                            <div className="space-y-2">
                              <p className="text-xs font-semibold text-purple-400">Applications:</p>
                              <div className="flex flex-wrap gap-1">
                                {details.applications.map((app, i) => (
                                  <Badge key={i} variant="outline" className="text-xs">
                                    {app}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Mathematical Foundations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">Laser Beam Propagation</h4>
                        <div className="bg-slate-900 p-3 rounded text-sm font-mono text-gray-300">
                          <p>{"I(r,z) = I₀ × (w₀/w(z))² × exp(-2r²/w(z)²)"}</p>
                          <p className="text-xs mt-1 text-gray-400">Gaussian beam intensity distribution</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2">Atmospheric Attenuation</h4>
                        <div className="bg-slate-900 p-3 rounded text-sm font-mono text-gray-300">
                          <p>{"P(z) = P₀ × exp(-αz)"}</p>
                          <p className="text-xs mt-1 text-gray-400">Beer-Lambert law for power loss</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-400 mb-2">Thermal Blooming</h4>
                        <div className="bg-slate-900 p-3 rounded text-sm font-mono text-gray-300">
                          <p>{"N = (dn/dT) × α × I × L / (ρ × Cp × v)"}</p>
                          <p className="text-xs mt-1 text-gray-400">Distortion parameter</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-400 mb-2">Target Damage</h4>
                        <div className="bg-slate-900 p-3 rounded text-sm font-mono text-gray-300">
                          <p>{"H = ∫ I(t) dt"}</p>
                          <p className="text-xs mt-1 text-gray-400">Fluence for material damage</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Strategic Analysis Tab */}
            <TabsContent value="strategic" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Regional Threat Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        level: { label: "Threat Level", color: "#ff6b6b" },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={threatLevelData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="region" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="level" fill="#ff6b6b" />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Development Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        progress: { label: "Progress", color: "#4ecdc4" },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={timelineData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line type="monotone" dataKey="progress" stroke="#4ecdc4" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6">
                {strategicAnalysis.threats.map((threat, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-red-400" />
                          {threat.region}
                        </span>
                        <Badge variant={threat.level === "High" ? "destructive" : "default"}>
                          {threat.level} Threat
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-red-400 mb-2">Identified Systems</h4>
                        <div className="flex flex-wrap gap-2">
                          {threat.systems.map((system, i) => (
                            <Badge key={i} variant="outline" className="text-red-300 border-red-400">
                              {system}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">Recommended Countermeasures</h4>
                        <div className="flex flex-wrap gap-2">
                          {threat.countermeasures.map((measure, i) => (
                            <Badge key={i} variant="secondary" className="bg-blue-900 text-blue-100">
                              {measure}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Strategic Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {strategicAnalysis.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-300">{rec}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Ecosystem Tab */}
            <TabsContent value="research" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Research Institutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {researchData.institutions.map((inst, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-700 rounded">
                          <div>
                            <h4 className="font-semibold text-white">{inst.name}</h4>
                            <p className="text-sm text-gray-400">{inst.focus}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-green-400">{inst.budget}</p>
                            <p className="text-xs text-gray-400">{inst.projects} projects</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Development Milestones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {researchData.timeline.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold text-white">
                            {item.year}
                          </div>
                          <div className="flex-1">
                            <p className="text-white">{item.milestone}</p>
                            <Progress value={(item.year - 2020) * 25} className="mt-2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Key Performance Indicators</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-slate-700 rounded">
                      <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white">500+</p>
                      <p className="text-sm text-gray-400">Researchers</p>
                    </div>
                    <div className="text-center p-4 bg-slate-700 rounded">
                      <BookOpen className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white">150+</p>
                      <p className="text-sm text-gray-400">Publications</p>
                    </div>
                    <div className="text-center p-4 bg-slate-700 rounded">
                      <Settings className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white">25</p>
                      <p className="text-sm text-gray-400">Patents Filed</p>
                    </div>
                    <div className="text-center p-4 bg-slate-700 rounded">
                      <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white">8</p>
                      <p className="text-sm text-gray-400">Prototypes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* System Details Modal */}
      {selectedSystem && (
        <Dialog open={!!selectedSystem} onOpenChange={() => setSelectedSystem(null)}>
          <DialogContent className="max-w-4xl bg-slate-800 text-white">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                {selectedSystem.name} - Detailed Specifications
              </DialogTitle>
              <DialogDescription className="text-gray-300">
                Comprehensive technical details and operational parameters
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">System Overview</h3>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-gray-300">Type</TableCell>
                        <TableCell className="text-white">{selectedSystem.type}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-gray-300">Status</TableCell>
                        <TableCell>
                          <Badge variant={selectedSystem.status === "Operational" ? "default" : "secondary"}>
                            {selectedSystem.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-gray-300">Developer</TableCell>
                        <TableCell className="text-white">{selectedSystem.details.developer}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-gray-300">Year Deployed</TableCell>
                        <TableCell className="text-white">{selectedSystem.details.yearDeployed}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-gray-300">Estimated Cost</TableCell>
                        <TableCell className="text-white">{selectedSystem.details.cost}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-400">Technical Specifications</h3>
                  <Table>
                    <TableBody>
                      {Object.entries(selectedSystem.details.specifications).map(([key, value]) => (
                        <TableRow key={key}>
                          <TableCell className="font-medium text-gray-300">{key}</TableCell>
                          <TableCell className="text-white">{value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-purple-400">Applications & Capabilities</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSystem.details.applications.map((app, i) => (
                    <Badge key={i} variant="outline" className="text-purple-300 border-purple-400">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Algorithm Details Modal */}
      {selectedAlgorithm && (
        <Dialog open={!!selectedAlgorithm} onOpenChange={() => setSelectedAlgorithm(null)}>
          <DialogContent className="max-w-4xl bg-slate-800 text-white">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-400" />
                {selectedAlgorithm.name} - Algorithm Details
              </DialogTitle>
              <DialogDescription className="text-gray-300">
                Step-by-step implementation and technical requirements
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Description</h3>
                <p className="text-gray-300">{selectedAlgorithm.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-400">Implementation Steps</h3>
                  <div className="space-y-3">
                    {selectedAlgorithm.steps.map((step, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-xs font-bold text-white mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-sm text-gray-300">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-yellow-400">Technical Details</h3>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-gray-300">Complexity</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              selectedAlgorithm.complexity === "High"
                                ? "destructive"
                                : selectedAlgorithm.complexity === "Medium"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {selectedAlgorithm.complexity}
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-gray-300">Implementation</TableCell>
                        <TableCell className="text-white text-sm">{selectedAlgorithm.implementation}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="mt-4">
                    <h4 className="font-semibold text-purple-400 mb-2">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedAlgorithm.applications.map((app, i) => (
                        <Badge key={i} variant="outline" className="text-purple-300 border-purple-400">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Report Modal */}
      {showReport && (
        <Dialog open={showReport} onOpenChange={() => setShowReport(false)}>
          <DialogContent className="max-w-4xl bg-slate-800 text-white">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                Directed Energy Weapons - Comprehensive Analysis Report
              </DialogTitle>
              <DialogDescription className="text-gray-300">
                DRDO ISSA Internship Project - Strategic Assessment and Recommendations
              </DialogDescription>
            </DialogHeader>
            <ReportContent />
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
