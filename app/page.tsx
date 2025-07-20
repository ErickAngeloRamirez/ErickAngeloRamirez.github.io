"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { User, Code, Heart, Briefcase, Github, Linkedin, Mail, Award, Fish, University } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { AwardCard } from "@/components/award-card"
import { ExperienceCard } from "@/components/experience-card"
import { LeadershipCard } from "@/components/leadership-card"

export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState("about")
  const [isMobile, setIsMobile] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleScroll = () => {
      const sections = ["about", "awards", "cs-projects", "bio-projects", "fgs-projects", "experience"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const navigationItems = [
    { id: "about", label: "About Me", icon: User },
    { id: "awards", label: "Awards", icon: Award },
    { id: "cs-projects", label: "Computer Science", icon: Code },
    { id: "bio-projects", label: "Biology", icon: Fish },
    { id: "fgs-projects", label: "FGSS", icon: Heart },
    { id: "experience", label: "Experience", icon: Briefcase },
  ]

  const dateColors = ["pink", "red", "amber"] // Define the cyclical colors

  const csProjects = [
    {
      title: "FaceCard",
      description:
        "React Native app integrating skincare and makeup guidance through personalized chatbot, real-time environmental alerts, and user-generated content feed",
      tags: ["React Native", "LLM", "JavaScript", "UI Design", "Ollama"],
      type: "presentation" as const,
      link: "#",
      pdfUrl: "/facecard-paper.pdf", // Add PDF URL
      presentationUrl: "/facecard-demo.pdf", // Keep presentation URL
      period: "Apr 2025 - Jun 2025",
      achievements: "78% chatbot response usefulness, 26+ explore page interactions during live demo",
    },
    {
      title: "Reviving Endangered Script: OCR for Syriac",
      description:
        "Optical character recognition system for Classical Syriac using CNNs, CRNN-LSTM, and Transformer models for character and word-level recognition",
      tags: ["TensorFlow", "CNN", "LSTM", "Transformers", "Computer Vision"],
      type: "pdf" as const,
      link: "#",
      pdfUrl: "/syriac-ocr-paper.pdf", // Keep PDF URL
      presentationUrl: "/syriac-ocr-presentation.pdf", // Add presentation URL
      period: "Jan 2025 - Jun 2025",
      achievements: "Advanced neural network pipeline for under-resourced language processing",
    },
    {
      title: "Healthcare LLMs Legal Risk Assessment",
      description:
        "Two-step verification system using Medical & Legal LLMs to generate accurate and compliant medical advice with CA Codes embedding",
      tags: ["LLM", "ChatGPT-4", "TruLens", "Healthcare AI", "Legal Compliance"],
      type: "presentation" as const,
      link: "#",
      pdfUrl: "/healthcare-llm-paper.pdf", // Replace with actual URL
      presentationUrl: "/healthcare-llm-paper.pdf", // Replace with actual URL
      period: "Apr 2024 - Jun 2024",
      achievements: "Improved performance over baseline using TruLens metrics",
    },
    {
      title: "iNaturalist Species Classification",
      description:
        "Leveraging taxonomy and phylogeny for species identification from photos, addressing long-tailed datasets and high signal-to-noise ratio",
      tags: ["Machine Learning", "Computer Vision", "AI for Sustainability", "Classification"],
      type: "pdf" as const,
      link: "#",
      pdfUrl: "/inaturalist-classification.pdf", // Replace with actual URL
      presentationUrl: "/inaturalist-classification.pdf", // Replace with actual URL
      period: "Apr 2023 - Sep 2023",
      achievements: "Self-supervised and phylogenetically-informed models for biodiversity research",
    },
    {
      title: "'Silence=Death': HIV Contraction Probability",
      description:
        "Computer program combining multiple HIV transmission probabilities to calculate contraction risk based on user-specified conditions and risk factors",
      tags: ["Python", "Bayesian Networks", "Probability", "Public Health"],
      type: "presentation" as const,
      link: "#",
      pdfUrl: "/hiv-probability-presentation.pdf", // Replace with actual URL
      presentationUrl: "/hiv-probability-presentation.pdf", // Replace with actual URL
      period: "Apr 2023 - Jun 2023",
      achievements: "Bronze Medal in CS109 Probability Challenge",
    },
    {
      title: "ChatGPT Sentiment & Google Stock Prediction",
      description:
        "Regression model predicting Google stock prices using ChatGPT sentiment analysis of popular news articles",
      tags: ["Machine Learning", "Sentiment Analysis", "Regression", "Financial Modeling"],
      type: "pdf" as const,
      link: "#",
      pdfUrl: "/stock-prediction-model.pdf", // Replace with actual URL
      presentationUrl: "/stock-prediction-model.pdf", // Replace with actual URL
      period: "Jan 2023 - Mar 2023",
      achievements: "Results later validated by University of Miami Department of Finance",
    },
  ]

  const bioProjects = [
    {
      title: "Flood Disturbance and Bioerosion Dynamics",
      description:
        "Research on bioerosion trends in Moreton Bay marginal reefs following 2022 flooding, contrasting dead and live reef ecosystems",
      tags: ["Marine Biology", "Coral Reefs", "Bioerosion", "Climate Change", "ReefBudget"],
      type: "pdf" as const,
      link: "#",
      pdfUrl: "/bioerosion-research-paper.pdf", // Keep PDF URL
      presentationUrl: "/bioerosion-presentation.pdf", // Add presentation URL
      period: "Sep 2023 - Dec 2023",
      achievements: "Identified key drivers of macrobioerosion in turbid reef environments",
    },
  ]

  const fgsProjects = [
    {
      title: '"No blacks, dirty bodies": Representations of Black Men in Drummer\'s Formative Years',
      description:
        "Honor's thesis examining racialized sexual tropes in Drummer magazine (1975-1980), analyzing how whiteness remained centered in gay leather culture's erotic imagination",
      tags: ["Critical Theory", "Gender Studies", "Race & Sexuality", "Media Analysis", "LGBTQ+ History"],
      type: "presentation" as const,
      link: "#",
      pdfUrl: "/honors-thesis-drummer-magazine.pdf", // Add PDF URL
      presentationUrl: "/honors-thesis-presentation.pdf", // Keep presentation URL
      period: "May 2024 - Jun 2025",
      achievements: "Francisco C. Lopes Prize winner for outstanding scholarship in feminist studies",
    },
  ]

  const awards = [
    {
      title: "Francisco C. Lopes Prize",
      issuer: "Program in Feminist, Gender, and Sexuality Studies",
      institution: "Stanford University",
      date: "May 2025",
      category: "Honors Thesis Division",
      description:
        "Awarded annually for the best papers and MA or Honors thesis in the Humanities on feminism, gender or sexuality. The prize honors the memory of Professor Francisco Caetano Lopes Jr., recognizing outstanding scholarship in feminist studies.",
      significance: "Prestigious award for academic excellence in interdisciplinary humanities research",
      color: "pink",
      certificateUrl: "/francisco-lopes-prize-certificate.pdf", // Replace with actual URL
    },
    {
      title: "Cardinal Service Notation",
      issuer: "Haas Center for Public Service",
      institution: "Stanford University",
      date: "Nov 2023",
      category: "Public Service Leadership",
      description:
        "Recognition for completing Cardinal Quarter, 12+ units of Cardinal Courses, or a Cardinal Commitment through the Public Service Leadership Program, reflected on academic transcript.",
      significance: "Official transcript notation for significant public service commitment",
      color: "red",
      certificateUrl: "/cardinal-service-notation-certificate.pdf", // Replace with actual URL
    },
    {
      title: "Bronze Medalist | CS109 Probability Challenge",
      issuer: "Jerry Cain, CS109 Professor",
      institution: "Stanford University",
      date: "Jun 2023",
      category: "Academic Competition",
      description:
        "Project: \"'Silence=Death': Computing HIV Contraction Probability\" - Students code projects related to probability course material, reviewed by course assistants with winning entries shared publicly.",
      significance: "Recognition for excellence in applied probability and computational modeling",
      color: "amber",
      certificateUrl: "/cs109-bronze-medal-certificate.pdf", // Replace with actual URL
    },
  ]

  const experiences = [
    {
      title: "Full Stack/Game Developer",
      company: "Center for Spatial and Textual Analysis",
      type: "Internship",
      period: "Jun 2024 - Jun 2025",
      location: "Stanford, California",
      description:
        "Updated the Full Stack Syriac Verb Tutorial website (syriacverbtutorial.org) to change verb syntax and default percentages. Engineered engaging game systems for Syriac verb conjugation learning, including matching exercises and interactive vowel placement games.",
      skills: ["Digital Humanities", "JavaScript", "CSS", "HTML", "PHP", "SQL", "GitHub"],
      achievements: "Created interactive educational games for endangered language preservation",
    },
    {
      title: "Youth Leadership Programs Advisor",
      company: "Aquarium of the Pacific",
      type: "Full-time",
      period: "Jun 2023 - Sep 2023",
      location: "Long Beach, California",
      description:
        "Fostered leadership skills among teens in Teen Science Café and Teen Climate Council. Created public speaking workshops and youth leadership trainings based on 'Multipliers'. Collaborated with VP of Development on donor relations and scientist coordination.",
      skills: ["Public Speaking", "Leadership Development", "Program Management"],
      achievements: "Invited by CEO to Blue Whale Gala that raised record-breaking $650,000",
    },
    {
      title: "Community Education Associate",
      company: "Somos Familia",
      type: "Full-time",
      period: "Feb 2022 - Sep 2022",
      location: "Oakland, California (Hybrid)",
      description:
        "Facilitated bilingual support groups (Familia y Diversidad and Jovenes Solares) for LGBTQ+ families and youth, focusing on intersectionality with Latinidad. Led outreach efforts and crafted social media content for fundraising campaigns.",
      skills: ["Spanish", "Community Organizing", "Social Media", "Bilingual Facilitation"],
      achievements: "Successfully facilitated support groups in English and Spanish",
    },
    {
      title: "FROSH 101 Co-Lead",
      company: "Stanford University",
      type: "Part-time",
      period: "Apr 2022 - Dec 2022",
      location: "Stanford, California",
      description:
        "Facilitated weekly discussion-based sessions to support first-year students in their transition to college life. Executed lesson plans and activities fostering inclusion, reflection, and resilience.",
      skills: ["Public Speaking", "Communication", "Peer Mentoring"],
      achievements: "Supported dozens of first-year students through college transition",
    },
    {
      title: "Youth Volunteer Services Associate",
      company: "Aquarium of the Pacific",
      type: "Part-time",
      period: "Apr 2021 - Sep 2021",
      location: "Long Beach, California (Hybrid)",
      description:
        "Oversaw daily operations of youth volunteer programs managing 1,000+ volunteers across 8 programs. Previously volunteered 1,300+ hours in various roles including Teen Climate Council Chair and VolunTEEN Mentor.",
      skills: ["Program Management", "Volunteer Coordination", "Public Speaking"],
      achievements: "Managed programs with 1,000+ volunteers; 1,300+ personal volunteer hours",
    },
    {
      title: "Hawksbill Sea Turtle Research Intern",
      company: "University of California, Santa Cruz",
      type: "Internship",
      period: "Jun 2020 - Aug 2020",
      location: "Santa Cruz, California (Remote)",
      description:
        "Analyzed data on eastern Pacific hawksbill sea turtles regarding marine protected areas and threats. Parsed scientific literature in English and Spanish, delivered research presentation, and worked on community outreach paper.",
      skills: ["Research", "Data Analysis", "Spanish", "Scientific Communication"],
      achievements: "Delivered 15-minute research presentation; bilingual literature review",
    },
  ]

  const leadershipRoles = [
    {
      title: "Financial Officer",
      company: "Health Education Lifetime Partnerships (HELP) for Kids",
      period: "Sep 2022 - Jun 2023",
      description:
        "Managed club budget, processed reimbursements, and secured grants up to $6,600 for health education programs at Kennedy Middle School.",
    },
    {
      title: "Teaching Assistant",
      company: "Habla @ Stanford",
      period: "Sep 2022 - Jun 2023",
      description:
        "Supported 50+ students in English language coaching program for Spanish-speaking Stanford staff. Coordinated fundraising efforts through The Stanford Fund.",
    },
    {
      title: "Academic Tutor",
      company: "Haas Center For Public Service",
      period: "Sep 2022 - Dec 2022",
      description:
        "Tutored underserved students at Menlo-Atherton High School in math, biology, and writing. Tracked progress and adjusted strategies with program coordinators.",
    },
    {
      title: "Peer Counselor",
      company: "Stanford Sexual Health Peer Resource Center",
      period: "Sep 2022 - Dec 2022",
      description:
        "Completed trauma-informed counseling training on sexual health, relationships, and identity. Planned outreach events and increased accessibility of wellness resources.",
    },
    {
      title: "Youth Funding Committee Member",
      company: "The Nonprofit Partnership",
      period: "Jul 2022 - Aug 2022",
      description:
        "Evaluated City of Long Beach mini grants for youth programs serving communities impacted by crime, COVID-19, poverty, and health conditions.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setIsMobile(!isMobile)}
          className="fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      {/* Fixed Sidebar Navigation */}
      <nav
        className={`fixed left-0 top-0 h-full bg-gray-900/80 backdrop-blur-sm border-r border-gray-700 z-40 p-6 transition-all duration-300 ${
          isMobile ? "w-0 overflow-hidden" : "w-64"
        } md:w-64`}
      >
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white">Erick Angelo Ramirez</h2>
          <p className="text-sm text-gray-400">Stanford University</p>
        </div>

        <div className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                  activeSection === item.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            )
          })}
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <Separator className="mb-4 bg-gray-700" />
          <div className="flex gap-3 justify-center">
            <Button
              size="sm"
              variant="ghost"
              className="p-2 hover:bg-gray-800"
              onClick={() => window.open("https://github.com/ErickAngeloRamirez", "_blank")}
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="p-2 hover:bg-gray-800"
              onClick={() => window.open("https://www.linkedin.com/in/erick-angelo-ramirez/", "_blank")}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="p-2 hover:bg-gray-800"
              onClick={() => window.open("mailto:erick25@stanford.edu", "_blank")}
            >
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${isMobile ? "ml-0" : "ml-64"} md:ml-64 min-h-screen`}>
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-4xl w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <User className="w-16 h-16 md:w-20 md:h-20 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                  Erick Angelo Ramirez
                </h1>
                <div className="text-lg md:text-xl text-gray-300 space-y-2">
                  <p>Master's & Bachelor's of Science in Computer Science</p>
                  <p className="text-blue-400">Stanford University • Class of 2026</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <University className="w-5 h-5 text-blue-400" />
                    Academic Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-2">
                  <p>• Master of Science: Computer Science with AI Subplan</p>
                  <p>• Bachelor of Science: Computer Science with Systems Subplan</p>
                  <p>• Minor: Biology</p>
                  <p>• Honor's Thesis: Feminist, Gender, and Sexuality Studies</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <User className="w-5 h-5 text-purple-400" />
                    About Me
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>
                    I'm a passionate computer science student at Stanford University, pursuing both Master's and
                    Bachelor's degrees with a focus on AI and systems. My interdisciplinary approach combines technical
                    expertise with critical perspectives from biology and sexuality studies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white flex items-center gap-3">
              <Award className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
              Awards & Recognition
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <AwardCard key={index} award={award} />
              ))}
            </div>
          </div>
        </section>

        {/* Computer Science Projects */}
        <section id="cs-projects" className="px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white flex items-center gap-3">
              <Code className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              Computer Science Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {csProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  category="cs"
                  dateColor={dateColors[index % dateColors.length]}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Biology and FGSS Projects Container */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:items-start max-w-6xl mx-auto px-6 md:px-12">
          {/* Biology Projects */}
          <section id="bio-projects" className="py-8 md:py-12">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center lg:justify-start lg:h-16 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                  <Fish className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
                  Biology Projects
                </h2>
              </div>
              <div className="w-full flex-grow">
                {bioProjects.map((project, index) => (
                  <div key={index} className="w-full">
                    <ProjectCard project={project} category="bio" dateColor="amber" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FGS Projects */}
          <section id="fgs-projects" className="py-8 md:py-12">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center lg:justify-start lg:h-16 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-pink-400" />
                  Feminist, Gender, & Sexuality Studies Projects
                </h2>
              </div>
              <div className="w-full flex-grow">
                {fgsProjects.map((project, index) => (
                  <div key={index} className="w-full">
                    <ProjectCard project={project} category="fgs" dateColor="amber" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Experience */}
        <section id="experience" className="px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white flex items-center gap-3">
              <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
              Professional Experience
            </h2>

            {/* Work Experience */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">Work Experience</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiences.map((exp, index) => (
                  <ExperienceCard key={index} experience={exp} dateColor={dateColors[index % dateColors.length]} />
                ))}
              </div>
            </div>

            {/* Leadership & Service */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">Leadership & Service</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {leadershipRoles.map((role, index) => (
                  <LeadershipCard key={index} role={role} dateColor={dateColors[index % dateColors.length]} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
