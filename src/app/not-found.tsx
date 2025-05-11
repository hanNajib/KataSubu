import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. Here are some helpful links:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button variant="default" asChild>
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="neutral" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">Popular Features:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Subtitle Translation
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                SRT File Management
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Language Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
