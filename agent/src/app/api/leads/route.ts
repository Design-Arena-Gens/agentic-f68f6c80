import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  persona: z.array(z.string()).min(1),
  services: z.array(z.string()).min(1),
  brandStage: z.string().min(1),
  brandVoice: z.string().min(3),
  budget: z.string().min(1),
  timeline: z.string().min(1),
  differentiator: z.string().min(3),
  email: z.string().email(),
  website: z
    .union([z.string().url(), z.literal(""), z.undefined()])
    .transform((value) => (value ? value : undefined)),
  capturedAt: z.string().optional(),
  source: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const parsed = leadSchema.safeParse(data);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Missing or invalid fields.",
          details: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const payload = parsed.data;
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "graphic-design-lead",
          submittedAt: payload.capturedAt ?? new Date().toISOString(),
          payload,
        }),
      });
    } else {
      console.info("[lead-agent] Captured lead", payload);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lead-agent] Failed to ingest lead", error);
    return NextResponse.json(
      { error: "Unable to capture lead right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
