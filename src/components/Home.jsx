import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Unleash Your Creativity with AI Art
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Transform your ideas into stunning artwork using our advanced AI. Create, collect, and share unique digital masterpieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/generate')}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 shadow-lg shadow-indigo-500/25 transform hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Start Creating
              </button>
              <button 
                onClick={() => navigate('/collections')}
                className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-xl border border-indigo-200 hover:bg-indigo-50 transform hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                View Collections
              </button>
            </div>
          </div>
          
          {/* Example image */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 blur-3xl opacity-20 rounded-3xl transform -rotate-1"></div>
            <div className="bg-white/30 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-white/40 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 rounded-xl overflow-hidden">
                <div className="aspect-square md:aspect-auto md:row-span-2 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="AI Generated Art"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1664013263421-91e3a8101259?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="AI Generated Art" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1593073010991-be40fb54bef0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="AI Generated Art" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-1 md:col-span-2 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1578320339840-73f0a565894c?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="AI Generated Art" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Our AI Art Studio</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our platform offers a seamless experience to create and manage AI-generated artwork with powerful tools and features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 shadow-md border border-indigo-100 transform hover:scale-[1.03] transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Advanced Prompting</h3>
              <p className="text-gray-600">
                Create detailed prompts with style and medium specifications to generate exactly the artwork you envision.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-md border border-purple-100 transform hover:scale-[1.03] transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Personal Collections</h3>
              <p className="text-gray-600">
                Save your favorite generated images to your personal collection for easy access and sharing.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-pink-50 to-indigo-50 rounded-xl p-6 shadow-md border border-pink-100 transform hover:scale-[1.03] transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 00-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Easy Download</h3>
              <p className="text-gray-600">
                Download and share your AI-generated masterpieces instantly with just a single click.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Masterpiece?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of creatives using our AI art generator to bring their ideas to life.
          </p>
          <button 
            onClick={() => navigate('/generate')}
            className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-xl hover:bg-gray-100 transform hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home