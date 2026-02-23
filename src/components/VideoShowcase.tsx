"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const videos = [
  {
    title: "The Art of Eyewear Crafting",
    thumbnail: "https://images.unsplash.com/photo-1764740130608-c3cf7214ebfc?w=800&q=80&fit=crop",
    duration: "2:34",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "main",
  },
  {
    title: "2026 Spring Collection",
    thumbnail: "https://images.unsplash.com/photo-1725845558921-f01f3db253e3?w=600&q=80&fit=crop",
    duration: "1:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "secondary",
  },
  {
    title: "Behind the Lens",
    thumbnail: "https://images.unsplash.com/photo-1766998162306-028b1ded919d?w=600&q=80&fit=crop",
    duration: "3:12",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "secondary",
  },
];

function PlayIcon({ size = 48 }: { size?: number }) {
  return (
    <div
      className="rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(201,169,110,0.3)]"
      style={{ width: size, height: size }}
    >
      <svg
        className="text-primary ml-0.5"
        width={size * 0.4}
        height={size * 0.4}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.05),transparent_60%)]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-accent" />
            <p className="text-accent text-xs tracking-[0.3em] uppercase">
              Watch
            </p>
            <div className="w-8 h-[1px] bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            See It In <span className="text-gradient">Motion</span>
          </h2>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main Video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer lg:col-span-1 lg:row-span-2"
            onClick={() => setActiveVideo(videos[0].videoUrl)}
          >
            {activeVideo === videos[0].videoUrl ? (
              <iframe
                src={`${videos[0].videoUrl}?autoplay=1`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <>
                <Image
                  src={videos[0].thumbnail}
                  alt={videos[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <PlayIcon size={64} />
                  <p className="mt-4 text-sm font-medium tracking-wider">{videos[0].title}</p>
                  <p className="text-white/40 text-xs mt-1">{videos[0].duration}</p>
                </div>
              </>
            )}
          </motion.div>

          {/* Secondary Videos */}
          {videos.slice(1).map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * (i + 1) }}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setActiveVideo(video.videoUrl)}
            >
              {activeVideo === video.videoUrl ? (
                <iframe
                  src={`${video.videoUrl}?autoplay=1`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <PlayIcon size={48} />
                    <p className="mt-3 text-sm font-medium tracking-wider">{video.title}</p>
                    <p className="text-white/40 text-xs mt-1">{video.duration}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
