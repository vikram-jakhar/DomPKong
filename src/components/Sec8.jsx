import React, { useState } from "react"
import footerimg from '../assets/img/footer-img.png'
function Accordion({ question, answer }) {
    const [first, firstopen] = useState(false);
    const [second, secondopen] = useState(false);
    const [third, thirdopen] = useState(false);
    const [fourth, fourthopen] = useState(false);
    const [fiveth, fivethopen] = useState(false);
    const [sixth, sixthopen] = useState(false);

    const toggleAccordion1 = () => {
        firstopen(!first);
        secondopen(false)
        thirdopen(false)
        fourthopen(false)
        fivethopen(false)
        sixthopen(false)

    };
    const toggleAccordion2 = () => {
        firstopen(false);
        secondopen(!second)
        thirdopen(false)
        fourthopen(false)
        fivethopen(false)
        sixthopen(false)
    };
    const toggleAccordion3 = () => {
        firstopen(false);
        secondopen(false)
        thirdopen(!third)
        fourthopen(false)
        fivethopen(false)
        sixthopen(false)
    };
    const toggleAccordion4 = () => {
        firstopen(false);
        secondopen(false)
        thirdopen(false)
        fourthopen(!fourth)
        fivethopen(false)
        sixthopen(false)
    };
    const toggleAccordion5 = () => {
        firstopen(false);
        secondopen(false)
        thirdopen(false)
        fourthopen(false)
        fivethopen(!fiveth)
        sixthopen(false)
    };
    const toggleAccordion6 = () => {
        firstopen(false);
        secondopen(false)
        thirdopen(false)
        fourthopen(false)
        fivethopen(false)
        sixthopen(!sixth)
    };

    return (
        <div className="bg-black">
            <h2 className="text-white lg:text-[64px] sm:text-[45px] text-[30px]  font-azo font-normal text-center pb-9 mt-5 ">FAQs</h2>
            <span className="acc-top top-0 z-[-1] left-0"></span>
            <div className="max-w-[900px] mx-auto px-3">
                <div>
                    <h2>
                        <button onClick={toggleAccordion1} className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" >
                            <h5 className="text-white text-[22px] font-Montserrat font-bold leading-{108%}">{question}What is Flowbite?</h5>
                            <span className=" text-4xl font-light text-yellow-500">{first ? '-' : '+'}</span>
                        </button>
                    </h2>
                    <div>
                        {first && (
                            <div className="py-5 border-b border-gray-200  dark:border-gray-700"> {answer}
                                <h5 className="mb-2 text-white text-[22px] font-bold leading-[108%] font-Montserrat">Arcu faucibus diam feugiat magna etiam.</h5>
                                <p className=" text-white text-[16px] font-normal leading-[160%] font-Montserrat"> Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.</p>
                            </div>
                        )}
                    </div>
                    <h2>
                        <button onClick={toggleAccordion2} className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" >
                            <span className="text-white text-[22px] font-Montserrat font-bold leading-{108%}">{question}Fermentum tortor aenean.</span>
                            <span className=" text-4xl font-light text-yellow-500">{second ? '-' : '+'}</span>
                        </button>
                    </h2>
                    <div>
                        {second && (
                            <div className="py-5 border-b border-gray-200  dark:border-gray-700"> {answer}
                                <h5 className="mb-2 text-white text-[22px] font-bold leading-[108%] font-Montserrat">Arcu faucibus diam feugiat magna etiam.</h5>
                                <p className=" text-white text-[16px] font-normal leading-[160%] font-Montserrat"> Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.</p>
                            </div>
                        )}
                    </div>
                    <h2>
                        <button onClick={toggleAccordion3} className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" >
                            <span className="text-white text-[22px] font-Montserrat font-bold leading-{108%}">{question}Dictum est amet sollicitudin.</span>
                            <span className=" text-4xl font-light text-yellow-500">{third ? '-' : '+'}</span>
                        </button>
                    </h2>
                    <div>
                        {third && (
                            <div className="py-5 border-b border-gray-200  dark:border-gray-700"> {answer}
                                <h5 className="mb-2 text-white text-[22px] font-bold leading-[108%] font-Montserrat">Arcu faucibus diam feugiat magna etiam.</h5>
                                <p className=" text-white text-[16px] font-normal leading-[160%] font-Montserrat"> Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.</p>
                            </div>
                        )}
                    </div>
                    <h2>
                        <button onClick={toggleAccordion4} className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" >
                            <span className="text-white text-[22px] font-Montserrat font-bold leading-{108%}">{question}Sed vulputate mi faucibus.</span>
                            <span className=" text-4xl font-light text-yellow-500">{fourth ? '-' : '+'}</span>
                        </button>
                    </h2>
                    <div>
                        {fourth && (
                            <div className="py-5 border-b border-gray-200  dark:border-gray-700"> {answer}
                                <h5 className="mb-2 text-white text-[22px] font-bold leading-[108%] font-Montserrat">Arcu faucibus diam feugiat magna etiam.</h5>
                                <p className=" text-white text-[16px] font-normal leading-[160%] font-Montserrat"> Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.</p>
                            </div>
                        )}
                    </div>
                    <h2>
                        <button onClick={toggleAccordion5} className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" >
                            <span className="text-white text-[22px] font-Montserrat font-bold leading-{108%}">{question}Commodo placerat ultricies.</span>
                            <span className=" text-4xl font-light text-yellow-500">{fiveth ? '-' : '+'}</span>
                        </button>
                    </h2>
                    <div>
                        {fiveth && (
                            <div className="py-5 border-b border-gray-200  dark:border-gray-700"> {answer}
                                <h5 className="mb-2 text-white md:text-[22px] text-[16px] font-bold leading-[108%] font-Montserrat">Arcu faucibus diam feugiat magna etiam.</h5>
                                <p className=" text-white md:text-[16px] text-[12px] font-normal leading-[160%] font-Montserrat"> Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.</p>
                            </div>
                        )}
                    </div>
                    <h2>
                        <button onClick={toggleAccordion6} className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" >
                            <span className="text-white md:text-[22px] text-[16px] font-Montserrat font-bold leading-{108%}">{question}Nunc amet cursus morbi donec.</span>
                            <span className=" text-4xl font-light text-yellow-500">{sixth ? '-' : '+'}</span>
                        </button>
                    </h2>
                    <div>
                        {sixth && (
                            <div className="py-5 border-b border-gray-200  dark:border-gray-700"> {answer}
                                <h5 className="mb-2 text-white md:text-[22px] text-[16px] font-bold leading-[108%] font-Montserrat">Arcu faucibus diam feugiat magna etiam.</h5>
                                <p className=" text-white md:text-[16px] text-[12px] font-normal leading-[160%] font-Montserrat"> Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-8 mb-8">
                <img src={footerimg} alt="loading   " />
            </div>
            <div className="flex justify-center items-center gap-5 mb-7">
                <span><a href="">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 0C4.92545 0 0 4.92545 0 11C0 17.0746 4.92545 22 11 22C17.0746 22 22 17.0746 22 11C22 4.92545 17.0746 0 11 0ZM16.2864 8.29174C16.2937 8.40714 16.2937 8.52746 16.2937 8.64531C16.2937 12.2498 13.5487 16.4018 8.53237 16.4018C6.98549 16.4018 5.55156 15.9525 4.34353 15.179C4.56451 15.2036 4.77567 15.2134 5.00156 15.2134C6.27835 15.2134 7.45201 14.7812 8.3875 14.0496C7.18929 14.025 6.18259 13.2393 5.83884 12.1589C6.25871 12.2203 6.63683 12.2203 7.06897 12.1098C6.45201 11.9845 5.89746 11.6494 5.49955 11.1615C5.10164 10.6736 4.8849 10.0631 4.88616 9.43348V9.39911C5.2471 9.6029 5.67188 9.72812 6.11629 9.74531C5.74269 9.49633 5.4363 9.159 5.22429 8.76324C5.01228 8.36749 4.9012 7.92553 4.90089 7.47656C4.90089 6.9683 5.03348 6.50424 5.27165 6.10156C5.95646 6.94458 6.81099 7.63405 7.77971 8.12518C8.74843 8.61631 9.80966 8.8981 10.8944 8.95223C10.5089 7.09844 11.8938 5.59821 13.5585 5.59821C14.3442 5.59821 15.0513 5.92723 15.5498 6.45759C16.1661 6.34219 16.7554 6.11138 17.2808 5.80201C17.077 6.43304 16.6498 6.96585 16.0826 7.30223C16.6326 7.2433 17.1629 7.09107 17.654 6.87746C17.2833 7.42254 16.8192 7.90625 16.2864 8.29174Z" fill="white" />
                    </svg>
                </a>
                </span>
                <span>
                    <a href="">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.374 5.374 0 12 0C18.629 0 24 5.374 24 12C24 18.626 18.626 24 12 24C5.374 24 0 18.626 0 12ZM5.97007 12.3218L5.91907 12.4028H5.92107C5.91078 12.4189 5.90504 12.4376 5.90448 12.4567C5.90392 12.4758 5.90855 12.4948 5.91788 12.5115C5.92721 12.5282 5.9409 12.5421 5.95748 12.5516C5.97407 12.5612 5.99293 12.5661 6.01207 12.5658H9.21907C9.23663 12.5663 9.25404 12.5625 9.26975 12.5547C9.28546 12.5468 9.29897 12.5352 9.30907 12.5208C9.35124 12.4564 9.39028 12.39 9.42607 12.3218C9.70507 11.8558 9.95207 11.3518 10.0401 10.9798C10.2521 10.0748 9.80007 8.62081 9.28007 7.45181C9.27212 7.43437 9.25963 7.4194 9.24391 7.40844C9.22819 7.39748 9.20982 7.39095 9.19071 7.38951C9.1716 7.38808 9.15246 7.39181 9.13529 7.40031C9.11811 7.4088 9.10353 7.42175 9.09307 7.43781L5.97007 12.3218ZM19.8157 14.1431C19.8273 14.1251 19.8333 14.1042 19.8331 14.0828V13.3098C19.833 13.2931 19.829 13.2767 19.8214 13.2618C19.8139 13.2469 19.803 13.234 19.7897 13.224C19.7763 13.214 19.7608 13.2073 19.7444 13.2043C19.728 13.2013 19.7111 13.2022 19.6951 13.2068L16.0451 14.2638C16.0256 14.2683 16.0081 14.2788 15.9951 14.2938C15.5986 14.7309 15.2637 15.0222 15.1818 15.0935L15.1791 15.0958C14.9511 15.2898 14.6701 15.3938 14.3751 15.3938H13.0531V14.0478H14.1041C14.1311 14.0477 14.157 14.037 14.1761 14.0178L14.3131 13.8958C14.3711 13.8408 14.4371 13.7778 14.5211 13.6938C14.5311 13.6838 14.5415 13.6735 14.5522 13.663C14.5923 13.6233 14.636 13.5802 14.6771 13.5328C14.7331 13.4808 14.7851 13.4208 14.8331 13.3628C14.9181 13.2748 14.9971 13.1828 15.0781 13.0848C15.1381 13.0198 15.191 12.9478 15.244 12.8759L15.2441 12.8758C15.3044 12.8042 15.3621 12.7305 15.4171 12.6548C15.4372 12.6246 15.4597 12.5935 15.4827 12.5615C15.503 12.5333 15.5239 12.5044 15.5441 12.4748C15.5529 12.4609 15.5618 12.447 15.5708 12.4329C15.6007 12.3863 15.6309 12.3389 15.6571 12.2928C15.7601 12.1338 15.8461 11.9608 15.9211 11.7908C15.9508 11.7252 15.975 11.6583 15.9989 11.5922C16.0056 11.5737 16.0123 11.5552 16.0191 11.5368C16.1171 11.2565 16.1532 10.9584 16.1251 10.6628C16.1201 10.5988 16.1151 10.5358 16.1011 10.4788V10.4688C16.096 10.4239 16.0863 10.3797 16.0721 10.3368C16.0291 10.1348 15.9591 9.93581 15.8701 9.73881C15.8411 9.66681 15.8081 9.59281 15.7741 9.52581C15.6951 9.37881 15.6131 9.23281 15.5171 9.09081C15.4995 9.06084 15.4788 9.03023 15.4582 8.99971C15.4423 8.97625 15.4264 8.95284 15.4121 8.92981C15.3371 8.81781 15.2561 8.70981 15.1771 8.60581C15.146 8.56512 15.1115 8.52414 15.0767 8.48273C15.0464 8.44679 15.0159 8.41051 14.9871 8.37381C14.9221 8.29381 14.8601 8.22181 14.7951 8.14781C14.5651 7.88881 14.3251 7.65581 14.1111 7.45681C13.926 7.2818 13.7345 7.11369 13.5371 6.95281C13.5132 6.93316 13.4906 6.91396 13.4691 6.89561C13.4347 6.86631 13.4028 6.83917 13.3721 6.81581C13.3091 6.76781 13.2591 6.72981 13.2251 6.70581C13.218 6.70033 13.2092 6.69608 13.2008 6.6921C13.1985 6.69099 13.1963 6.6899 13.1941 6.68881L13.0531 6.64981V5.48581C13.0526 5.30446 12.9808 5.13059 12.8531 5.00181C12.7913 4.93771 12.7172 4.88677 12.6352 4.85205C12.5532 4.81734 12.4651 4.79957 12.3761 4.79981C11.9991 4.79981 11.6971 5.10681 11.6971 5.48581V6.26881L11.6271 6.24981L11.4351 6.19581L11.2621 6.14581H11.2521L9.93207 5.78881C9.87407 5.77181 9.82607 5.83681 9.85507 5.88981L10.0661 6.27781C10.0772 6.30595 10.0918 6.33512 10.1068 6.36512C10.1174 6.38629 10.1281 6.40788 10.1381 6.42981C10.1742 6.49992 10.2085 6.57095 10.2411 6.64281C10.2704 6.70942 10.3017 6.77512 10.3351 6.83981C10.349 6.87128 10.3633 6.90319 10.3778 6.93559C10.4328 7.05866 10.4911 7.18891 10.5481 7.32981C10.5997 7.44636 10.6471 7.56478 10.6901 7.68481C10.8134 8.00391 10.9229 8.32821 11.0181 8.65681C11.0431 8.73568 11.0639 8.81184 11.085 8.88969C11.0926 8.91745 11.1002 8.94542 11.1081 8.97381L11.1221 9.03381C11.1605 9.18855 11.1932 9.34466 11.2201 9.50181C11.2409 9.60501 11.2569 9.70912 11.2681 9.81381C11.2692 9.82337 11.2704 9.83293 11.2715 9.84251C11.2845 9.95008 11.2975 10.0584 11.3021 10.1658C11.3121 10.2718 11.3161 10.3848 11.3161 10.4928C11.3161 10.7658 11.2921 11.0298 11.2351 11.2798C11.2153 11.3547 11.1936 11.429 11.1701 11.5028C11.152 11.5684 11.1282 11.6345 11.1035 11.7033C11.0954 11.7258 11.0872 11.7486 11.0791 11.7718C11.0707 11.7919 11.0628 11.8124 11.0549 11.8328C11.0419 11.8662 11.029 11.8996 11.0141 11.9318C10.8921 12.2258 10.7401 12.5178 10.5841 12.7918C10.3541 13.1978 10.1231 13.5528 9.96307 13.7838L9.90007 13.8738C9.88861 13.8902 9.88184 13.9094 9.88049 13.9294C9.87914 13.9494 9.88327 13.9693 9.89243 13.9871C9.90158 14.0049 9.91542 14.0199 9.93245 14.0304C9.94948 14.0409 9.96906 14.0466 9.98907 14.0468H11.6971V15.3938H9.97107C9.50807 15.3938 9.07807 15.1318 8.87207 14.7118C8.76407 14.5008 8.72107 14.2678 8.74707 14.0418C8.75207 13.9728 8.70207 13.9098 8.63207 13.9098H5.14707C5.08707 13.9098 5.03907 13.9578 5.03907 14.0158V14.0878C5.03789 14.6158 5.14077 15.1389 5.34184 15.6272C5.54291 16.1154 5.83822 16.5593 6.2109 16.9334C6.58359 17.3074 7.02633 17.6044 7.51383 17.8073C8.00133 18.0102 8.52404 18.115 9.05207 18.1158H15.3061C16.4787 18.1158 17.1441 17.0475 17.7982 15.9974C17.9808 15.7042 18.1625 15.4125 18.3541 15.1458C18.6981 14.6688 19.5251 14.2868 19.7681 14.1838C19.7876 14.1752 19.8042 14.161 19.8157 14.1431Z" fill="white" />
                        </svg>

                    </a>
                </span>
                <span>
                    <a href="">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_0_105)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2985 0.153905C10.003 0.229357 9.31791 0.393163 8.77612 0.51808C8.23433 0.642817 7.15791 1.07115 6.384 1.46992C5.3794 1.9875 4.58113 2.59094 3.59301 3.57987C2.59881 4.57454 2.00597 5.36132 1.48854 6.37265C1.09236 7.14706 0.680955 8.14353 0.574209 8.58709C0.467642 9.03066 0.294806 9.7721 0.190209 10.2347C0.0856119 10.6972 0 11.4881 0 11.9923C0 12.4964 0.0856119 13.2873 0.190209 13.7499C0.294806 14.2124 0.467642 14.9539 0.574209 15.3974C0.680955 15.841 1.09236 16.8375 1.48854 17.6119C2.00597 18.6232 2.59881 19.41 3.59301 20.4047C4.58704 21.3995 5.37331 21.9927 6.384 22.5105C7.15791 22.9069 8.15373 23.3186 8.59702 23.4254C9.0403 23.5321 9.78125 23.705 10.2435 23.8097C10.7058 23.9143 11.4962 24 12 24C12.5038 24 13.2942 23.9143 13.7565 23.8097C14.2187 23.705 14.9597 23.5321 15.403 23.4254C15.8463 23.3186 16.8421 22.9069 17.616 22.5105C18.6267 21.9927 19.413 21.3995 20.407 20.4047C21.4012 19.41 21.994 18.6232 22.5115 17.6119C22.9076 16.8375 23.319 15.841 23.4258 15.3974C23.5324 14.9539 23.7052 14.2124 23.8098 13.7499C23.9144 13.2873 24 12.4964 24 11.9923C24 11.4881 23.9144 10.6972 23.8098 10.2347C23.7052 9.7721 23.5324 9.03066 23.4258 8.58709C23.319 8.14353 22.9076 7.14706 22.5115 6.37265C21.994 5.36132 21.4012 4.57454 20.407 3.57987C19.413 2.58502 18.6267 1.9918 17.616 1.47404C16.8421 1.0776 15.8463 0.665936 15.403 0.559121C14.9597 0.452485 14.2187 0.279538 13.7565 0.174874C13.2942 0.0702094 12.4479 -0.00810972 11.8759 0.00067205C11.3038 0.00963304 10.594 0.0786327 10.2985 0.153905ZM17.5945 8.36056C18.8518 9.61582 19.8806 10.7266 19.8806 10.829C19.8806 10.9315 18.1051 12.786 15.9351 14.9505L11.9898 18.8858L8.05648 14.9462C5.89325 12.7794 4.12245 10.927 4.12137 10.8299C4.1203 10.7327 5.14585 9.6237 6.40048 8.36558L8.68137 6.07802H11.995H15.3084L17.5945 8.36056ZM10.6567 7.7625C10.2627 7.88724 9.69851 8.11772 9.40298 8.27471C9.10746 8.43171 8.35791 9.07654 7.73749 9.7074L6.60931 10.8548L7.95099 12.1299C9.08776 13.2104 9.47481 13.4615 10.486 13.7741C11.1424 13.977 11.8238 14.1429 12 14.1429C12.1762 14.1429 12.8576 13.977 13.514 13.7741C14.5252 13.4615 14.9122 13.2104 16.0488 12.1301L17.3903 10.8551L16.3519 9.79306C15.7807 9.20881 15.0313 8.55071 14.6866 8.33027C14.3418 8.11001 13.6814 7.83563 13.2192 7.72075C12.7569 7.60587 12.1524 7.51715 11.8759 7.52378C11.5993 7.53041 11.0507 7.63777 10.6567 7.7625ZM13.4742 8.79589C13.75 8.99231 14.0952 9.38462 14.2415 9.66761C14.3878 9.95078 14.5075 10.4562 14.5075 10.791C14.5075 11.1257 14.3893 11.6367 14.2447 11.9267C14.1002 12.2167 13.7407 12.6323 13.4459 12.8504C13.0728 13.1264 12.6559 13.2468 12.0733 13.2468C11.5361 13.2468 11.0187 13.1122 10.6288 12.871C10.2946 12.6643 9.90215 12.2652 9.7569 11.9838C9.61146 11.7027 9.49254 11.1822 9.49254 10.8273C9.49254 10.4725 9.61218 9.95078 9.75851 9.66761C9.90484 9.38462 10.2473 8.99482 10.5197 8.80144C10.7921 8.60788 11.1761 8.40698 11.3731 8.35465C11.5701 8.30231 12.0107 8.2998 12.3521 8.34909C12.6937 8.39838 13.1986 8.59946 13.4742 8.79589ZM11.117 10.2662C10.9922 10.4995 10.9187 10.8395 10.9537 11.0216C10.9888 11.2037 11.2384 11.4765 11.5087 11.6277C11.9504 11.8749 12.0496 11.8749 12.4913 11.6277C12.7616 11.4765 13.0112 11.2037 13.0463 11.0216C13.0813 10.8395 13.0078 10.4995 12.883 10.2662C12.7076 9.93823 12.5067 9.84163 12 9.84163C11.4933 9.84163 11.2924 9.93823 11.117 10.2662Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_105">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </a>
                </span>
                <span>
                    <a href="">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM5.58444 5.92949C6.51997 5.53715 7.27627 5.29829 8.26949 5.08148C8.51128 5.0287 8.62448 4.99683 8.70515 5.03454C8.7888 5.07365 8.83746 5.18758 8.95823 5.43064L9.16172 5.84014L9.31825 5.82249C9.40434 5.8128 9.61566 5.78831 9.78785 5.76808C10.1957 5.72019 11.8261 5.72043 12.2141 5.76844C12.3777 5.78868 12.5822 5.81378 12.6686 5.82418L12.8257 5.84309L12.9906 5.49363C13.0814 5.30142 13.1808 5.11171 13.2116 5.0721L13.2675 5L13.5469 5.051C14.3099 5.19027 15.3421 5.49738 16.134 5.82073L16.5633 5.99602L16.7948 6.3544C18.3645 8.78464 19.0787 11.2591 18.9931 13.9716C18.9809 14.3606 18.9615 14.7547 18.9501 14.8473L18.9293 15.0156L18.5223 15.2873C17.4983 15.9709 16.4551 16.4855 15.3021 16.8755C15.0979 16.9446 14.9147 17.0006 14.8951 17C14.7981 16.9968 13.9864 15.6745 14.0483 15.6206C14.064 15.6069 14.1895 15.5516 14.3273 15.4976C14.6762 15.361 15.3291 15.0246 15.3291 14.9814C15.3291 14.9618 15.2664 14.897 15.1899 14.8375C15.0523 14.7306 15.0494 14.7298 14.9394 14.7764C14.0795 15.1401 13.3485 15.3581 12.5428 15.4911C10.7939 15.7799 8.90394 15.5555 7.25244 14.8629L6.93979 14.7318L6.80376 14.8277C6.63659 14.9457 6.62284 14.9663 6.677 15.0179C6.73 15.0685 7.53123 15.4595 7.77642 15.5545C7.87544 15.5928 7.95643 15.6333 7.95643 15.6445C7.95643 15.7358 7.17656 16.9595 7.09995 16.9884C7.07876 16.9964 6.87501 16.9402 6.6472 16.8635C5.5399 16.4909 4.48124 15.9666 3.46398 15.2872L3.05699 15.0154L3.03051 14.8472C3.01592 14.7547 3.00236 14.2222 3.00033 13.664C2.99638 12.5737 3.02616 12.1911 3.1836 11.3094C3.48636 9.61362 4.15531 7.96164 5.18955 6.35573C5.40525 6.02078 5.42976 5.99436 5.58444 5.92949ZM9.72855 11.2091C9.61491 10.7357 9.31678 10.3515 8.90945 10.1538C8.71078 10.0573 8.64354 10.0407 8.40445 10.0296C8.17373 10.0189 8.09461 10.0285 7.92061 10.0885C7.55032 10.216 7.25795 10.4738 7.08029 10.8292C6.75408 11.4819 6.87617 12.2801 7.37745 12.772C8.14358 13.5238 9.32423 13.2029 9.6861 12.1445C9.77141 11.8949 9.79079 11.4683 9.72855 11.2091ZM15.0938 11.5866C15.0951 10.9546 14.7729 10.4166 14.2372 10.1565C14.0315 10.0566 13.9681 10.041 13.7265 10.0305C13.4076 10.0167 13.1913 10.0724 12.934 10.2346C12.4061 10.5674 12.1201 11.2829 12.2578 11.9262C12.5199 13.1513 13.8355 13.5997 14.6503 12.7418C14.9459 12.4306 15.0929 12.0477 15.0938 11.5866Z" fill="white" />
                        </svg>

                    </a>
                </span>
                <span>
                    <a href="">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0C4.92545 0 0 4.92545 0 11C0 17.0746 4.92545 22 11 22C17.0746 22 22 17.0746 22 11C22 4.92545 17.0746 0 11 0ZM17.2857 6.22924L16.2839 7.18929C16.1955 7.25558 16.1538 7.36362 16.171 7.4692V14.5333C16.1538 14.6413 16.1955 14.7493 16.2839 14.8132L17.2661 15.7732V15.9868H12.3357V15.783L13.3498 14.7984C13.4504 14.6978 13.4504 14.6683 13.4504 14.5185V8.80245L10.6268 15.9623H10.2462L6.96094 8.80245V13.6027C6.93147 13.804 7.00268 14.0078 7.14509 14.1527L8.46607 15.7511V15.9647H4.71429V15.7511L6.03527 14.1527C6.10487 14.0808 6.15666 13.9936 6.18651 13.8981C6.21636 13.8026 6.22342 13.7014 6.20714 13.6027V8.05357C6.22433 7.89888 6.1654 7.74911 6.04754 7.64353L4.87388 6.22924V6.01562H8.52009L11.3339 12.1908L13.8114 6.02054H17.2857V6.22924Z" fill="white" />
                        </svg>

                    </a>
                </span>
                <span>
                    <a href="">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0.375C5.57775 0.375 0.375 5.5785 0.375 12C0.375 18.4215 5.5785 23.625 12 23.625C18.4222 23.625 23.625 18.4215 23.625 12C23.625 5.5785 18.4215 0.375 12 0.375ZM17.7098 8.33925L15.8018 17.3302C15.6608 17.9678 15.2812 18.1222 14.7518 17.8223L11.8455 15.6803L10.4438 17.0303C10.2893 17.1847 10.158 17.316 9.858 17.316L10.0642 14.358L15.45 9.492C15.6848 9.28575 15.3982 9.16875 15.0885 9.375L8.43225 13.5653L5.5635 12.6698C4.94025 12.4732 4.926 12.0465 5.69475 11.7465L16.9028 7.42425C17.4233 7.23675 17.8778 7.551 17.709 8.3385L17.7098 8.33925Z" fill="white" />
                        </svg>


                    </a>
                </span>
            </div>
            <div className=" w-full h-[1px] bg-white "></div>
            <p className="text-center text-white text-[16px] font-normal pb-4 pt-4 ">© DomPKong 2022</p>
        </div>
    );
}

export default Accordion;