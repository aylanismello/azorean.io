#!/bin/bash

# === CONFIGURATION ===
VIDEO_URL="https://www.youtube.com/watch?v=vO_Xm8NoRAg"
START_TIME="00:01:00"     # Change this to your desired start
END_TIME="00:01:15"       # Change this to your desired end
OUTPUT_NAME="azores_clip" # Base name without extension

# === DOWNLOAD CLIP ONLY (minimal download) ===
yt-dlp \
  --download-sections "*${START_TIME}-${END_TIME}" \
  -f bestvideo[ext=mp4]+bestaudio[ext=m4a]/mp4 \
  -o "${OUTPUT_NAME}.%(ext)s" \
  "$VIDEO_URL"

echo "✅ Clip downloaded: ${OUTPUT_NAME}.mp4"