import React from 'react'

const PortfolioSkills = () => {
  return (
    <section id="skills" className="skills-section bg-secondary py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Skills & Tools</h2>

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
            </ul>
          </div>

          {/* Backend Section */}
          <div className="skill-category bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Backend</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python</li>
              <li>Flask</li>
              <li>RESTful APIs</li>
              <li>GraphQL</li>
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
              <li>AWS Certified Developer</li>
              <li>Google Cloud Professional</li>
              <li>Microsoft Azure Fundamentals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}

export default PortfolioSkills