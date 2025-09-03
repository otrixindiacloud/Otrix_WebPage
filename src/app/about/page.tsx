"use client";

import { Metadata } from "next";



export default function About() {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="bg-muted py-16">
        <div className="golden-tag-container">
          <h1 className="golden-tag-heading">About Us</h1>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
            Your trusted partner in corporate gifting since 2015
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="golden-tag-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Company Story */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Founded in 2015, we have been at the forefront of gifting in the Kingdom of Bahrain. 
                We understand that the right gift can strengthen business relationships, boost employee morale, and 
                create lasting impressions with clients and partners.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our commitment to quality and attention to detail has made us the preferred choice for leading 
                multinational companies seeking premium gifts that reflect their brand values and 
                commitment to excellence.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-2xl font-bold">8+</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Years of Excellence</p>
                  <p className="text-muted-foreground">Serving corporate clients</p>
                </div>
              </div>
            </div>

            {/* Company Values */}
            <div className="space-y-8">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  We source only the finest materials and work with skilled artisans to create gifts that 
                  exceed expectations and stand the test of time.
                </p>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">Customization</h3>
                <p className="text-muted-foreground">
                  Every gift can be personalized with your company logo, colors, and messaging to create 
                  a unique brand experience.
                </p>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">Customer Service</h3>
                <p className="text-muted-foreground">
                  Our dedicated team works closely with you to understand your needs and deliver solutions 
                  that perfectly align with your corporate gifting strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="golden-tag-container text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            To provide exceptional gifts that strengthen business relationships, 
            enhance brand recognition, and create meaningful connections between companies 
            and their stakeholders.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="golden-tag-container">
          <h2 className="golden-tag-heading">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Ahmed Al-Mansouri</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Fatima Al-Zahra</h3>
              <p className="text-muted-foreground">Creative Director</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Omar Al-Rashid</h3>
              <p className="text-muted-foreground">Operations Manager</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
