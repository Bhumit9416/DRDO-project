"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Zap, Globe, Settings, Shield, Cpu, MapPin, AlertTriangle, TrendingUp, Database } from "lucide-react"

export default function DEWDashboard() {
  const [selectedWeapon, setSelectedWeapon] = useState("laser")

  const dewTypes = [
    {
      id: "laser",
      name: "High Energy Laser (HEL)",
      power: "10kW - 300kW+",
      range: "1-20 km",
      effectiveness: 95,
      description: "Solid-state, chemical, or fiber lasers for precision targeting",
      applications: ["Anti-drone", "Missile defense", "Counter-electronics"],
      algorithms: ["Beam steering", "Atmospheric compensation", "Target tracking"],
    },
    {
      id: "microwave",
      name: "High Power Microwave (HPM)",
      power: "100MW - 1GW",
      range: "0.5-10 km",
      effectiveness: 85,
      description: "Electromagnetic pulse weapons for electronic disruption",
      applications: ["Electronic warfare", "Communication jamming", "Vehicle stopping"],
      algorithms: ["Frequency hopping", "Pulse shaping", "Interference patterns"],
    },
    {
      id: "particle",
      name: "Particle Beam Weapons",
      power: "1-100 GeV",
      range: "Space-based",
      effectiveness: 70,
      description: "Accelerated charged particles for kinetic damage",
      applications: ["Satellite defense", "Ballistic missile intercept", "Space warfare"],
      algorithms: ["Particle acceleration", "Magnetic focusing", "Trajectory calculation"],
    },
    {
      id: "plasma",
      name: "Plasma Weapons",
      power: "Variable",
      range: "0.1-5 km",
      effectiveness: 60,
      description: "Ionized gas projectiles for multiple effects",
      applications: ["Crowd control", "Electronic disruption", "Atmospheric manipulation"],
      algorithms: ["Plasma confinement", "Magnetic bottle", "Ion acceleration"],
    },
  ]

  const countryCapabilities = [
    {
      country: "India",
      systems: ["KALI (Kilo Ampere Linear Injector)", "DURGA-II", "LASTEC Systems"],
      development: 75,
      operational: 45,
      research: ["DRDO", "BARC", "LASTEC", "IIT Network"],
      focus: "Anti-satellite, missile defense, electronic warfare",
    },
    {
      country: "United States",
      systems: ["THEL", "ABL", "LAWS", "HELIOS", "ODIN"],
      development: 95,
      operational: 80,
      research: ["Lockheed Martin", "Raytheon", "Boeing", "Northrop Grumman"],
      focus: "Full spectrum DEW capabilities",
    },
    {
      country: "China",
      systems: ["Silent Hunter", "Low Altitude Guard", "PLA Strategic Support Force"],
      development: 85,
      operational: 60,
      research: ["CASIC", "CETC", "NORINCO"],
      focus: "Anti-access/area denial, space warfare",
    },
    {
      country: "Russia",
      systems: ["Peresvet", "Zadira", "Sokol-Eshelon"],
      development: 80,
      operational: 55,
      research: ["Almaz-Antey", "Rostec", "Russian Academy of Sciences"],
      focus: "Strategic defense, electronic warfare",
    },
    {
      country: "Israel",
      systems: ["Iron Beam", "Nautilus", "SkyGuard"],
      development: 90,
      operational: 70,
      research: ["Rafael", "Elbit Systems", "IAI"],
      focus: "Tactical defense, precision strikes",
    },
  ]

  const strategicAnalysis = {
    threats: [
      "Neighboring country A developing anti-satellite capabilities",
      "Neighboring country B investing heavily in HPM systems",
      "Cross-border electronic warfare capabilities",
      "Space-based DEW deployment concerns",
      "Asymmetric warfare applications",
    ],
    opportunities: [
      "Indigenous technology development",
      "Strategic partnerships with allied nations",
      "Dual-use civilian applications",
      "Export potential for defensive systems",
      "Technology transfer agreements",
    ],
    challenges: [
      "Power generation and storage",
      "Atmospheric interference",
      "Cost-effectiveness vs conventional weapons",
      "International regulations and treaties",
      "Technological complexity",
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Directed Energy Weapons
          </h1>
          <p className="text-xl text-slate-300">Comprehensive Literature Survey & Strategic Analysis</p>
          <div className="flex justify-center space-x-4">
            <Badge className="text-blue-400 border-blue-400" variant="outline">
              DRDO ISSA Project
            </Badge>
            <Badge className="text-green-400 border-green-400" variant="outline">
              Classification: Research
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-slate-800/50">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="types" className="data-[state=active]:bg-blue-600">
              Types & Tech
            </TabsTrigger>
            <TabsTrigger value="global" className="data-[state=active]:bg-blue-600">
              Global Status
            </TabsTrigger>
            <TabsTrigger value="methods" className="data-[state=active]:bg-blue-600">
              Methods
            </TabsTrigger>
            <TabsTrigger value="strategic" className="data-[state=active]:bg-blue-600">
              Strategic
            </TabsTrigger>
            <TabsTrigger value="research" className="data-[state=active]:bg-blue-600">
              Research
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Active DEW Programs</CardTitle>
                  <Zap className="h-4 w-4 text-yellow-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">150+</div>
                  <p className="text-xs text-slate-400">Worldwide active projects</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Investment (2024)</CardTitle>
                  <TrendingUp className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">$12.8B</div>
                  <p className="text-xs text-slate-400">Global R&D spending</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Operational Systems</CardTitle>
                  <Shield className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">45</div>
                  <p className="text-xs text-slate-400">Deployed worldwide</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">India's Position</CardTitle>
                  <MapPin className="h-4 w-4 text-orange-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">#4</div>
                  <p className="text-xs text-slate-400">Global ranking</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  DEW Technology Maturity Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {dewTypes.map((weapon) => (
                  <div key={weapon.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-300">{weapon.name}</span>
                      <span className="text-sm text-slate-400">{weapon.effectiveness}% Maturity</span>
                    </div>
                    <Progress value={weapon.effectiveness} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Types & Technology Tab */}
          <TabsContent value="types" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">DEW Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {dewTypes.map((weapon) => (
                    <button
                      key={weapon.id}
                      onClick={() => setSelectedWeapon(weapon.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedWeapon === weapon.id
                          ? "bg-blue-600 text-white"
                          : "bg-slate-700/50 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      <div className="font-medium">{weapon.name}</div>
                      <div className="text-sm opacity-75">Range: {weapon.range}</div>
                    </button>
                  ))}
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    {dewTypes.find((w) => w.id === selectedWeapon)?.name} Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {(() => {
                    const weapon = dewTypes.find((w) => w.id === selectedWeapon)
                    if (!weapon) return null

                    return (
                      <>
                        <p className="text-slate-300">{weapon.description}</p>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-white mb-2">Specifications</h4>
                            <div className="space-y-1 text-sm text-slate-300">
                              <div>Power: {weapon.power}</div>
                              <div>Range: {weapon.range}</div>
                              <div>Effectiveness: {weapon.effectiveness}%</div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-white mb-2">Applications</h4>
                            <div className="space-y-1">
                              {weapon.applications.map((app, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs mr-1 mb-1">
                                  {app}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-white mb-2">Key Algorithms</h4>
                          <div className="space-y-1">
                            {weapon.algorithms.map((algo, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-xs mr-1 mb-1 bg-purple-600/20 text-purple-300"
                              >
                                {algo}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </>
                    )
                  })()}
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Technical Specifications Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-600">
                        <th className="text-left p-2 text-slate-300">System</th>
                        <th className="text-left p-2 text-slate-300">Power Output</th>
                        <th className="text-left p-2 text-slate-300">Effective Range</th>
                        <th className="text-left p-2 text-slate-300">Target Types</th>
                        <th className="text-left p-2 text-slate-300">Deployment</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-slate-700">
                        <td className="p-2 font-medium">HEL Systems</td>
                        <td className="p-2">10kW - 300kW</td>
                        <td className="p-2">1-20 km</td>
                        <td className="p-2">UAVs, Missiles, Sensors</td>
                        <td className="p-2">Ground, Naval, Airborne</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="p-2 font-medium">HPM Systems</td>
                        <td className="p-2">100MW - 1GW</td>
                        <td className="p-2">0.5-10 km</td>
                        <td className="p-2">Electronics, Communications</td>
                        <td className="p-2">Ground, Vehicle-mounted</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="p-2 font-medium">Particle Beam</td>
                        <td className="p-2">1-100 GeV</td>
                        <td className="p-2">Space-based</td>
                        <td className="p-2">Satellites, ICBMs</td>
                        <td className="p-2">Space platforms</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Global Status Tab */}
          <TabsContent value="global" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {countryCapabilities.map((country, idx) => (
                <Card key={idx} className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      {country.country}
                    </CardTitle>
                    <CardDescription className="text-slate-400">Focus: {country.focus}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Development</span>
                        <span className="text-slate-400">{country.development}%</span>
                      </div>
                      <Progress value={country.development} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Operational</span>
                        <span className="text-slate-400">{country.operational}%</span>
                      </div>
                      <Progress value={country.operational} className="h-2" />
                    </div>

                    <div>
                      <h4 className="font-medium text-white mb-2">Key Systems</h4>
                      <div className="space-y-1">
                        {country.systems.map((system, sIdx) => (
                          <Badge
                            key={sIdx}
                            variant="outline"
                            className="text-xs mr-1 mb-1 text-blue-300 border-blue-400"
                          >
                            {system}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-white mb-2">Research Organizations</h4>
                      <div className="text-sm text-slate-300 space-y-1">
                        {country.research.map((org, oIdx) => (
                          <div key={oIdx}>• {org}</div>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Cpu className="h-5 w-5" />
                    Core Algorithms & Methods
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-white mb-2">Beam Control Algorithms</h4>
                      <ul className="text-sm text-slate-300 space-y-1 ml-4">
                        <li>• Adaptive Optics Control</li>
                        <li>• Phase Conjugation</li>
                        <li>• Wavefront Sensing</li>
                        <li>• Atmospheric Turbulence Compensation</li>
                        <li>• Multi-aperture Coherent Combining</li>
                      </ul>
                    </div>

                    <Separator className="bg-slate-600" />

                    <div>
                      <h4 className="font-medium text-white mb-2">Target Acquisition</h4>
                      <ul className="text-sm text-slate-300 space-y-1 ml-4">
                        <li>• Kalman Filtering</li>
                        <li>• Extended Kalman Filter (EKF)</li>
                        <li>• Particle Filter Tracking</li>
                        <li>• Multi-target Tracking (MTT)</li>
                        <li>• SLAM-based Navigation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Power & Thermal Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-white mb-2">Power Systems</h4>
                      <ul className="text-sm text-slate-300 space-y-1 ml-4">
                        <li>• Pulsed Power Networks</li>
                        <li>• Capacitor Bank Management</li>
                        <li>• Flywheel Energy Storage</li>
                        <li>• Superconducting Magnetic Energy Storage</li>
                        <li>• Battery Management Systems</li>
                      </ul>
                    </div>

                    <Separator className="bg-slate-600" />

                    <div>
                      <h4 className="font-medium text-white mb-2">Thermal Control</h4>
                      <ul className="text-sm text-slate-300 space-y-1 ml-4">
                        <li>• Active Cooling Systems</li>
                        <li>• Heat Exchanger Design</li>
                        <li>• Thermal Interface Materials</li>
                        <li>• Cryogenic Cooling</li>
                        <li>• Phase Change Materials</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Mathematical Models & Equations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-white mb-3">Laser Propagation</h4>
                    <div className="bg-slate-900/50 p-4 rounded-lg text-sm text-slate-300 font-mono">
                      <div>Beam Quality: M² = (θ × w₀) / λ</div>
                      <div className="mt-2">Rayleigh Range: z₀ = πw₀²/λ</div>
                      <div className="mt-2">Power Density: I = P/(πw²)</div>
                      <div className="mt-2">Atmospheric Loss: τ = exp(-αR)</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-white mb-3">HPM Propagation</h4>
                    <div className="bg-slate-900/50 p-4 rounded-lg text-sm text-slate-300 font-mono">
                      <div>Field Strength: E = √(30P/r²)</div>
                      <div className="mt-2">Antenna Gain: G = 4πA/λ²</div>
                      <div className="mt-2">EIRP: P_eirp = P_t × G</div>
                      <div className="mt-2">Path Loss: L = (4πr/λ)²</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Strategic Tab */}
          <TabsContent value="strategic" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-red-900/20 border-red-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                    Threat Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-48">
                    <div className="space-y-2">
                      {strategicAnalysis.threats.map((threat, idx) => (
                        <div key={idx} className="p-2 bg-red-900/30 rounded text-sm text-red-100">
                          {threat}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="bg-green-900/20 border-green-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                    Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-48">
                    <div className="space-y-2">
                      {strategicAnalysis.opportunities.map((opp, idx) => (
                        <div key={idx} className="p-2 bg-green-900/30 rounded text-sm text-green-100">
                          {opp}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="bg-yellow-900/20 border-yellow-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Settings className="h-5 w-5 text-yellow-400" />
                    Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-48">
                    <div className="space-y-2">
                      {strategicAnalysis.challenges.map((challenge, idx) => (
                        <div key={idx} className="p-2 bg-yellow-900/30 rounded text-sm text-yellow-100">
                          {challenge}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Regional Security Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-white mb-3">Neighboring Country A (Eastern Border)</h4>
                    <div className="space-y-2 text-sm text-slate-300">
                      <div>• Advanced HPM development program</div>
                      <div>• Anti-satellite laser systems operational</div>
                      <div>• Estimated 15+ DEW research facilities</div>
                      <div>• Focus on space-based platforms</div>
                      <div>• Electronic warfare integration</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-white mb-3">Neighboring Country B (Western Border)</h4>
                    <div className="space-y-2 text-sm text-slate-300">
                      <div>• Tactical laser systems development</div>
                      <div>• Counter-drone DEW capabilities</div>
                      <div>• Limited but growing investment</div>
                      <div>• Focus on defensive applications</div>
                      <div>• Technology acquisition efforts</div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-slate-600" />

                <div>
                  <h4 className="font-medium text-white mb-3">Strategic Implications for India</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                    <div>
                      <strong className="text-white">Defensive Priorities:</strong>
                      <ul className="mt-1 space-y-1 ml-4">
                        <li>• Border surveillance systems</li>
                        <li>• Anti-drone networks</li>
                        <li>• Satellite protection</li>
                        <li>• Electronic warfare countermeasures</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-white">Offensive Capabilities:</strong>
                      <ul className="mt-1 space-y-1 ml-4">
                        <li>• Precision strike systems</li>
                        <li>• Communication disruption</li>
                        <li>• Area denial weapons</li>
                        <li>• Counter-electronics warfare</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Research Tab */}
          <TabsContent value="research" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">India's DEW Research Ecosystem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-white">DRDO Labs</h4>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div>• LASTEC (Laser Science & Technology)</div>
                      <div>• LRDE (Electronics & Radar)</div>
                      <div>• SSPL (Solid State Physics)</div>
                      <div>• TBRL (Terminal Ballistics)</div>
                      <div>• ASL (Armament Systems)</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-white">Academic Institutions</h4>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div>• IIT Delhi (Photonics)</div>
                      <div>• IIT Kanpur (Laser Technology)</div>
                      <div>• IISc Bangalore (Optics)</div>
                      <div>• BARC (Atomic Research)</div>
                      <div>• TIFR (Fundamental Research)</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-white">Industry Partners</h4>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div>• BEL (Electronics)</div>
                      <div>• HAL (Aerospace)</div>
                      <div>• L&T Defence</div>
                      <div>• Tata Advanced Systems</div>
                      <div>• Bharat Dynamics</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Current Research Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-900/30 rounded-lg">
                      <h5 className="font-medium text-white">KALI (Kilo Ampere Linear Injector)</h5>
                      <p className="text-sm text-slate-300 mt-1">
                        High-power electron beam facility for EMP generation and testing
                      </p>
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs text-blue-300 border-blue-400">
                          Operational
                        </Badge>
                      </div>
                    </div>

                    <div className="p-3 bg-green-900/30 rounded-lg">
                      <h5 className="font-medium text-white">DURGA-II</h5>
                      <p className="text-sm text-slate-300 mt-1">Advanced pulsed power system for DEW applications</p>
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs text-green-300 border-green-400">
                          Development
                        </Badge>
                      </div>
                    </div>

                    <div className="p-3 bg-purple-900/30 rounded-lg">
                      <h5 className="font-medium text-white">Tactical HEL System</h5>
                      <p className="text-sm text-slate-300 mt-1">Mobile laser weapon for counter-drone operations</p>
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs text-purple-300 border-purple-400">
                          Testing
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Future Roadmap</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <div>
                        <div className="font-medium text-white">2024-2026</div>
                        <div className="text-sm text-slate-300">Tactical DEW deployment</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div>
                        <div className="font-medium text-white">2026-2028</div>
                        <div className="text-sm text-slate-300">Strategic DEW systems</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <div>
                        <div className="font-medium text-white">2028-2030</div>
                        <div className="text-sm text-slate-300">Space-based platforms</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <div>
                        <div className="font-medium text-white">2030+</div>
                        <div className="text-sm text-slate-300">Next-gen DEW technologies</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Research Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-white mb-3">Priority Areas</h4>
                    <ul className="text-sm text-slate-300 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-400">•</span>
                        <span>High-power fiber laser development</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-400">•</span>
                        <span>Adaptive optics for atmospheric compensation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-400">•</span>
                        <span>Compact power generation systems</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-400">•</span>
                        <span>AI-based target acquisition algorithms</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-400">•</span>
                        <span>Multi-spectral sensor integration</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-white mb-3">Collaboration Opportunities</h4>
                    <ul className="text-sm text-slate-300 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400">•</span>
                        <span>International research partnerships</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400">•</span>
                        <span>Industry-academia joint programs</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400">•</span>
                        <span>Technology transfer initiatives</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400">•</span>
                        <span>Dual-use technology development</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400">•</span>
                        <span>Startup ecosystem engagement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
