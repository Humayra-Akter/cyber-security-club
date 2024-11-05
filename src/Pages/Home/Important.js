// import React from "react";
// import imp1 from "../../images/imp-1.png";
// import imp2 from "../../images/imp-2.jpg";
// import imp3 from "../../images/imp-3.png";
// import imp4 from "../../images/imp-4.png";

// const Important = () => {
//   return (
//     // <div className='bg-gradient-to-r from-secondary to-primary'>
//     <div>
//       <h1 className="text-black font-bold text-3xl pt-32 pb-6 text-center">
//         Why Cyber Security Is Important?
//       </h1>
//       <div className="lg:flex p-10">
//         <div class="card p-10 w-96 border-l-primary">
//           <figure>
//             <img src={imp1} alt="cyber issue" />
//           </figure>
//           <h1 className="text-green-900 font-bold text-xl pt-8 pb-12 text-center">
//             Cyber Bullying
//           </h1>
//           <p>
//             Cyber bullying is bullying that takes place over digital devices
//             like cell phones, computers, and tablets. Cyberbullying can occur
//             through SMS, Text, and apps, or online in social media, forums, or
//             gaming where people can view, participate in, or share content.{" "}
//           </p>
//         </div>
//         <div class="card p-10 w-96">
//           <figure>
//             <img src={imp2} alt="cyber issue" />
//           </figure>
//           <h1 className="text-green-900 font-bold text-xl pt-8 pb-12 text-center">
//             Data Thrifting
//           </h1>
//           <p>
//             Thrifted items could be very, VERY old. But you can also
//             occasionally find brand new items at thrift stores . In my opinion,
//             what makes thrifting so special is that you aren’t really going
//             thrifting with the intent of buying one specific item because you
//             never know what you are going to find! It’s like treasure hunting.
//           </p>
//         </div>
//         <div class="card p-10 w-96">
//           <figure>
//             <img src={imp3} alt="cyber issue" />
//           </figure>
//           <h1 className="text-green-900 font-bold text-xl pt-8 pb-12 text-center">
//             Cyber Attacks
//           </h1>
//           <p>
//             A cyber attack is any attempt to gain unauthorized access to a
//             computer, computing system or computer network with the intent to
//             cause damage. Cyber attacks aim to disable, disrupt, destroy or
//             control computer systems or to alter, block, delete, manipulate or
//             steal the data held within these systems.
//           </p>
//         </div>
//         <div class="card p-10 w-96">
//           <figure>
//             <img src={imp4} alt="cyber issue" />
//           </figure>
//           <h1 className="text-green-900 font-bold text-xl pt-8 pb-12 text-center">
//             Phishing
//           </h1>
//           <p>
//             Phishing is a cybercrime in which a target or targets are contacted
//             by email, telephone or text message by someone posing as a
//             legitimate institution to lure individuals into providing sensitive
//             data such as personally identifiable information, banking and credit
//             card details, and passwords.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Important;
import React from "react";

const Important = () => {
  return (
    <div className="relative h-[600px] flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      {/* Background Overlay for Subtle Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-transparent opacity-90"></div>

      {/* Animated Heading */}
      <h1 className="relative text-5xl md:text-6xl font-extrabold mb-6 z-10 animate-glow">
        Why Cyber Security Is Important?
      </h1>

      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-green-700 via-transparent to-transparent animate-expand"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-transparent to-green-800 animate-expand-reverse"></div>

      {/* Paragraph Section */}
      <div className="relative z-10 text-center max-w-4xl">
        <p className="text-lg md:text-2xl mb-6 opacity-0 animate-fade-in">
          Cybersecurity plays a crucial role in today's interconnected world.
          With the surge in digital activities, it protects sensitive data from
          cyberattacks, breaches, and theft.
        </p>
        <p className="text-lg md:text-2xl mb-6 opacity-0 animate-fade-in-delay">
          Without adequate security, personal data, intellectual property, and
          financial assets are vulnerable. Cybersecurity ensures the safety of
          our systems, preventing unauthorized access, data manipulation, and
          digital attacks.
        </p>
        <p className="text-lg md:text-2xl opacity-0 animate-fade-in-late">
          In a world where cybercrime is on the rise, being secure online is
          more important than ever. Secure your future, secure your data.
        </p>
      </div>

      {/* Style for Animations */}
      <style jsx>{`
        @keyframes glow {
          0% {
            text-shadow: 0 0 10px rgba(0, 255, 0, 0.7),
              0 0 20px rgba(0, 255, 0, 0.7), 0 0 30px rgba(0, 255, 0, 0.7);
          }
          50% {
            text-shadow: 0 0 20px rgba(0, 255, 0, 1),
              0 0 40px rgba(0, 255, 0, 1), 0 0 60px rgba(0, 255, 0, 1);
          }
          100% {
            text-shadow: 0 0 10px rgba(0, 255, 0, 0.7),
              0 0 20px rgba(0, 255, 0, 0.7), 0 0 30px rgba(0, 255, 0, 0.7);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-glow {
          animation: glow 2.5s infinite ease-in-out;
        }

        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
          animation-delay: 0.5s;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1.5s ease-out forwards;
          animation-delay: 1s;
        }

        .animate-fade-in-late {
          animation: fadeIn 1.5s ease-out forwards;
          animation-delay: 1.5s;
        }

        .animate-expand {
          animation: expand 2s ease-out forwards;
        }

        .animate-expand-reverse {
          animation: expand 2s ease-out forwards;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default Important;

