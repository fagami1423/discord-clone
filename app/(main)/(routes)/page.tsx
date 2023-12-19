import { ModeToggle } from '@/components/ui/mode-toggle';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in"/>
      <ModeToggle />
    </div>

  )
}
