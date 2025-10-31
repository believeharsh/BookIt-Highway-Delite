// import { useEffect, useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../store/hooks';
// import { fetchExperiences, fetchCategories, setFilters } from '../store/slices/experienceSlice';
// import ExperienceCard from '../components/ExperienceCard';
// import Loader from '../components/Loader';

// const Home = () => {
//   const dispatch = useAppDispatch();
//   const { experiences, categories, loading, filters } = useAppSelector((state) => state.experience);

//   const [searchInput, setSearchInput] = useState('');

//   useEffect(() => {
//     dispatch(fetchCategories());
//     // dispatch(fetchExperiences());
//   }, [dispatch]);

//   const handleSearch = () => {
//     dispatch(setFilters({ search: searchInput }));
//     dispatch(fetchExperiences({ ...filters, search: searchInput }));
//   };

//   const handleCategoryFilter = (category: string) => {
//     const newCategory = category === filters.category ? '' : category;
//     dispatch(setFilters({ category: newCategory }));
//     dispatch(fetchExperiences({ ...filters, category: newCategory }));
//   };

//   return (
//     <div className="min-h-screen bg-yellow-50">
//       {/* Hero Section with Highway Background */}
//       <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
//             alt="Highway"
//             className="w-full h-full object-cover"
//           />
//           {/* Dark overlay for better text readability */}
//           <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent"></div>
//           {/* Yellow accent overlay */}
//           <div className="absolute inset-0 bg-yellow-400/10"></div>
//         </div>

//         {/* Animated road lines */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 opacity-30 animate-pulse"></div>
//           <div className="absolute top-1/2 left-0 w-32 h-1 bg-yellow-400 animate-[slide_3s_linear_infinite]"></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
//           <div className="max-w-4xl mx-auto text-center">
//             {/* Subtitle */}
//             <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold shadow-lg">
//               <span className="text-2xl">🛣️</span>
//               <span>Highway Delite Experiences</span>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
//               Discover Amazing
//               <span className="block text-yellow-400 mt-2">Experiences</span>
//             </h1>
            
//             {/* Description */}
//             <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
//               Book unforgettable adventures and create lasting memories on your journey
//             </p>
            
//             {/* Search Bar */}
//             <div className="flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto">
//               <div className="flex-1 relative">
//                 <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
//                   🔍
//                 </span>
//                 <input
//                   type="text"
//                   value={searchInput}
//                   onChange={(e) => setSearchInput(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//                   placeholder="Search experiences, locations, activities..."
//                   className="w-full pl-14 pr-6 py-5 rounded-2xl text-black bg-white outline-none border-2 border-transparent focus:border-yellow-400 shadow-2xl text-lg transition-all"
//                 />
//               </div>
//               <button
//                 onClick={handleSearch}
//                 className="px-10 py-5 bg-yellow-400 text-black hover:bg-yellow-500 rounded-2xl font-bold text-lg transition-all shadow-2xl hover:shadow-yellow-400/50 hover:scale-105 whitespace-nowrap"
//               >
//                 Search Now
//               </button>
//             </div>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
//               <div className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">50+</div>
//                 <div className="text-sm md:text-base text-gray-300">Experiences</div>
//               </div>
//               <div className="text-center border-x border-gray-600">
//                 <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">8</div>
//                 <div className="text-sm md:text-base text-gray-300">Categories</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">1000+</div>
//                 <div className="text-sm md:text-base text-gray-300">Happy Travelers</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Filters Section */}
//       <section className="py-2 bg-white shadow-lg sticky top-18 z-40">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
//             <span className="font-bold text-gray-700 whitespace-nowrap flex items-center gap-2">
//               Categories:
//             </span>
//             <button
//               onClick={() => handleCategoryFilter('')}
//               className={`
//                 px-6 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all shadow-md hover:shadow-lg
//                 ${!filters.category
//                   ? 'bg-black text-yellow-400 scale-105'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }
//               `}
//             >
//               All
//             </button>
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => handleCategoryFilter(category)}
//                 className={`
//                   cursor-pointer px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all shadow-md hover:shadow-lg
//                   ${filters.category === category
//                     ? 'bg-black text-yellow-400 scale-105'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }
//                 `}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Badge */}
//       {filters.category && (
//         <section className="py-6 bg-linear-to-r from-yellow-400 to-yellow-500">
//           <div className="max-w-6xl mx-auto px-4">
//             <div className="flex items-center justify-center gap-3 text-black">
//               <span className="text-2xl">✨</span>
//               <span className="text-lg font-bold">
//                 Showing {filters.category} Experiences
//               </span>
//               <button
//                 onClick={() => handleCategoryFilter('')}
//                 className="ml-4 px-4 py-1 bg-black text-yellow-400 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
//               >
//                 Clear Filter
//               </button>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Experiences Grid */}
//       <section className="py-16 bg-white">
//         <div className="max-w-6xl mx-auto px-4">
//           {loading ? (
//             <Loader />
//           ) : experiences.length === 0 ? (
//             <div className="text-center py-20">
//               <div className="text-6xl mb-4">🔍</div>
//               <h3 className="text-2xl font-bold mb-2 text-gray-800">No experiences found</h3>
//               <p className="text-lg text-gray-600 mb-6">
//                 Try adjusting your filters or search query
//               </p>
//               <button
//                 onClick={() => {
//                   dispatch(setFilters({ search: '', category: '' }));
//                   // dispatch(fetchExperiences());
//                   setSearchInput('');
//                 }}
//                 className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition-colors"
//               >
//                 Reset Filters
//               </button>
//             </div>
//           ) : (
//             <>
//               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
//                 <div>
//                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//                     {filters.category ? `${filters.category} Experiences` : 'All Experiences'}
//                   </h2>
//                   <p className="text-gray-600 mt-2">
//                     {experiences.length} {experiences.length === 1 ? 'experience' : 'experiences'} available
//                   </p>
//                 </div>
                
//                 {/* Sort Options (optional) */}
//                 <select className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg font-semibold text-gray-700 focus:border-yellow-400 outline-none cursor-pointer">
//                   <option>Sort by: Popular</option>
//                   <option>Price: Low to High</option>
//                   <option>Price: High to Low</option>
//                   <option>Rating: High to Low</option>
//                 </select>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {experiences.map((experience) => (
//                   <ExperienceCard key={experience._id} experience={experience} />
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-linear-to-r from-black via-gray-900 to-black text-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Ready for Your Next Adventure?
//           </h2>
//           <p className="text-xl text-gray-300 mb-8">
//             Join thousands of travelers who trust Highway Delite for unforgettable experiences
//           </p>
//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             className="px-10 py-4 bg-yellow-400 text-black rounded-full font-bold text-lg hover:bg-yellow-500 transition-all shadow-2xl hover:shadow-yellow-400/50 hover:scale-105"
//           >
//             Explore All Experiences
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;








import { useEffect, useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchExperiences, fetchCategories, setFilters } from '../store/slices/experienceSlice';
import ExperienceCard from '../components/ExperienceCard';
import Loader from '../components/Loader';

const Home = () => {
  const dispatch = useAppDispatch();
  const { experiences, categories, loading, filters } = useAppSelector((state) => state.experience);

  const [searchInput, setSearchInput] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const experienceSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch(fetchCategories());

    const handleScroll = () => {
      const section = experienceSectionRef.current;
      if (!section) return;

      const { top } = section.getBoundingClientRect();
      setIsSticky(top <= 100); // when the experience section reaches near the top
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(setFilters({ search: searchInput }));
    dispatch(fetchExperiences({ ...filters, search: searchInput }));
  };

  const handleCategoryFilter = (category: string) => {
    const newCategory = category === filters.category ? '' : category;
    dispatch(setFilters({ category: newCategory }));
    dispatch(fetchExperiences({ ...filters, category: newCategory }));
  };

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
            alt="Highway"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-yellow-400/10"></div>
        </div>

        {/* Animated road lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-32 h-1 bg-yellow-400 animate-[slide_3s_linear_infinite]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold shadow-lg mb-6">
            <span className="text-2xl">🛣️</span>
            <span>Highway Delite Experiences</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Discover Amazing
            <span className="block text-yellow-400 mt-2">Experiences</span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
            Book unforgettable adventures and create lasting memories on your journey
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto">
            <div className="flex-1 relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔍</span>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search experiences, locations, activities..."
                className="w-full pl-14 pr-6 py-4 rounded-xl text-black bg-white outline-none border-2 border-transparent focus:border-yellow-400 shadow-xl text-lg transition-all"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-8 py-4 bg-yellow-400 text-black hover:bg-yellow-500 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-yellow-400/50 hover:scale-105"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <section
        className={`bg-white shadow-md transition-all duration-300 ${
          isSticky ? 'fixed top-0 left-0 right-0 z-50 scale-95 py-2 rounded-md border border-yellow-300' : 'relative py-3 mt-2 '
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <span className="font-bold text-gray-700 whitespace-nowrap">Categories:</span>
            <button
              onClick={() => handleCategoryFilter('')}
              className={`px-4 py-1.5 rounded-full font-semibold transition-all shadow-sm ${
                !filters.category
                  ? 'bg-black text-yellow-400 scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-1.5 rounded-full font-semibold transition-all shadow-sm ${
                  filters.category === category
                    ? 'bg-black text-yellow-400 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section ref={experienceSectionRef} className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {loading ? (
            <Loader />
          ) : experiences.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">No experiences found</h3>
              <p className="text-lg text-gray-600 mb-6">Try adjusting your filters or search query</p>
              <button
                onClick={() => {
                  dispatch(setFilters({ search: '', category: '' }));
                  setSearchInput('');
                }}
                className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {filters.category ? `${filters.category} Experiences` : 'All Experiences'}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {experiences.length}{' '}
                    {experiences.length === 1 ? 'experience' : 'experiences'} available
                  </p>
                </div>

                <select className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg font-semibold text-gray-700 focus:border-yellow-400 outline-none cursor-pointer">
                  <option>Sort by: Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating: High to Low</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {experiences.map((experience) => (
                  <ExperienceCard key={experience._id} experience={experience} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
