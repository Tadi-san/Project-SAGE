import { redirect } from 'next/navigation';
export default function Home() {
  redirect('/landing');

  return null; // Return null to prevent unnecessary rendering
}
