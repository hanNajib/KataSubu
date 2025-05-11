/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
// components/ui/file-upload.tsx
import React, { useRef, useState } from "react";
import { FileText, Upload } from "lucide-react";
import { useDropzone } from "react-dropzone";

export const FileUpload = ({
  onChange,
}: {
  onChange?: (files: File[]) => void;
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    setFiles((prevFiles) => {
      const updatedFiles = [...newFiles];
      onChange && onChange(updatedFiles);
      return updatedFiles;
    });
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    accept: {
      'text/srt': ['.srt'],
      'application/x-subrip': ['.srt']
    },
    onDrop: handleFileChange,
    onDropRejected: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="w-full" {...getRootProps()}>
      <div
        onClick={handleClick}
        className="p-6 rounded-lg cursor-pointer w-full border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors"
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          accept=".srt"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />
        
        <div className="flex flex-col items-center justify-center">
          {files.length > 0 ? (
            <div className="flex items-center justify-center w-full">
              <FileText className="h-8 w-8 text-blue-500 mr-2" />
              <div className="text-left">
                <p className="font-medium text-gray-800 dark:text-gray-200 truncate max-w-xs">
                  {files[0].name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {(files[0].size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
          ) : (
            <>
              <Upload className="h-10 w-10 text-gray-400 mb-2" />
              <p className="font-medium text-gray-700 dark:text-gray-300">
                {isDragActive ? "Drop your subtitle file here" : "Upload subtitle file"}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Drag and drop your .srt file or click to browse
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};