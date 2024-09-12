import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

enum TechCategory {
  Frontend = "frontend",
  Backend = "backend",
  Database = "database",
  Programming = "programming",
  Cloud = "cloud",
  Tool = "tool",
  None = "none",
}

interface Technology {
  id: string; // UUID
  name: string; // Name of the technology
  icon: string; // Icon representing the technology
  category: TechCategory; // Category of the technology, default to 'none'
  isVisible: boolean; // Visibility status of the technology
  order: number; // Order for displaying the technology, default to 5000
}

export const GET = async () => {
  const technologies = await prisma.technologies.findMany();
  return NextResponse.json(technologies);
};

export const POST = async (request: NextRequest) => {
  try {
    const data: Technology = await request.json(); // Await the async json() method

    const res = await prisma.technologies.create({
      data: {
        name: data.name,
        icon: data.icon,
        isVisible: data.isVisible,
        category: data.category,
        order: data.order,
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
