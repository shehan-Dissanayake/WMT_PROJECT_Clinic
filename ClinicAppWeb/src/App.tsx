import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, ShieldCheck, Stethoscope, ArrowRight, Clock, Calendar, Activity } from 'lucide-react';

export default function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-zinc-950 text-white font-sans">
      {/* BACKGROUND VIDEO PLACEHOLDER */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
        src="https://cdn.pixabay.com/video/2023/06/20/167990-838153406_large.mp4"
      />
      
      {/* ATMOSPHERIC OVERLAY */}
      <div className="absolute inset-0 bg-zinc-950/70 backdrop-blur-md" />
      
      {/* VOLUMETRIC GLOWING MESH GRADIENTS */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" 
      />

      {/* 
        ==================================================
        EXPERIENCE 1: DESKTOP / WEB VIEW (Hidden on Mobile)
        ================================================== 
      */}
      <div className="hidden md:flex relative z-10 w-full h-screen max-w-7xl mx-auto items-center justify-between px-12">
        
        {/* Left Side: Hero Text & Features */}
        <div className="flex flex-col w-1/2 pr-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
              The Future of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Healthcare Booking</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-10 max-w-lg leading-relaxed">
              Experience the $90k premium standard of clinic management. Seamlessly connect with top-tier medical professionals anytime, anywhere.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-lg font-bold shadow-[0_0_40px_-10px_rgba(34,211,238,0.4)] hover:bg-white/20 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span>Enter Portal</span>
              <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Bento Box Features */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 gap-4 mt-16"
          >
            {[
              { icon: Clock, title: "24/7 Booking", color: "text-cyan-400" },
              { icon: Stethoscope, title: "Top Doctors", color: "text-purple-400" },
              { icon: ShieldCheck, title: "Secure Records", color: "text-emerald-400" },
              { icon: Activity, title: "Live Tracking", color: "text-blue-400" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.3)" }}
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl cursor-pointer transition-colors"
              >
                <div className={`p-3 rounded-xl bg-white/5 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <span className="font-bold text-zinc-200">{feature.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: 3D Floating Glassmorphic Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-1/2 flex justify-center"
          style={{ perspective: 1000 }}
        >
          <motion.div 
            animate={{ rotateY: [-5, 5, -5], rotateX: [5, -5, 5], y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[400px] p-8 bg-zinc-900/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_0_80px_-20px_rgba(120,0,255,0.3)] relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500" />
            
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                  <HeartPulse className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Quick Book</h3>
                  <p className="text-xs text-zinc-400">Next Available Slot</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30">Live</span>
            </div>

            <div className="space-y-4">
              <div className="h-14 w-full bg-white/5 rounded-xl border border-white/5 flex items-center px-4 gap-3">
                <Stethoscope className="w-5 h-5 text-zinc-400" />
                <div className="flex-1 h-4 bg-white/10 rounded-full" />
              </div>
              <div className="h-14 w-full bg-white/5 rounded-xl border border-white/5 flex items-center px-4 gap-3">
                <Calendar className="w-5 h-5 text-zinc-400" />
                <div className="w-1/2 h-4 bg-white/10 rounded-full" />
              </div>
            </div>

            <button className="w-full mt-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl font-bold text-lg shadow-[0_10px_30px_-10px_rgba(192,132,252,0.5)]">
              Confirm Appointment
            </button>
          </motion.div>
        </motion.div>

      </div>

      {/* 
        ==================================================
        EXPERIENCE 2: MOBILE APP VIEW (Hidden on Desktop)
        ================================================== 
      */}
      <div className="flex md:hidden relative z-10 w-full h-screen flex-col items-center justify-between pb-12 pt-24 px-6">
        
        {/* Top Spacer */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          
          {/* Stunning 3D Animated Icon */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative mb-12"
          >
            {/* Glowing Backdrop */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] rounded-full border border-cyan-500/30 border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-40px] rounded-full border border-purple-500/20 border-dotted"
            />
            
            {/* Main 3D Floating Icon */}
            <motion.div 
              animate={{ rotateY: [0, 360], y: [-10, 10, -10] }}
              transition={{ 
                rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-32 h-32 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-[0_0_60px_-10px_rgba(34,211,238,0.6)] border-2 border-white/20"
              style={{ transformStyle: "preserve-3d" }}
            >
              <HeartPulse className="w-16 h-16 text-white drop-shadow-2xl" />
            </motion.div>
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl font-extrabold tracking-tight mb-2">
              Smart Booking
            </h2>
            <p className="text-zinc-400 font-medium text-lg px-8">
              Your health, scheduled in seconds.
            </p>
          </motion.div>
        </div>

        {/* Bottom Call To Action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-sm"
        >
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="relative w-full py-5 rounded-full overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 flex justify-center items-center gap-3 shadow-[0_0_50px_-15px_rgba(192,132,252,0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-cyan-500/50 opacity-0 active:opacity-100 transition-opacity" />
            <span className="font-bold text-xl tracking-wide">Open App</span>
            <ArrowRight className="w-6 h-6 text-white" />
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}
