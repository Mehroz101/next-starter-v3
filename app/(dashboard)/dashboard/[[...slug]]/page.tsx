import { notFound } from "next/navigation";

export default function DashboardCatchAll() {
  // Always trigger not-found for unknown dashboard paths
  notFound();
}
