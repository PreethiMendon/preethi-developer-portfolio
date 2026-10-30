import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Github, Linkedin, Mail, Phone, Download, ExternalLink,
  Code2, BrainCircuit, Database, Terminal, Menu, X, FileText, Award,
  BriefcaseBusiness, GraduationCap, CheckCircle2, Sparkles, Globe2
} from "lucide-react";

const docs = "/documents/";
const resume = docs + "Preethi-Mendon-Resume.pdf";
const certificates = docs + "Preethi-Mendon-Certificates.pdf";
const internshipCertificate = docs + "Elevate-Labs-Internship-Completion-Certificate.pdf";
const internshipOffer = docs + "Elevate-Labs-Internship-Offer-Letter.pdf";

const projects = [
  {
    n: "01", title: "DiaProXAI", category: "AI · Healthcare · Major Project",
    description: "Completed AI-powered diabetic foot ulcer screening project for ulcer detection, severity classification, segmentation, and multi-disease complication interaction analysis. Includes explainability using Grad-CAM and SHAP.",
    stack: ["Python", "ResNet50", "U-Net", "TensorFlow", "OpenCV", "Grad-CAM", "SHAP"],kind: "Academic project",
    featured: true, status: "Major Project"
  },
  {
    n: "02", title: "Smart Agriculture System", category: "AI · Full Stack",
    description: "A smart agriculture application combining a web interface with machine-learning and OCR capabilities to support agriculture-related decision-making.",
    stack: ["Python", "FastAPI", "React.js", "ML", "OCR"],kind: "Hackathon project",
    url: "https://github.com/PreethiMendon/smart-agriculture-system"
  },
  {
    n: "03", title: "AI-Based Blueprint Analysis", category: "Computer Vision",
    description: "Automates floor-plan interpretation using computer vision and OCR to detect rooms, extract labels, and support interactive house colour visualization.",
    stack: ["Python", "OpenCV", "OCR", "React.js"],kind: "Academic project",
    url: "https://github.com/PreethiMendon/AI-Based-Blueprint-Analysis-for-Intelligent-House-Color-Visualization"
  },
  {
    n: "04", title: "Mental Wellness Bot", category: "AI · NLP · Full Stack",
    description: "An AI-powered conversational application designed to provide supportive interactions through an intuitive web interface.",
    stack: ["Python", "FastAPI", "NLP", "React.js"],kind: "Academic project",
    url: "https://github.com/PreethiMendon/mental-wellness-bot"
  },
  {
    n: "05", title: "Email Spam Detector", category: "Machine Learning",
    description: "A machine-learning application that classifies email messages into spam and non-spam categories using NLP techniques.",
    stack: ["Python", "Scikit-learn", "Pandas", "NLP"],kind: "personal project",
    url: "https://github.com/PreethiMendon/Email-Spam-Detector"
  },
  {
    n: "06", title: "Contact Form", category: "Frontend · Form Validation",
    description: "A responsive contact form with client-side validation for name, email, and message fields, built with core web technologies.",
    stack: ["HTML", "CSS", "JavaScript"], kind: "personal project",
    url: "https://github.com/PreethiMendon/contact-form"
  },
  {
    n: "07", title: "To-Do List", category: "Frontend · Productivity App",
    description: "A responsive task manager that lets users add tasks, mark them complete, and delete them with immediate interface updates.",
    stack: ["HTML", "CSS", "JavaScript"], kind: "personal project",
    url: "https://github.com/PreethiMendon/To-do-list"
  },
  {
    n: "08", title: "Landing Page", category: "Frontend · Responsive Design",
    description: "A responsive landing page featuring navigation, a hero section, a call-to-action, and a footer with social links.",
    stack: ["HTML5", "CSS3"], kind: "personal project",
    url: "https://github.com/PreethiMendon/landingpage"
  }
];

const skills = [
  { icon: Code2, title: "Programming", items: ["Java", "Python", "SQL", "JavaScript", "HTML5", "CSS3"] },
  { icon: BrainCircuit, title: "AI & Application Development", items: ["Machine Learning", "Deep Learning", "Computer Vision", "OCR", "NLP", "React.js", "FastAPI", "Node.js"] },
  { icon: Database, title: "Databases & APIs", items: ["MySQL", "MongoDB", "RESTful APIs"] },
  { icon: Terminal, title: "Tools & Core CS", items: ["Git", "GitHub", "Linux", "Docker", "VS Code", "Jupyter Notebook", "DSA", "OOP", "DBMS", "Computer Networks"] }
];

const credentials = [
  ["Programming in Java", "NPTEL · IIT Kharagpur", "2025"],
  ["AI for Beginners", "HP LIFE", "2026"],
  ["Data Analytics Job Simulation", "Deloitte · Forage", "2026"],
  ["Introduction to Cyber Security", "Infosys Springboard", "2024"],
  ["Programming using Java", "Infosys Springboard", "2026"],
  ["Introduction to MongoDB (For Students)", "MongoDB", "2025"],
  ["C Training", "Spoken Tutorial · IIT Bombay", "2024"],
  ["Git Training", "EduPyramids · SINE, IIT Bombay", "2026"],
  ["HTML Training", "Spoken Tutorial · IIT Bombay", "2024"],
  ["JavaScript Training", "EduPyramids · SINE, IIT Bombay", "2025"],
  ["Microsoft Excel – Complete Excel Data Analysis Course", "Udemy", "2025"],
  ["Demystifying AI & ML", "TalentSprint", "2025"],
  ["Mini-Project Expo 2025", "Canara Engineering College · Participation", "2025"]
];

function Heading({ label, title, sub }) {
  return <div className="section-heading"><span className="eyebrow">{label}</span><h2>{title}</h2>{sub && <p>{sub}</p>}</div>;
}
function App() {
  const [open, setOpen] = useState(false);
  const links = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Experience", "#experience"], ["Achievements", "#achievements"], ["Certificates", "#certificates"], ["Contact", "#contact"]];
  return <div className="site">
    <header className="header"><nav className="nav wrap">
      <a className="logo" href="#home"><span>PM</span> Preethi Mendon</a>
      <div className="navlinks">{links.map(([x,h]) => <a key={x} href={h}>{x}</a>)}</div>
      <a className="navbutton" href="#contact">Let's connect <ArrowUpRight size={15}/></a>
      <button className="menubtn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    </nav>{open && <div className="mobilelinks">{links.map(([x,h]) => <a key={x} href={h} onClick={() => setOpen(false)}>{x}</a>)}</div>}</header>

    <main>
      <section id="home" className="hero wrap">
        <motion.div className="hero-text" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
          <div className="availability"><i/> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</div>
          <p className="overline">HELLO, I'M</p>
          <h1>Preethi<br/><em>Mendon.</em></h1>
          <h2>Software Developer <span>·</span> AI Enthusiast</h2>
          <p className="hero-desc">I create useful software experiences — from responsive web applications to AI-powered systems. I enjoy solving problems, learning new technologies, and turning ideas into working products.</p>
          <div className="hero-actions"><a className="btn dark" href="#projects">Explore projects <ArrowUpRight size={17}/></a><a className="btn outline" href={resume} download><Download size={16}/> Download resume</a></div>
          <div className="socials"><a href="https://github.com/PreethiMendon" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href="https://www.linkedin.com/in/preethi-mendon" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a href="mailto:preethimendon15@gmail.com"><Mail size={17}/> Email</a></div>
        </motion.div>
        <motion.div className="hero-art" initial={{opacity:0,scale:.93}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.12}}>
          <div className="art-circle c1"/><div className="art-circle c2"/>
          <div className="intro-card"><div className="card-label">DEVELOPER SNAPSHOT <span>●</span></div><div className="initials">P<span>.</span>M</div><h3>Build. Learn. Improve.</h3><p>Information Science & Engineering</p><div className="card-rule"/><div className="snapshot"><div><b>08</b><small>Projects</small></div><div><b>13</b><small>Credentials</small></div><div><b>2027</b><small>Graduation</small></div></div></div>
          <div className="float-chip chip-one"><BrainCircuit size={16}/> AI & Computer Vision</div><div className="float-chip chip-two"><Code2 size={16}/> Full-Stack Development</div>
        </motion.div>
      </section>

      <section id="about" className="section wrap">
        <Heading label="01 / ABOUT" title="Curious mind. Practical builder." sub="A little about my journey and what I enjoy working on."/>
        <div className="about-grid"><div className="about-copy">
          <p>I'm an Information Science and Engineering student at <strong>Canara Engineering College</strong>, interested in software engineering, AI-powered applications, and full-stack development.</p>
          <p>My projects have given me hands-on experience with responsive interfaces, REST APIs, machine-learning applications, computer vision, and natural language processing.</p>
          <p>I enjoy learning by building, collaborating with others, and improving my engineering skills through practical work.</p>
        </div>
        <div className="education-card"><div className="education-icon"><GraduationCap size={23}/></div><div className="edu-content"><span className="eyebrow">EDUCATION</span><h3>Canara Engineering College</h3><p className="degree">B.E. — Information Science & Engineering</p><p className="edu-meta">2023–2027 <b>·</b> CGPA: 7.96</p><div className="edu-separator"/><h4>Sri Venkataramana Pre-University College</h4><p className="degree">PCMC</p><p className="edu-meta">2021–2023 <b>·</b> 86.5%</p></div></div></div>
      </section>

      <section id="skills" className="section tint"><div className="wrap"><Heading label="02 / TOOLKIT" title="Skills & technologies" sub="Tools and concepts I've used while developing projects and learning software engineering."/><div className="skill-grid">{skills.map(({icon:Icon,title,items})=><motion.div className="skill-card" key={title} whileHover={{y:-5}}><div className="skill-icon"><Icon size={21}/></div><h3>{title}</h3><div className="pills">{items.map(x=><span key={x}>{x}</span>)}</div></motion.div>)}</div></div></section>

      <section id="projects" className="section wrap"><Heading label="03 / SELECTED WORK" title="Projects" sub="A collection of AI, full-stack, and frontend projects. DiaProXAI is my completed major project."/><div className="project-grid">{projects.map((p,i)=><motion.article className={`project ${p.featured?"project-featured":""}`} key={p.title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{delay:(i%3)*.06}}><div className="project-head"><span className="project-no">{p.n} / PROJECT</span>{p.status && <span className="complete"><CheckCircle2 size={13}/> {p.status}</span>}</div><span className="category">{p.category}</span><h3>{p.title}</h3><p className="project-desc">{p.description}</p><div className="pills project-pills">{p.stack.map(s=><span key={s}>{s}</span>)}</div><div className="project-foot"><span>{p.kind || (p.featured ? "Completed major project" : "Software project")}</span>{p.url ? <a href={p.url} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={15}/></a> : <span className="muted">Repository link can be added</span>}</div></motion.article>)}</div></section>

      <section id="experience" className="section tint"><div className="wrap"><Heading label="04 / EXPERIENCE" title="Internship experience" sub="Practical experience in web development."/><div className="internship-card"><div className="internship-top"><div><span className="eyebrow">ELEVATE LABS · REMOTE</span><h3>Web Development Intern</h3><p className="internship-dates">29 June 2026 — 17 August 2026 <b>·</b> 45 days</p></div><span className="verified"><CheckCircle2 size={15}/> Completed</span></div><p className="internship-desc">Successfully completed the Web Development Internship Program at Elevate Labs. Contributed to designing and developing responsive websites, implementing user-friendly interfaces, and creating web solutions to meet project requirements.</p><div className="pills"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Responsive Design</span><span>Web Development</span></div><div className="document-actions"><a className="btn dark" href={internshipCertificate} target="_blank" rel="noreferrer"><FileText size={16}/> View completion certificate <ExternalLink size={14}/></a><a className="btn outline" href={internshipCertificate} download><Download size={16}/> Download certificate</a><a className="offer-link" href={internshipOffer} target="_blank" rel="noreferrer">View offer letter</a></div><p className="certificate-date">Completion certificate issued 22 August 2026.</p></div></div></section>

      <section id="achievements" className="section wrap"><Heading label="05 / BEYOND THE CLASSROOM" title="Hackathon & bootcamp" sub="Two different learning experiences — one focused on collaborative problem-solving, the other on applied AI and sustainability."/><div className="experience-grid">
        <article className="experience-tile"><div className="tile-icon"><Sparkles size={21}/></div><span className="eyebrow">HACKATHON EXPERIENCE</span><h3>XYPHERIA-2026</h3><p className="tile-sub">Hackathon participant</p><p>Participated in a 24-hour national-level hackathon organized by Alva's Institute of Engineering & Technology, collaborating on problem-solving and rapid project development.</p><div className="pills"><span>Problem solving</span><span>Team collaboration</span><span>Rapid prototyping</span></div></article>
        <article className="experience-tile bootcamp"><div className="tile-icon"><Globe2 size={21}/></div><span className="eyebrow">BOOTCAMP</span><h3>Green Skills & Applied AI for Climate Action</h3><p className="tile-sub">1M1B Foundation · Microsoft Elevate</p><p>Completed a bootcamp focused on green skills and applying artificial intelligence to climate action and sustainability.</p><div className="pills"><span>Applied AI</span><span>Climate action</span><span>Sustainability</span></div></article>
      </div></section>

      <section id="certificates" className="section tint"><div className="wrap"><Heading label="06 / CONTINUOUS LEARNING" title="Certifications & training" sub="Course completions, technical training, and participation records."/><div className="credential-layout"><div className="credential-list">{credentials.map(([title,org,year])=><div className="credential" key={title}><span className="credential-icon"><Award size={17}/></span><div><strong>{title}</strong><small>{org}</small></div><time>{year}</time></div>)}</div><aside className="certificate-panel"><Award size={29}/><h3>Certificate collection</h3><p>View or download the combined PDF containing the certificates and participation records you provided.</p><a className="btn dark" href={certificates} target="_blank" rel="noreferrer"><FileText size={16}/> View certificates PDF <ExternalLink size={14}/></a><a className="download-text" href={certificates} download><Download size={15}/> Download certificates</a></aside></div></div></section>

      <section id="contact" className="section contact wrap"><span className="eyebrow">07 / CONTACT</span><h2>Let's create something<br/><em>worth sharing.</em></h2><p>I'm open to connecting about software engineering opportunities, projects, and collaboration.</p><div className="contact-actions"><a className="btn dark" href="mailto:preethimendon15@gmail.com"><Mail size={16}/> Email me <ArrowUpRight size={15}/></a><a className="btn outline" href="https://www.linkedin.com/in/preethi-mendon" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a><a className="btn outline" href="https://github.com/PreethiMendon" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a></div><div className="contact-meta"><span><Mail size={15}/> preethimendon15@gmail.com</span><span><Phone size={15}/> +91 6366121894</span></div></section>
    </main>
    <footer className="footer wrap"><a className="logo" href="#home"><span>PM</span> Preethi Mendon</a><p>Designed & built by Preethi Mendon · 2026</p><a href="#home">Back to top ↑</a></footer>
  </div>;
}
export default App;