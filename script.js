// ربط كل صفحة بالـ Playlist ID
const PLAYLISTS = {
  g1: "PLjLTHvFUYuHc_d2ljbRA2o8tlZ2fyN6T7",
  g2: "PL_G2_ID",
  g3: "PL_G3_ID",
  g4: "PL_G4_ID",
  g5: "PL_G5_ID",
  g6: "PL_G6_ID",

  p1: "PL_P1_ID",
  p2: "PL_P2_ID",
  p3: "PL_P3_ID",

  s1: "PL_S1_ID",
  s2: "PL_S2_ID",
  s3: "PL_S3_ID"
};

// اسم الصفحة الحالية (g1.html → g1)
const pageName = window.location.pathname
  .split("/")
  .pop()
  .replace(".html", "");

// Playlist ID
const playlistId = PLAYLISTS[pageName];

// تحميل البلاي ليست
if (playlistId) {
  const iframe = document.getElementById("yt-playlist");
  iframe.src = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
} else {
  document.body.innerHTML = "❌ لا توجد Playlist لهذه الصفحة";
}
