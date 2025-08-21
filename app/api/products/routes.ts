import { NextResponse } from "next/server";
import products from "@/data/products.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

  return NextResponse.json(filtered);
}