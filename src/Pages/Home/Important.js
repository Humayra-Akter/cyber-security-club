import React from 'react';
import imp1 from '../../images/imp-1.png';
import imp2 from '../../images/imp-2.jpg';
import imp3 from '../../images/imp-3.png';
import imp4 from '../../images/imp-4.png';

const Important = () => {
        return (
                <div className='bg-gradient-to-r from-secondary to-primary'>
                        <h1 className='text-black font-bold text-3xl pt-32 pb-6 text-center'>Why Cyber Security Is Important?</h1>
                        <div className='lg:flex p-10'>
                                <div class="card p-10 w-96 border-l-primary">
                                        <figure><img src={imp1} alt="cyber issue" /></figure>
                                        <h1 className='text-black font-semibold text-xl pt-8 pb-12 text-center'>Cyber Bullying</h1>
                                        <p>Cyber bullying is bullying that takes place over digital devices like cell phones, computers, and tablets. Cyberbullying can occur through SMS, Text, and apps, or online in social media, forums, or gaming where people can view, participate in, or share content. </p>
                                </div>
                                <div class="card p-10 w-96">
                                        <figure><img src={imp2} alt="cyber issue" /></figure>
                                        <h1 className='text-black font-semibold text-xl pt-8 pb-12 text-center'>Data Thrifting</h1>
                                        <p>Thrifted items could be very, VERY old. But you can also occasionally find brand new items at thrift stores . In my opinion, what makes thrifting so special is that you aren’t really going thrifting with the intent of buying one specific item because you never know what you are going to find! It’s like treasure hunting.</p>
                                </div>
                                <div class="card p-10 w-96">
                                        <figure><img src={imp3} alt="cyber issue" /></figure>
                                        <h1 className='text-black font-semibold text-xl pt-8 pb-12 text-center'>Cyber Attacks</h1>
                                        <p>A cyber attack is any attempt to gain unauthorized access to a computer, computing system or computer network with the intent to cause damage. Cyber attacks aim to disable, disrupt, destroy or control computer systems or to alter, block, delete, manipulate or steal the data held within these systems.</p>
                                </div>
                                <div class="card p-10 w-96">
                                        <figure><img height={150} width={259} src={imp4} alt="cyber issue" /></figure>
                                        <h1 className='text-black font-semibold text-xl pt-8 pb-12 text-center'>Phishing</h1>
                                        <p>Phishing is a cybercrime in which a target or targets are contacted by email, telephone or text message by someone posing as a legitimate institution to lure individuals into providing sensitive data such as personally identifiable information, banking and credit card details, and passwords.</p>
                                </div>
                        </div>
                </div>
        );
};

export default Important;