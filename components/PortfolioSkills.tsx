import React from 'react'

const PortfolioSkills = () => {
  return (
    <section id="skills" className="bg-secondary relative md:pt-10 px-6 lg:px-14 pb-20">
      <div className="mx-auto max-w-5xl relative">
        <h2 className="font-bold text-center text-[2.4rem] leading-snug tracking-wider">Skills & Tools</h2>

        {/* Skills Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>HTML</li>
              <li>CSS / SCSS</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Next.js</li>
              <li>TypeScript</li>
            </ul>
          </div>

          {/* Backend Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Backend</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python</li>
              <li>Django</li>
              <li>RESTful APIs</li>
              <li>GraphQL</li>
              <li>Java</li>
            </ul>
          </div>

          {/* Databases Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Databases</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Firebase</li>
            </ul>
          </div>

          {/* DevOps Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">DevOps</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>CI/CD Pipelines</li>
              <li>Jenkins</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          {/* Tools Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Version Control & Tools</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Git</li>
              <li>GitHub</li>
              <li>Bitbucket</li>
              <li>VS Code</li>
              <li>Postman</li>
            </ul>
          </div>

          {/* Certifications Section  */}
          <div className="skill-category bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>AWS Certified Practioner</li>
              <li>Google Cloud Professional</li>
              <li>Microsoft Azure Fundamentals</li>
              <li>Responsive Web Developer</li>
              <li>IT Management - Software & Databases</li>
              <li>Full-stack Developer</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}

export default PortfolioSkills