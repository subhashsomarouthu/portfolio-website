import { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xqedkjjn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900/60 to-purple-900/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm currently seeking new opportunities in data science and analytics.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-4">
                <a href="mailto:pavanchakravarthy2000@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                  <div className="bg-purple-500/20 p-3 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold">pavanchakravarthy2000@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+14379662274" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                  <div className="bg-cyan-500/20 p-3 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-semibold">+1 (437) 966-2274</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-semibold">Toronto, Canada</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-purple-500/20">
                <p className="text-gray-400 mb-4">Connect with me on:</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/subhashsomarouthu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500/20 p-3 rounded-lg hover:bg-purple-500/30 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/subhash-somarouthu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500/20 p-3 rounded-lg hover:bg-cyan-500/30 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-900/60 to-purple-900/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'sent' && (
                <p className="text-green-400 text-center text-sm">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center text-sm">Failed to send. Please email me directly.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
