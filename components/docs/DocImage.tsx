"use client";
import React from 'react';
import { MediaViewer } from '@/components/ui/MediaViewer';

interface DocsImageProps {
  src: string;
  alt?: string;
  caption?: string;
  width?: any;
  height?: any;
  type?: 'image' | 'video';
  lightbox?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  poster?: string;
}

export function DocImage({ 
  src, 
  alt, 
  caption, 
  width, 
  height,
  type,
  lightbox,
  autoPlay,
  muted,
  loop,
  controls,
  poster
}: DocsImageProps) {
  return (
    <div>
    <MediaViewer
      src={src}
      alt={alt}
      caption={caption}
      type={type}
      lightbox={lightbox}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      controls={controls}
      width={width}
      height={height}
      poster={poster}
    />
    </div>
  );
};
export default DocImage;
