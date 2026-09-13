import { Component, OnDestroy, computed, signal } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PHOTOS } from '../data/photos';
import { Photo } from '../models/photo';

const PAGE_SIZE = 3;
const PLAY_INTERVAL_MS = 2000;
const ZOOM_MIN = 0.5;
const ZOOM_MAX = 2;
const ZOOM_STEP = 0.25;

@Component({
  selector: 'app-gallery',
  imports: [SlicePipe, MatButtonModule, MatIconModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery implements OnDestroy {
  protected readonly photos = PHOTOS;

  protected readonly selectedIndex = signal(0);
  protected readonly zoomLevel = signal(1);
  protected readonly isPlaying = signal(false);

  protected readonly selectedPhoto = computed(() => this.photos[this.selectedIndex()]);
  protected readonly canGoPrev = computed(() => this.selectedIndex() > 0);
  protected readonly canGoNext = computed(() => this.selectedIndex() < this.photos.length - 1);
  protected readonly canZoomOut = computed(() => this.zoomLevel() > ZOOM_MIN);
  protected readonly canZoomIn = computed(() => this.zoomLevel() < ZOOM_MAX);

  protected readonly frameLabel = computed(() => {
    const current = String(this.selectedIndex() + 1).padStart(2, '0');
    const total = String(this.photos.length).padStart(2, '0');
    return `${current} / ${total}`;
  });

  protected readonly totalPages = Math.ceil(this.photos.length / PAGE_SIZE);

  // currentPage is derived from selectedIndex, not an independent signal —
  // this guarantees the thumbnail page always contains the selected photo.
  protected readonly currentPage = computed(() => Math.floor(this.selectedIndex() / PAGE_SIZE));

  protected readonly pageStart = computed(() => this.currentPage() * PAGE_SIZE);
  protected readonly pageEnd = computed(() => this.pageStart() + PAGE_SIZE);
  protected readonly canGoPrevPage = computed(() => this.currentPage() > 0);
  protected readonly canGoNextPage = computed(() => this.currentPage() < this.totalPages - 1);

  private intervalId: ReturnType<typeof setInterval> | null = null;

  protected selectPhoto(photo: Photo): void {
    const index = this.photos.indexOf(photo);
    if (index !== -1) {
      this.selectedIndex.set(index);
    }
  }

  protected next(): void {
    if (this.canGoNext()) {
      this.selectedIndex.update((index) => index + 1);
    }
  }

  protected prev(): void {
    if (this.canGoPrev()) {
      this.selectedIndex.update((index) => index - 1);
    }
  }

  protected zoomIn(): void {
    this.zoomLevel.update((zoom) => Math.min(ZOOM_MAX, zoom + ZOOM_STEP));
  }

  protected zoomOut(): void {
    this.zoomLevel.update((zoom) => Math.max(ZOOM_MIN, zoom - ZOOM_STEP));
  }

  protected zoomReset(): void {
    this.zoomLevel.set(1);
  }

  protected play(): void {
    if (this.isPlaying()) return;

    this.isPlaying.set(true);
    this.intervalId = setInterval(() => {
      this.selectedIndex.update((index) => (index + 1) % this.photos.length);
    }, PLAY_INTERVAL_MS);
  }

  protected stop(): void {
    this.isPlaying.set(false);
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  protected nextPage(): void {
    if (this.canGoNextPage()) {
      this.selectedIndex.set(this.currentPage() * PAGE_SIZE + PAGE_SIZE);
    }
  }

  protected prevPage(): void {
    if (this.canGoPrevPage()) {
      this.selectedIndex.set((this.currentPage() - 1) * PAGE_SIZE);
    }
  }

  ngOnDestroy(): void {
    this.stop();
  }
}
