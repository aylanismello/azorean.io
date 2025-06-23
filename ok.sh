#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <YouTube_URL> [start_time]"
  exit 1
fi

VIDEO_URL="$1"
START_TIME="${2:-00:00:00}"
DURATION="15"
TEMP_FILE="full_video.mp4"
TRIMMED_FILE="trimmed_clip.mp4"
FINAL_FILE="azores_clip.mp4"

# 1. Download entire video in smallest reasonable size
yt-dlp -f "bestvideo[ext=mp4][height<=1080]+bestaudio[ext=m4a]/mp4" -o "$TEMP_FILE" "$VIDEO_URL"

# 2. Trim 15s clip from START_TIME
ffmpeg -y -ss "$START_TIME" -i "$TEMP_FILE" -t "$DURATION" -c copy "$TRIMMED_FILE"

# 3. Compress to final output (maintain 1080p, crush size)
ffmpeg -y -i "$TRIMMED_FILE" \
  -vf "scale=-2:1080" \
  -c:v libx264 -preset veryslow -crf 32 \
  -c:a aac -b:a 96k \
  "$FINAL_FILE"

# 4. Cleanup
rm "$TEMP_FILE" "$TRIMMED_FILE"

echo "✅ Done: $FINAL_FILE"