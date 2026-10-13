import demo from "@/data/demo-vehicles.json";
import credits from "@/data/demo-photo-credits.json";
import type { Vehicle } from "@/types";

/**
 * Veículos FICTÍCIOS usados no modo demonstração (quando o Supabase
 * ainda não foi configurado). Os mesmos dados estão em supabase/seed.sql.
 *
 * As fotos são de licença livre (Wikimedia Commons) — os créditos ficam em
 * data/demo-photo-credits.json e aparecem na página de cada veículo.
 */
export type PhotoCredit = { file: string; author: string; license: string; source: string };

export const DEMO_PHOTO_CREDITS = credits as Record<string, PhotoCredit[]>;

const base = Date.UTC(2026, 0, 1);

export const DEMO_VEHICLES: Vehicle[] = demo.map((v, index) => {
  const id = `demo-${index + 1}`;
  const createdAt = new Date(base + (demo.length - index) * 86_400_000).toISOString();
  const photos = DEMO_PHOTO_CREDITS[v.slug]?.map((c) => c.file) ?? [1, 2, 3, 4].map((n) => `/demo/${v.slug}-${n}.svg`);
  return {
    id,
    slug: v.slug,
    brand: v.brand,
    model: v.model,
    version: v.version,
    year_manufacture: v.year_manufacture,
    year_model: v.year_model,
    price: v.price,
    previous_price: v.previous_price,
    mileage: v.mileage,
    fuel: v.fuel,
    transmission: v.transmission,
    body_type: v.body_type,
    color: v.color,
    doors: v.doors,
    plate_end: v.plate_end,
    description: v.description,
    options: v.options,
    status: v.status as Vehicle["status"],
    featured: v.featured,
    is_offer: v.is_offer,
    is_new_arrival: v.is_new_arrival,
    published: true,
    is_demo: true,
    created_at: createdAt,
    updated_at: createdAt,
    images: photos.map((url, position) => ({
      id: `${id}-img-${position + 1}`,
      vehicle_id: id,
      url,
      storage_path: null,
      position,
    })),
  };
});
