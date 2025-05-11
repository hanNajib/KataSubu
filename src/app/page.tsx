import SubtitleTranslator from "@/components/subtitle-translator";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import ToggleTheme from "@/components/ToggleTheme";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-100 blur-xl opacity-30 dark:bg-blue-900 dark:opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-purple-100 blur-xl opacity-40 dark:bg-purple-900 dark:opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-teal-100 blur-xl opacity-30 dark:bg-teal-900 dark:opacity-15"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 rounded-full bg-indigo-100 blur-xl opacity-30 dark:bg-indigo-900 dark:opacity-15"></div>
      </div>
      
      {/* Header */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-4 z-10">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary"></div>
        </div>
        <ToggleTheme />
      </div>
      
      {/* Main content */}
      <Card className="w-full max-w-4xl shadow-lg border-border z-10">
        <CardHeader className="pb-3">
          <CardTitle className="text-2xl">KataSubu - Subtitle Translator</CardTitle>
          <CardDescription>
            Upload, translate, and download subtitles in multiple languages
          </CardDescription>
          <Separator className="mt-4" />
        </CardHeader>
        <CardContent>
          <SubtitleTranslator />
        </CardContent>
        <CardFooter className="flex justify-between text-muted-foreground text-sm pt-2">
          <span>Supported formats: SRT</span>
          <span>atmin hosting gratisan, file subtitle maksimal sekitar 24 menit an</span>
        </CardFooter>
      </Card>
      
      {/* Footer */}
      <footer className="w-full max-w-4xl flex items-center justify-between mt-6 text-sm text-muted-foreground z-10">
        <div>© {new Date().getFullYear()} KataSubu</div>
        <div className="flex gap-4">
          <Button variant="link" className="text-xs p-0 h-auto">Help</Button>
          <Button variant="link" className="text-xs p-0 h-auto">Privacy</Button>
          <Button variant="link" className="text-xs p-0 h-auto">Terms</Button>
        </div>
      </footer>
    </main>
  );
}