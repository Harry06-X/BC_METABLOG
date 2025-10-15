import React from "react";

const NewsletterBanner = () => {
    return (
        <section className="w-full flex justify-center mt-1 mb-1">
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex justify-center">
                <div className="w-full max-w-[750px] h-[100px] bg-[#E8E8EA] rounded-xl flex flex-col justify-center items-center text-center shadow-md border border-gray-200">
                    <p className="text-gray-500 text-xs font-medium mb-1">
                        Advertisement
                    </p>
                    <h4 className="text-gray-900 font-semibold text-base mb-1">
                        You can place ads
                    </h4>
                    <span className="text-gray-500 text-xs">
                        750x100
                    </span>
                </div>
            </div>
        </section>
    );
};

export default NewsletterBanner;

