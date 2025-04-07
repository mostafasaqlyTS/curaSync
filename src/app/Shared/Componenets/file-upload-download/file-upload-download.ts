import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileService } from '../../../Core/Services/file.service';
import { FileDownloadResponse } from '../../../Core/Models/file/file.model';

@Component({
  selector: 'app-file-upload-download',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '././file-upload-download.html',
  styleUrls: ['./file-upload-download.css']
})
export class AppFileUploadComponent {
  selectedFile: File | null = null;
  @Output() uploadSuccess = new EventEmitter<any>();
  @Output() uploadError = new EventEmitter<any>();

  constructor(private fileService: FileService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(baseUrl: string, additionalData?: Record<string, any>): void {
    if (this.selectedFile) {
      this.fileService.uploadFile(baseUrl, this.selectedFile, additionalData).subscribe({
        next: (response) => this.uploadSuccess.emit(response),
        error: (error) => this.uploadError.emit(error)
      });
    }
  }

  downloadFile(id_file: string, token: string): void {
    this.fileService.downloadFile(id_file, token).subscribe({
      next: (response: FileDownloadResponse) => {
        const downloadUrl = response.download_url; // Extract the download URL
        const a = document.createElement('a');
        a.href = downloadUrl; // Use the URL to download the file
        a.download = ''; // Optionally, set a default file name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      },
      error: (error) => {
        console.error('Error downloading file:', error);
        alert('Failed to download the file.');
      },
    });
  }

  getFileList(baseUrl: string, params?: Record<string, string>): void {
    this.fileService.getFileList(baseUrl, params).subscribe({
      next: (response) => console.log('File List:', response),
      error: (error) => console.error('Error fetching file list:', error)
    });
  }
}
