import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Project {
  title: string; // The title of the project
  subtitle?: string; // An optional subtitle
  duration: string; // Duration of the project
  description?: string; // An optional description of the project
  links: string[]; // Array of project links
  img: string; // Image representing the project
  role: string; // Role in the project
  techStack: []; // Array of technologies used in the project
}

export const GET = async () => {
  const projects = await prisma.projects.findMany({
    include: {
      techStack: {
        include: {
          tech: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return NextResponse.json(projects);
};

export const POST = async (request: NextRequest) => {
  try {
    const data: Project = await request.json();

    const res = await prisma.projects.create({
      data: {
        title: data.title,
        subtitle: data.subtitle,
        duration: data.duration,
        description: data.description,
        links: data.links,
        img: data.img,
        role: data.role,
        techStack: {
          create: data.techStack,
        },
      },
    });

    return NextResponse.json({
      message: "POST request received",
      data: res,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to parse JSON",
      },
      { status: 400 }
    );
  }
};
