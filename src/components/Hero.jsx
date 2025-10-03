import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Typewriter } from 'react-simple-typewriter'
import myPhoto from '../assets/myPhoto.jpg'

const Hero = () => {
  return (
    <section id="hero" className="h-screen bg-gray-100 dark:bg-black flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Left Side: Text */}
        <div className="flex-1 mb-10 md:mb-0 mt-5" data-aos="fade-right">
          <h1
            className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-4 leading-tight tracking-tight drop-shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Hi, I'm <span className="text-blue-500">Akshay Parekh</span>
            <br />
            <span className="text-lg md:text-3xl text-blue-400">
              <Typewriter
                words={[
                  'Full Stack Developer',
                  'MERN & Laravel Enthusiast',
                  'CSE @ Parul University',
                  'Problem Solver',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Photo with 3D Animated Background */}
        <div className="flex-1 relative w-full h-80 md:h-96 mt-10 md:mt-0" data-aos="fade-left">
          {/* Three.js Background */}
          <div className="absolute inset-0 z-0">
            <Canvas>
              <ambientLight intensity={1} />
              <directionalLight position={[2, 1, 1]} />
              <OrbitControls enableZoom={false} />
              <Sphere args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                  color="#3B82F6"
                  distort={0.4}
                  speed={2}
                />
              </Sphere>
            </Canvas>
          </div>

          {/* Profile Photo */}
          <div className="relative w-full h-full flex items-center justify-center z-10">
            <img 
              src={myPhoto} 
              alt="Akshay Parekh" 
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero
