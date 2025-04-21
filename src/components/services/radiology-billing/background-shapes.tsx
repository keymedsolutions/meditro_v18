"use client"

export function BackgroundShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white"></div>

      {/* Animated blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-blue-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-4 border-purple-200 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-blue-100 rounded-lg transform rotate-45 opacity-20"></div>
      <div className="absolute bottom-1/2 left-1/4 w-24 h-24 bg-purple-100 rounded-lg transform rotate-12 opacity-20"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAydi0xaC0xdjFoMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAydi0xaC0xdjFoMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tNCAwaDFWOWgtMXYxem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xem0wIDJoMXYxaC0xdi0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
    </div>
  )
}
