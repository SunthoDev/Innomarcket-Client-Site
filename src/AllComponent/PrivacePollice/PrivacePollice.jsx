import React, { useEffect } from 'react';
import "./PrivacePollice.css"
import { useLocation } from 'react-router-dom';



const PrivacePollice = () => {
    const {pathname} = useLocation();
    useEffect(() =>{
        window.scrollTo(0, 0);
    }, [pathname])
    return (
        <div>
            <div className='bg-[#202F4E] py-11'></div>

            <div className='PrivacePollice px-2 py-28 md:px-0 w-[100%] lg:w-[1140px] mx-auto pt-10 text-center'>

                <div className="stepOne">
                    <h2>Privacy Police</h2>
                    <p className='mr-0 md:mr-20 text-center md:text-left privacyFont'>At InnoMarkt Consultancy, we prioritize the privacy and protection of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data in accordance with German data protection laws.</p>

                    <div className="leftMargin notice w-[10%] lg:w-[670px] mx-auto mt-8">

                        <div className="data flex">
                            <div className="">
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <h2 className='privacyFont'>1. Data Collection and Utilization We gather personal information about you, such as your name, contact information, and professional details, only for the purpose of delivering software and technology consulting services. We will only treat your data with your permission or as required to meet our contractual commitments.</h2>
                        </div>
                        <div className="data flex">
                            <div className="">
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <h2 className='privacyFont'>2. Data Security We put in place necessary technological and organizational safeguards to protect the security and integrity of your personal information. We safeguard your data against unauthorized access, modification, disclosure, or destruction. Our personnel are educated on data security and confidentiality.Data Retention We retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by applicable laws and regulations. Once the data is no longer required, it will be securely deleted or anonymized.</h2>
                        </div>
                        <div className="data flex">

                            <div className="">
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>


                            <h2 className='privacyFont'>3. Disclosure to Third Parties Without your express consent, we never trade, sell, or otherwise transmit your personal information to a third party. In accordance with tight confidentiality agreements, we could disclose your information to dependable outside service providers that help us deliver our services.
                                <br /><br />
                                <span className='pt-4 privacyFont'>
                                    Analytics and cookies Cookies and other tracking technologies may be used on our website to improve your browsing. These tools gather anonymous data, including IP addresses and statistics on how visitors use websites. To alter your cookie preferences, refresh your browser's settings.
                                </span>
                            </h2>

                        </div>

                    </div>

                </div>


                {/* ---------------------------------------- */}

                <div className="stepTow mt-16">
                    <h3 className='font-bold text-2xl text-left'>Data Proction Police</h3>
                    <p className='mr-0 md:mr-20 text-center md:text-left privacyFont privacyFont'>InnoMarkt Consultancy complies with German data protection laws (Bundesdatenschutzgesetz, or BDSG), which ensures the lawful and safe processing of personal data. The following principles guide us:</p>

                    <div className="leftMargin notice w-[100%] lg:w-[770px] mx-auto mt-8">

                        <div className="data flex">
                            <div className="">
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <h2 className='privacyFont'>1. Legal Obligation To secure your personal information, we follow all applicable data protection laws, regulations, and industry standards.</h2>
                        </div>
                        <div className="data flex ">
                            <div className="">
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <h2 className='privacyFont'>2. Data Reduction We gather and process just the personal data required to carry out our business objectives. We do not keep personal information for any longer than is necessary.</h2>
                        </div>
                        <div className="data flex">
                            <div className="">
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <h2 className='privacyFont'>3. Consent and Purpose Restriction We get your express consent before processing your personal data and only use it for the purposes that we have stated to you.</h2>
                        </div>
                        <div className="data flex">
                            <div className="">
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <h2 className='privacyFont'>4. Data Subjects' Rights You have the right to request access to, correct, remove, or limit the processing of your personal data. We shall react to your requests as soon as possible and provide channels for exercising these rights.</h2>
                        </div>
                        <div className="data flex">
                            <div className="">
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <h2 className='privacyFont'>5. Data Transmissions We guarantee that any overseas transfers of personal data conform with the BDSG and other data protection legislation.
                               <br /><br /><br />
                                <span className='mt-4 privacyFont'>
                                    By using our services or visiting our website, you agree to the collection, processing, and storage of your personal data in accordance with this Privacy Policy and German data protection regulations.
                                    Please contact us if you have any questions or issues regarding our privacy or data protection policies.
                                </span>
                            </h2>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default PrivacePollice;