import { redirect } from "next/navigation";
import DashContent from "../components/DashContent";

export default function Dashboard() {
  redirect("/dashboard/apps");
  return (
    <DashContent />
  );
}
