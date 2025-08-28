
import React, { useState, useRef, useCallback } from 'react';
import { X, Play, Pause, Maximize2, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MediaViewerProps {
  src: string;
  alt?: string;
  caption?: string;
  type?: 'image' | 'video';
  lightbox?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
  width?: string | number;
  height?: string | number;
  poster?: string;
}

export function MediaViewer({
  src,
  alt = '',
  caption,
  type,
  lightbox = true,
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
  className,
  width,
  height,
  poster
}: MediaViewerProps) {
  // Auto-detect media type if not provided
  const detectedType = type || (src.match(/\.(mp4|webm|ogg|mov|avi)$/i) ? 'video' : 'image');
  
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);

  const openLightbox = useCallback(() => {
    if (lightbox) {
      setIsLightboxOpen(true);
      // Pause main video when opening lightbox
      if (detectedType === 'video' && videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [lightbox, detectedType]);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setIsPlaying(false);
    // Pause lightbox video when closing
    if (lightboxVideoRef.current) {
      lightboxVideoRef.current.pause();
    }
  }, []);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  }, [closeLightbox]);

  const togglePlay = useCallback(() => {
    const video = isLightboxOpen ? lightboxVideoRef.current : videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  }, [isLightboxOpen]);

  const toggleMute = useCallback(() => {
    const video = isLightboxOpen ? lightboxVideoRef.current : videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  }, [isLightboxOpen]);

  const handleVideoClick = useCallback(() => {
    if (lightbox) {
      openLightbox();
    } else {
      togglePlay();
    }
  }, [lightbox, openLightbox, togglePlay]);

  // Handle keyboard events for accessibility
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isLightboxOpen) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === ' ' && detectedType === 'video') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'm' && detectedType === 'video') {
        e.preventDefault();
        toggleMute();
      }
    }
  }, [isLightboxOpen, detectedType, closeLightbox, togglePlay, toggleMute]);

  React.useEffect(() => {
    if (isLightboxOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen, handleKeyDown]);

  const mediaStyle = {
    width: width || 'auto',
    height: height || 'auto',
    border: !lightbox ? "none" : undefined,
    boxShadow: !lightbox ? "none" : undefined
  };

  const renderMedia = (isLightboxVersion = false) => {
    const commonClasses = cn(
      "rounded-lg transition-all duration-300",
      {
        "cursor-pointer hover:opacity-90 hover:scale-[1.02]": lightbox && !isLightboxVersion,
        "shadow-sm border": !isLightboxVersion,
        "max-w-[90vw] max-h-[90vh] shadow-2xl": isLightboxVersion
      }
    );
    
    console.log("MediaViewer rendering:", { src, detectedType, isLightboxVersion });
    
    if (detectedType === 'image') {
      return (
        <img
          src={src}
          alt={alt}
          className={cn(commonClasses, "object-contain w-full", {
            "h-[400px]": !isLightboxVersion && !height,
            "object-cover": isLightboxVersion
          })}
          style={!isLightboxVersion ? mediaStyle : undefined}
          onClick={!isLightboxVersion ? openLightbox : undefined}
        />
      );
    }

    return (
      <div className="relative group">
        <video
          ref={isLightboxVersion ? lightboxVideoRef : videoRef}
          src={src}
          poster={poster}
          className={cn(commonClasses, "object-contain w-full", {
            "h-[400px]": !isLightboxVersion && !height
          })}
          style={!isLightboxVersion ? mediaStyle : undefined}
          autoPlay={isLightboxVersion ? false : autoPlay}
          muted={isMuted}
          loop={loop}
          controls={isLightboxVersion ? controls : controls && !lightbox}
          playsInline
          onClick={handleVideoClick}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {/* Video overlay controls for non-lightbox version */}
        {!isLightboxVersion && lightbox && (
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
            <div className="bg-white/90 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <Play className="w-8 h-8 text-gray-800 ml-1" />
            </div>
          </div>
        )}

        {/* Lightbox video controls */}
        {isLightboxVersion && (
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              
              <button
                onClick={toggleMute}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
              </button>
            </div>
            
            <div className="text-white text-sm">
              Press ESC to close • Space to play/pause • M to mute
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <figure className={cn("my-6", className)}>
        {renderMedia()}
        {caption && (
          <figcaption className="mt-2 text-sm text-muted-foreground text-center italic">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in-0 duration-300"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label="Media lightbox"
        >
          <div className="relative p-4 animate-in zoom-in-95 duration-300">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-2 -right-2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors duration-200"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            
            {/* Fullscreen button for videos */}
            {detectedType === 'video' && (
              <button
                onClick={() => {
                  if (lightboxVideoRef.current) {
                    if (lightboxVideoRef.current.requestFullscreen) {
                      lightboxVideoRef.current.requestFullscreen();
                    }
                  }
                }}
                className="absolute top-2 right-12 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors duration-200"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-5 h-5 text-gray-600" />
              </button>
            )}
            
            {/* Media content */}
            {renderMedia(true)}
          </div>
        </div>
      )}
    </div>
  );
}
