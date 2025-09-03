"use client";

export default function GratitudeSection() {
  const gratitudeTypes = [
    {
      id: 1,
      title: "GRATITUDE GIFTS FOR CLIENTS",
      icon: (
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 mb-6">
          <div className="text-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full mb-1"></div>
            <div className="w-4 h-2 bg-gray-300 rounded mx-auto"></div>
          </div>
        </div>
      ),
      description: "Express your gratitude to your clients for their loyalty and support in another year of working together with gifts that are both useful and memorable."
    },
    {
      id: 2,
      title: "EMPLOYEE APPRECIATION GIFTS",
      icon: (
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 mb-6">
          <div className="text-center">
            <div className="w-12 h-8 bg-gray-300 rounded mb-1"></div>
            <div className="w-8 h-2 bg-gray-300 rounded mx-auto"></div>
          </div>
        </div>
      ),
      description: "A business is only as successful as its team members make it to be. The gesture of giving gifts allows you show appreciation for their continued effort to realize the mission of the company."
    },
    {
      id: 3,
      title: "TOKENS FOR EVENTS OR PARTNERS",
      icon: (
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 mb-6">
          <div className="text-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mb-1"></div>
            <div className="w-6 h-2 bg-gray-300 rounded mx-auto"></div>
          </div>
        </div>
      ),
      description: "Give unique gifts to your event guests that will make them remember your event fondly or to your community and business partners that will build goodwill for a more fruitful relationship."
    }
  ];

  return (
    <section className="golden-tag-section bg-white">
      <div className="golden-tag-container">
        {/* Section Divider */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="text-3xl font-bold text-amber-600">
              STORE
            </div>
          </div>
          <div className="w-32 h-px bg-amber-300 mx-auto mb-4"></div>
          <h2 className="golden-tag-heading">A LITTLE GRATITUDE GOES A LONG WAY</h2>
          <p className="text-amber-600 font-semibold text-lg">Our Approach to Meaningful Corporate Gifting</p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {gratitudeTypes.map((type) => (
            <div key={type.id} className="text-center group hover:bg-amber-50 p-6 rounded-lg transition-colors duration-200">
              <div className="flex justify-center relative">
                {type.icon}
                <div className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                  GT
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-amber-600 transition-colors">
                {type.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
