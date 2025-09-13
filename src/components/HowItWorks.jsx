import react from 'react'

export default function HowItWorks() {
  return (
    <section className="bg-white py-12 w-full">
      <div className="max-w-xl mx-auto text-center mb-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.</p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {cardData.map((card, idx) => (
          <div
            key={card.title}
            className="bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center p-6 text-center"
          >
            {card.icon}
            <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-gray-500 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const cardData = [
  {
    title: "Discover Online",
    icon: (
      <svg className="w-8 h-8 text-blue-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 2" /></svg>
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Verified by the Community",
    icon: (
      <svg className="w-8 h-8 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
    ),
    desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Open for All",
    icon: (
      <svg className="w-8 h-8 text-purple-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /></svg>
    ),
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  }
];

