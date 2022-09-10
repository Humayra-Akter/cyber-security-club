import React from 'react';

const Importants = () => {
        return (
                <div>
                        <h1 className='text-black font-bold text-3xl pt-32 pb-6 text-center'>Why Cyber Security Is Important?</h1>
                        <div className='flex p-10'>
                                <div class="card p-10 w-96">
                                        <figure><img src="https://www.theproche.com/wp-content/uploads/2020/02/security101.png" alt="cyber issue" /></figure>
                                        <h1 className='text-black font-semibold text-xl pt-8 pb-12 text-center'>Cyber Alert</h1>
                                </div>
                                <div class="card p-10 w-96">
                                        <figure><img src="https://learnpanda.school/blog/wp-content/uploads/2021/10/Data_security_24-scaled.jpg" alt="cyber issue" /></figure>
                                        <h1 className='text-black font-semibold text-xl pt-8 pb-12 text-center'>Data Thifting</h1>
                                </div>
                                <div class="card p-10 w-96">
                                        <figure><img src="https://www.visma.com/contentassets/6b3e97d05a79458ba6c76a0ece3be2b9/mobile-services-orange-1.png" alt="cyber issue" /></figure>
                                        <h1 className='text-black font-semibold text-xl pt-8 pb-12 text-center'>Cyber Attacks</h1>
                                </div>
                                <div class="card p-10 w-96">
                                        <figure><img height={150} width={259} src="https://wp-assets.iraiser.eu/wordpress-iraiser.eu/2020/02/visuel-09.png" alt="cyber issue" /></figure>
                                        <h1 className='text-black font-semibold text-xl pt-8 pb-12 text-center'>Fishing</h1>
                                </div>
                        </div>
                </div>
        );
};

export default Importants;