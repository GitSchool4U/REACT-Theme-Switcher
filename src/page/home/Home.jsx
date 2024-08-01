import React from "react";
import { useThemeContext } from "../../hooks/themeContext/Context";

const Home = () => {
  const { appBG, fontPrimary, switchToDark, switchToLight } = useThemeContext();

  return (
    <div className="min-h-screen" style={{ backgroundColor: appBG }}>
      <header className="shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold" style={{ color: fontPrimary }}>
            Welcome to Our Website
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <div className="flex flex-col items-center justify-center h-full px-[1rem]">
                <h2
                  className="text-2xl font-semibold mb-4"
                  style={{ color: fontPrimary }}
                >
                  Featured Content
                </h2>
                <p
                  className="text-center max-w-md"
                  style={{ color: fontPrimary }}
                >
                  This is where you can showcase your main content, features, or
                  call-to-action.
                </p>
                <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3
                    className="text-lg font-medium"
                    style={{ color: fontPrimary }}
                  >
                    Card {item}
                  </h3>
                  <p className="mt-1 text-sm" style={{ color: fontPrimary }}>
                    This is some example content for card {item}. You can
                    replace this with actual content.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
