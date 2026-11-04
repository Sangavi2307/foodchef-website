import React from 'react';
import { Search, ShoppingBag, MapPin, Truck, Sparkles } from 'lucide-react';

export const HowOrderingWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Explore Food',
      desc: 'Browse different categories and discover your favourite snacks.',
      icon: Search,
      color: 'bg-[#FFC928] text-[#542D22]'
    },
    {
      num: '02',
      title: 'Add to Cart',
      desc: 'Choose products and select your preferred quantity.',
      icon: ShoppingBag,
      color: 'bg-[#173F35] text-white'
    },
    {
      num: '03',
      title: 'Enter Delivery Details',
      desc: 'Provide your district, locality, address and preferred hotel information.',
      icon: MapPin,
      color: 'bg-[#E63925] text-white'
    },
    {
      num: '04',
      title: 'Track Your Order',
      desc: 'Follow the order status from confirmation to delivery.',
      icon: Truck,
      color: 'bg-[#542D22] text-[#FFC928]'
    }
  ];

  return (
    <section id="how" className="py-24 bg-[#FFF4DF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#173F35]/10 border border-[#173F35] text-[#173F35] text-xs font-black uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Seamless 4-Step Process
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-[#542D22] font-display mb-14">
          HOW ORDERING <span className="text-[#E63925]">WORKS</span>
        </h2>

        {/* Step Cards with Connecting Line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="bg-white rounded-3xl p-6 shadow-md border-2 border-[#FFC928]/40 text-left relative flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black font-display text-[#E63925]">{st.num}</span>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-md ${st.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-[#542D22] font-display mb-2">{st.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-medium">{st.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-black text-[#E63925]">
                  <span>Step {i + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
