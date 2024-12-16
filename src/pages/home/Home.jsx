// import { request } from "@/api";
// import React, { useEffect, useState } from "react";
// import ScrollProducts from "@/components/ScrollProducts";
// import Categories from "@/components/Categories";

// import Logo_1 from "@/assets/svgs/logo_1.svg";
// import Logo_2 from "@/assets/svgs/logo_2.svg";
// import Logo_3 from "@/assets/svgs/logo_3.svg";
// import Logo_4 from "@/assets/svgs/logo_4.svg";
// import Logo_5 from "@/assets/svgs/logo_5.svg";
// import Logo_6 from "@/assets/svgs/logo_6.svg";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch products on component mount
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await request.get("/product/get");
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const logos = [Logo_1, Logo_2, Logo_3, Logo_4, Logo_5, Logo_6];

//   return (
//     <>
//       <section className="w-full bg-[#171D28] min-h-screen grid grid-cols-2 max-[850px]:grid-cols-1">
//         <div className='bg-[url("src/assets/images/heroImage.png")] bg-cover max-[850px]:h-[430px]'></div>
//         <div className="flex items-center justify-center max-[1200px]:p-10">
//           <div className="text-white w-[500px] min-h-[308px] flex flex-col items-start justify-center gap-10">
//             <h2 className="text-7xl font-medium leading-tight">
//               Bring the <br /> warmth.
//             </h2>
//             <p className="text-xl leading-relaxed">
//               Everyone needs a good winter jacket. <br />
//               Find yours with our collection and more.
//             </p>
//             <button className="py-3 px-14 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
//               Shop Now
//             </button>
//           </div>
//         </div>
//       </section>

//       <section className="container py-20">
//         <h3 className="text-center text-4xl font-medium pb-20">
//           Trending Brands
//         </h3>
//         <div className="flex items-center justify-between gap-6 flex-wrap">
//           {logos.map((logo, index) => (
//             <img
//               key={index}
//               src={logo}
//               alt={`logo-${index}`}
//               className="w-24 md:w-32"
//             />
//           ))}
//         </div>
//       </section>

//       <section className="container">
//         <div className="flex items-center justify-between pt-10">
//           <h3 className="text-5xl font-medium">Just In</h3>
//           <div className="flex gap-2">
//             <div className="w-3 h-3 rounded-full bg-slate-700 border-2 outline"></div>
//             <div className="w-3 h-3 rounded-full bg-slate-700"></div>
//             <div className="w-3 h-3 rounded-full bg-slate-700"></div>
//           </div>
//         </div>
//         <div className="pt-20">
//           {loading ? (
//             <p className="text-center py-10 text-lg">Loading...</p>
//           ) : (
//             <ScrollProducts isAdmin={false} data={products} />
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;



import React, { useEffect, useState } from "react";
import ScrollProducts from "@/components/ScrollProducts";
import Categories from "@/components/Categories";
import { request } from "@/api";

import Logo_1 from "@/assets/svgs/logo_1.svg";
import Logo_2 from "@/assets/svgs/logo_2.svg";
import Logo_3 from "@/assets/svgs/logo_3.svg";
import Logo_4 from "@/assets/svgs/logo_4.svg";
import Logo_5 from "@/assets/svgs/logo_5.svg";
import Logo_6 from "@/assets/svgs/logo_6.svg";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await request.get("/product/get");
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const logos = [Logo_1, Logo_2, Logo_3, Logo_4, Logo_5, Logo_6];

  const HeroSection = () => (
    <section className="w-full bg-[#171D28] min-h-screen grid grid-cols-2 max-[850px]:grid-cols-1">
      <div className='bg-[url("src/assets/images/heroImage.png")] bg-cover max-[850px]:h-[430px]'></div>
      <div className="flex items-center justify-center max-[1200px]:p-10">
        <div className="text-white w-[500px] min-h-[308px] flex flex-col items-start justify-center gap-10">
          <h2 className="text-7xl font-medium leading-tight">
            Bring the <br /> warmth.
          </h2>
          <p className="text-xl leading-relaxed">
            Everyone needs a good winter jacket. <br />
            Find yours with our collection and more.
          </p>
          <button className="py-3 px-14 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );

  const BrandLogosSection = () => (
    <section className="container py-20">
      <h3 className="text-center text-4xl font-medium pb-20">
        Trending Brands
      </h3>
      <div className="flex items-center justify-between gap-6 flex-wrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand logo ${index}`}
            className="w-24 md:w-32"
          />
        ))}
      </div>
    </section>
  );

  const NewArrivalsSection = () => (
    <section className="container">
      <div className="flex items-center justify-between pt-10">
        <h3 className="text-5xl font-medium">Just In</h3>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-700 border-2 outline"></div>
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
        </div>
      </div>
      <div className="pt-20">
        {loading ? (
          <p className="text-center py-10 text-lg">Loading...</p>
        ) : (
          <ScrollProducts isAdmin={false} data={products} />
        )}
      </div>
    </section>
  );

  return (
    <>
      <HeroSection />
      <BrandLogosSection />
      <NewArrivalsSection />
    </>
  );
};

export default Home;
