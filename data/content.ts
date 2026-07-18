export interface Profile {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Education {
  degree: string;
  institution: string;
  detail: string;
}

export interface About {
  objective: string;
  education: Education;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  description: string;
}

export const profile: Profile = {
  name: "Rahul Kumar Shah",
  title: "Frontend Developer | Aspiring Full Stack Developer",
  tagline: "Building scalable, clean web applications from the ground up.",
  email: "rahulkumarshah888@gmail.com",
  phone: "+91-9546265566",
  location: "Jaipur, India",
  linkedin: "https://linkedin.com/in/rahul203",
  github: "https://github.com/Rahul10X",
};

export const about: About = {
  objective:
    "Aspiring Full Stack Developer passionate about designing, developing, and optimizing scalable web applications. Looking to join a growth-oriented organization to apply full stack development, system architecture, and clean coding practices to build impactful digital products.",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Jagannath University, Jaipur",
    detail: "CGPA 7.0",
  },
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["C++ (DSA)", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "React Native (Expo)",
      "NativeWind",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Prisma", "Docker", "Vercel"],
  },
];

export const projects: Project[] = [
  {
    title: "Event Booking & Ticketing Platform",
    description:
      "Full booking platform for community/startup events — browse events, book and pay for a spot, and receive a QR ticket by email. Includes an admin dashboard for managing events, attendees, and check-in.",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "NextAuth.js",
      "Razorpay",
      "Cloudinary/S3",
      "Vercel",
    ],
    featured: true,
  },
  {
    title: "CineVerse — Movie Streaming Web App",
    description:
      "A movie streaming web app built as a hands-on way to learn modern frontend development — JavaScript fundamentals, then React, TypeScript, and Next.js — through the App Router, dynamic routing, and reusable component architecture.",
    stack: ["Next.js", "React", "TypeScript"],
    featured: false,
  },
  {
    title: "FitTrack — Full Stack Fitness & Workout Platform",
    description:
      "Cross-platform mobile fitness app with secure, scalable RESTful APIs for workout tracking, user profiles, and personalized diet planning.",
    stack: [
      "React Native (Expo)",
      "NativeWind",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    featured: false,
  },
  {
    title: "FitTrack Landing Page",
    description:
      "Help-center web application for FAQs, guides, and user support, with ticket management and JWT-authenticated APIs.",
    stack: ["Next.js", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    featured: false,
    liveUrl: "https://fittrack-landing-page-azure.vercel.app/",
  },
  {
    title: "VisionSafe — AI-Powered Public Security Monitoring",
    description:
      "B.Tech capstone project: an AI platform integrating object detection and pose estimation for public safety monitoring. Contributed to system architecture and technical documentation.",
    stack: [
      "YOLOv8",
      "MediaPipe Pose Estimation",
      "FastAPI",
      "React",
      "PostgreSQL",
    ],
    featured: false,
    liveUrl: "https://vision-ai-delta.vercel.app/",
  },
];

export const leadership: LeadershipItem[] = [
  {
    role: "Lead Organizer",
    organization: "DevSummit Hackathon 2025",
    description:
      "Managed outreach, participant registrations, event coordination, venue setup, and operational logistics.",
  },
  {
    role: "Student Council Member",
    organization: "Jagannath University",
    description:
      "Acted as a liaison between students and administration, organized campus-wide events, and streamlined student engagement initiatives.",
  },
];
