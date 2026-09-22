import { NextRequest, NextResponse } from "next/server";
import { processContactSubmission } from "@/server/contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = await processContactSubmission(body);

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("[API Contact Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
