import { ModeToggle } from "@/components/toggle-theme/toggle-theme";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      <ModeToggle />
    </div>
  )
}
