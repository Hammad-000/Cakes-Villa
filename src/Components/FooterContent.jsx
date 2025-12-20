import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";

const FooterContent = () => {
    return (
        <div className=" ">
            <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    
                    {/* Contact Section */}
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-3 text-orange-400">Contact</h3>
                        <div className="space-y-2">
                            <p className="hover:text-gray-300 transition-colors cursor-pointer">
                                +923110250787
                            </p>
                            <p className="hover:text-gray-300 transition-colors cursor-pointer">
                                cakesvilla@gmail.com
                            </p>
                            <p className="hover:text-gray-300 transition-colors cursor-pointer">
                                11/56 block b area51
                            </p>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-3 text-orange-400">Follow Us</h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="flex flex-col items-center space-y-1 hover:text-gray-300 transition-colors cursor-pointer">
                                <FaFacebook className="w-8 h-8 text-blue-500" />
                                <span className="text-sm">Facebook</span>
                            </div>
                            <div className="flex flex-col items-center space-y-1 hover:text-gray-300 transition-colors cursor-pointer">
                                <FaInstagram className="w-8 h-8 text-pink-500" />
                              <a href="https://www.instagram.com/cakes_villa002" className="text-sm"> Instagram </a>
                            </div>
                            <div className="flex flex-col items-center space-y-1 hover:text-gray-300 transition-colors cursor-pointer">
                                <FaXTwitter className="w-8 h-8 text-gray-300" />
                                <span  className="text-sm">Twitter</span>
                            </div>
                            <div className="flex flex-col items-center space-y-1 hover:text-gray-300 transition-colors cursor-pointer">
                                <ImWhatsapp className="w-8 h-8 text-green-500" />
                                <span className="text-sm">WhatsApp</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 pt-4 border-t border-gray-700">
                    <p className="text-center text-sm text-gray-300">
                        &copy; 2025 Cakes Villa. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FooterContent;