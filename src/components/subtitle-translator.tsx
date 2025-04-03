// components/subtitle-translator.tsx
"use client";
import React, { useState } from "react";
import { FileUpload } from "./file-upload";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function SubtitleTranslator() {
  const [files, setFiles] = useState<File[]>([]);
  const [language, setLanguage] = useState<string>("id");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (newFiles: File[]) => {
    if (newFiles.length > 0) {
      const srtFiles = newFiles.filter(file => file.name.endsWith('.srt'));
      if (srtFiles.length > 0) {
        setFiles(srtFiles);
        setError(null);
      } else {
        setError("Please upload .srt files only");
      }
    }
  };

  const uploadAndTranslate = async () => {
    if (files.length === 0) {
      setError("Please select a file first!");
      return;
    }

    setIsUploading(true);
    setError(null);
    
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("lang", language);

    try {
      const response = await fetch("https://katasubuapi.vercel.app/subtitle/upload", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error("Failed to upload file!");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred during upload!");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">KataSubu - Subtitle Translator</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="w-full">
          <FileUpload onChange={handleFileUpload} />
          {files.length > 0 && (
            <p className="text-center mt-2 text-sm text-neutral-500">
              Selected: {files[0].name}
            </p>
          )}
        </div>

        <div className="w-full max-w-xs">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="id">Bahasa Indonesia</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="it">Italian</SelectItem>
                <SelectItem value="pt">Portuguese</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
                <SelectItem value="ko">Korean</SelectItem>
                <SelectItem value="zh-CN">Chinese (Simplified)</SelectItem>
                <SelectItem value="zh-TW">Chinese (Traditional)</SelectItem>
                <SelectItem value="ar">Arabic</SelectItem>
                <SelectItem value="ru">Russian</SelectItem>
                <SelectItem value="tr">Turkish</SelectItem>
                <SelectItem value="pl">Polish</SelectItem>
                <SelectItem value="nl">Dutch</SelectItem>
                <SelectItem value="sv">Swedish</SelectItem>
                <SelectItem value="no">Norwegian</SelectItem>
                <SelectItem value="da">Danish</SelectItem>
                <SelectItem value="fi">Finnish</SelectItem>
                <SelectItem value="cs">Czech</SelectItem>
                <SelectItem value="hu">Hungarian</SelectItem>
                <SelectItem value="th">Thai</SelectItem>
                <SelectItem value="vi">Vietnamese</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
                <SelectItem value="ms">Malay</SelectItem>
                <SelectItem value="sw">Swahili</SelectItem>
                <SelectItem value="tl">Tagalog</SelectItem>
                <SelectItem value="jv">Javanese</SelectItem>
                <SelectItem value="su">Sundanese</SelectItem> 
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={uploadAndTranslate} 
          disabled={isUploading || files.length === 0}
          className="w-full max-w-xs"
        >
          {isUploading ? "Uploading..." : "Upload & Translate"}
        </Button>

        {downloadUrl && (
          <a 
            href={downloadUrl} 
            download="translated.srt" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full max-w-xs"
          >
            Download Translated Subtitle
          </a>
        )}

        {error && (
          <Alert variant="destructive" className="w-full max-w-xs">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}