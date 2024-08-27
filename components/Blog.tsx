import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-4 lg:px-10 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Few Selection of my Blog</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Example blog post */}
            <article className="p-4 bg-secondary border rounded-lg shadow">  
                <Image 
                src="/blog01.avif" 
                alt="Blog Post" 
                className="w-full h-54 object-cover rounded-lg" 
                width={300}
                height={200}
                />
                
                <div className="pt-2">
                    <h3 className="text-lg tracking-wide font-bold">Understanding JavaScript Closures</h3>
                    <p className="mt-2 text-sm tracking-wide leading-relaxed">A deep dive into one of JavaScript's most powerful features.</p>
                    <a href="#" className="text-blue-500 mt-4 text-sm tracking-wide block">Read More</a>
                </div>
            </article>
            <article className="p-4 bg-secondary border rounded-lg shadow">
                <Image 
                    src="/blog02.avif" 
                    alt="Blog Post" 
                    className="w-full h-54 object-cover rounded-lg" 
                    width={300}
                    height={200}
                    />
                <div className="pt-2">
                    <h3 className="text-lg tracking-wide font-bold">Understanding JavaScript Closures</h3>
                    <p className="mt-2 text-sm tracking-wide leading-relaxed">A deep dive into one of JavaScript's most powerful features.</p>
                    <a href="#" className="text-blue-500 mt-4 text-sm tracking-wide block">Read More</a>
                </div>
            </article>
            <article className="p-4 bg-secondary border rounded-lg shadow">
                <Image 
                    src="/blog03.avif" 
                    alt="Blog Post" 
                    className="w-full h-54 object-cover rounded-lg" 
                    width={300}
                    height={200}
                    />
                <div className="pt-2">
                    <h3 className="text-lg tracking-wide font-bold">Understanding JavaScript Closures</h3>
                    <p className="mt-2 text-sm tracking-wide leading-relaxed">A deep dive into one of JavaScript's most powerful features.</p>
                    <a href="#" className="text-blue-500 mt-4 text-sm tracking-wide block">Read More</a>
                </div>
            </article>
            <article className="p-4 bg-secondary border rounded-lg shadow">
                <Image 
                    src="/blog04.avif" 
                    alt="Blog Post" 
                    className="w-full h-54 object-cover rounded-lg" 
                    width={300}
                    height={200}
                    />
                <div className="pt-2">
                    <h3 className="text-lg tracking-wide font-bold">Understanding JavaScript Closures</h3>
                    <p className="mt-2 text-sm tracking-wide leading-relaxed">A deep dive into one of JavaScript's most powerful features.</p>
                    <a href="#" className="text-blue-500 mt-4 text-sm tracking-wide block">Read More</a>
                </div>
            </article>
            <article className="p-4 bg-secondary border rounded-lg shadow">
                <Image 
                    src="/blog05.avif" 
                    alt="Blog Post" 
                    className="w-full h-54 object-cover rounded-lg" 
                    width={300}
                    height={200}
                    />
                <div className="pt-2">
                    <h3 className="text-lg tracking-wide font-bold">Understanding JavaScript Closures</h3>
                    <p className="mt-2 text-sm tracking-wide leading-relaxed">A deep dive into one of JavaScript's most powerful features.</p>
                    <a href="#" className="text-blue-500 mt-4 text-sm tracking-wide block">Read More</a>
                </div>
            </article>
            <article className="p-4 bg-secondary border rounded-lg shadow">
                <Image 
                    src="/blog06.avif" 
                    alt="Blog Post" 
                    className="w-full h-54 object-cover rounded-lg" 
                    width={300}
                    height={200}
                    />
                <div className="pt-2">
                    <h3 className="text-lg tracking-wide font-bold">Understanding JavaScript Closures</h3>
                    <p className="mt-2 text-sm tracking-wide leading-relaxed">A deep dive into one of JavaScript's most powerful features.</p>
                    <a href="#" className="text-blue-500 mt-4 text-sm tracking-wide block">Read More</a>
                </div>
            </article>
          
          {/* More blog posts here */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
